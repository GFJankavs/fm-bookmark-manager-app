import ProfileMenu from "./modules/ProfileMenu";
import "./index.css";
import AddBookmark from "./modules/AddBookmark";

function App() {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <ProfileMenu />
      <AddBookmark />
    </main>
  );
}

export default App;
