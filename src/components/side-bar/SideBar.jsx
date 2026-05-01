import HeaderOfSideBar from "./HeaderOfSideBar.jsx";
import TitleOfSideBar from "./TitleOfSideBar.jsx";

export default function SideBar() {
  return (
    <div className=" w-65 text-white    bg-[#171717] min-h-screen">
      <HeaderOfSideBar />
      <TitleOfSideBar />
    </div>
  );
}
