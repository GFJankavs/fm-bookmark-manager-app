import Button from "../../components/general/Button";
import InputField from "../../components/general/InputField";
import AddIcon from "../../components/icons/AddIcon";
import SearchIcon from "../../components/icons/SearchIcon";
import Sidebar from "../Sidebar";
import ProfileMenu from "../ProfileMenu";
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-left">
                <Sidebar />
                <InputField icon={<SearchIcon size={15} />} placeholder="Search by title..." />
            </div>
            <div className="navbar-right">
                <Button variant="iconOnly" icon={<AddIcon />} buttonType="primary" />
                <Button variant="primary" iconLeft={<AddIcon />}>
                    Add bookmark
                </Button>
                <ProfileMenu />
            </div>
        </nav>
    );
}

export default Navbar;