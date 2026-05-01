import SideBar from "./components/side-bar/SideBar.jsx";
import Main from "./components/Main.jsx";

export default function App() {
  return (
    <div className=" flex overflow-x-hidden ">
      <SideBar />
      <Main />
    </div>
  );
}
