import classNames from "classnames";
import { useState, useRef, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import Button from "../../components/general/Button";
import HamburgerIcon from "../../components/icons/HamburgerIcon";
import useThemeMode from "../../hooks/useThemeMode";
import "./style.css";
import CloseIcon from "../../components/icons/CloseIcon";
import NavItem from "../../components/general/NavItem";
import HomeIcon from "../../components/icons/HomeIcon";
import ArchiveIcon from "../../components/icons/ArchiveIcon";
import data from "../../data/data.json";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useThemeMode();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (sidebarRef.current && !sidebarRef.current.contains(target)) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const dataTags = useMemo(() => Object.entries(
    data.bookmarks.reduce((acc: { [key: string]: number }, item) => {
      item.tags.forEach((tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    }, {})
  ).map(([tag, count]) => ({
    id: tag,
    label: tag,
    count: count,
  })), []);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <>
      <Button
        id="sidebar-button"
        variant="iconOnly"
        icon={<HamburgerIcon />}
        buttonType="secondary"
        onClick={toggleSidebar}
        aria-label="Open sidebar"
      />

      {isOpen &&
        createPortal(
          <div
            className={classNames("sidebar-overlay", { dark: isDarkMode })}
            onClick={closeSidebar}
          >
            <div
              ref={sidebarRef}
              className={classNames("sidebar", {
                open: isOpen,
                dark: isDarkMode,
              })}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="sidebar-close-button"
                onClick={closeSidebar}
                aria-label="Close sidebar"
              >
                <CloseIcon />
              </button>
              <div className="sidebar-content">
                <div className="sidebar-header">
                  <img
                    src={`/images/logo-${isDarkMode ? "dark" : "light"}-theme.svg`}
                    alt="Sidebar logo"
                  />
                </div>
                <div className="sidebar-navitems">
                    <NavItem icon={<HomeIcon />}>Home</NavItem>
                    <NavItem icon={<ArchiveIcon />}>Archived</NavItem>
                </div>
                <div className="sidebar-tags">
                    <span className="sidebar-tags-label text-preset-5">Tags</span>
                    <div>
                        {dataTags.map((tag) => (
                            <NavItem key={tag.id} withCheckbox checked={selectedTags.includes(tag.id)} count={tag.count} onClick={() => handleTagClick(tag.id)}>
                                {tag.label}
                            </NavItem>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Sidebar;
