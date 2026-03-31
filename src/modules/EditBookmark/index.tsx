import { Cross2Icon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { Dialog } from "radix-ui";
import Button from "../../components/general/Button";
import InputField from "../../components/general/InputField";
import TextAreaField from "../../components/general/TextAreaField";
import AddIcon from "../../components/icons/AddIcon";
import useThemeMode from "../../hooks/useThemeMode";

const EditBookmark = () => {
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
        <Dialog.Overlay className="edit-bookmark-overlay" />
        <Dialog.Content
          className={classNames("edit-bookmark-content", { dark: isDarkMode })}
        >
          <div className="edit-bookmark-header">
            <Dialog.Title className="edit-bookmark-title text-preset-1">
              Edit Bookmark
            </Dialog.Title>
            <Dialog.Description className="edit-bookmark-description text-preset-4-medium">
              Update your saved link details — change the title, description,
              URL, or tags anytime.
            </Dialog.Description>
          </div>
          <form className="edit-bookmark-form">
            <InputField label="Title" required />
            <TextAreaField label="Description" required />
            <InputField label="Website URL" required />
            <InputField
              label="Tags"
              required
              placeholder="e.g. design, learning, tools"
            />

            {/* <div
            style={{
              display: "flex",
              //   marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
          </div> */}
          </form>
          <div className="edit-bookmark-actions">
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Save Bookmark</Button>
          </div>
          <Dialog.Close asChild>
            <Button
              variant="iconOnly"
              aria-label="Close"
              className="edit-bookmark-close-icon"
              icon={<Cross2Icon />}
            />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default EditBookmark;
