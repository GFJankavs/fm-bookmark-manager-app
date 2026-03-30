import AppearanceToggle from "./components/AppearanceToggle";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import DropdownItem from "./components/DropdownItem";
import AddIcon from "./components/icons/AddIcon";
import CopyURLIcon from "./components/icons/CopyURLIcon";
import InputField from "./components/InputField";
import TextAreaField from "./components/TextAreaField";

import "./index.css";

function App() {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <AppearanceToggle />
      <Checkbox />
      <DropdownItem label="Copy URL" icon={<CopyURLIcon />} />
      <InputField
        label="URL"
        required
        hint="This is a hint text to help user."
      />
      <TextAreaField
        label="URL"
        hint="This is a hint text to help user."
        required
        id="text-field"
      />
      <Button variant="iconOnly" icon={<AddIcon />} />
    </main>
  );
}

export default App;
