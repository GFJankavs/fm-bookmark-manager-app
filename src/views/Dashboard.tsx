import ProfileMenu from "../modules/ProfileMenu";
import AddBookmark from "../modules/AddBookmark";

function Dashboard() {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <ProfileMenu />
      <AddBookmark />
    </main>
  );
}

export default Dashboard;
