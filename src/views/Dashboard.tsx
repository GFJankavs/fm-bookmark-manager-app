import ProfileMenu from "../modules/ProfileMenu";
import AddBookmark from "../modules/AddBookmark";

function DashboardPage() {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <ProfileMenu />
      <AddBookmark />
    </main>
  );
}

export default DashboardPage;
