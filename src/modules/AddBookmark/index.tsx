import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";
import Button from "../../components/general/Button";
import AddIcon from "../../components/icons/AddIcon";
import InputField from "../../components/general/InputField";
import TextAreaField from "../../components/general/TextAreaField";
import useThemeMode from "../../hooks/useThemeMode";
import classNames from "classnames";

const AddBookmark = () => {
  const { isDarkMode } = useThemeMode();
  return (
    <Dialog.Root>
      <div>
        <Dialog.Trigger asChild>
          <Button variant="primary" size="md" iconLeft={<AddIcon />}>
            Add Bookmark
          </Button>
        </Dialog.Trigger>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="add-bookmark-overlay" />
        <Dialog.Content
          className={classNames("add-bookmark-content", { dark: isDarkMode })}
        >
          <div className="add-bookmark-header">
            <Dialog.Title className="add-bookmark-title text-preset-1">
              Add Bookmark
            </Dialog.Title>
            <Dialog.Description className="add-bookmark-description text-preset-4-medium">
              Save a link with details to keep your collection organized.
            </Dialog.Description>
          </div>
          <form className="add-bookmark-form">
            <InputField label="Title" required />
            <TextAreaField label="Description" required />
            <InputField label="Website URL" required />
            <InputField
              label="Tags"
              required
              placeholder="e.g. design, learning, tools"
            />
          </form>
          <div className="add-bookmark-actions">
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Add Bookmark</Button>
          </div>
          <Dialog.Close asChild>
            <Button
              variant="iconOnly"
              aria-label="Close"
              className="add-bookmark-close-icon"
              icon={<Cross2Icon />}
            />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddBookmark;
