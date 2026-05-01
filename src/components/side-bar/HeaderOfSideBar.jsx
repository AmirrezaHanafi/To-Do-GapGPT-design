import CloseSideBarHugeIcon from "../Icons/CloseSideBarHugeIcon.jsx";
import SearchHugeIcon from "../Icons/SearchHugeIcon.jsx";
import EditHugeIcon from "../Icons/EditHugeIcon.jsx";

export default function HeaderOfSideBar() {
  return (
    <header className="flex w-65 p-2 items-center justify-between text-white">
      <div className="flex items-center justify-between gap-x-2">
        <button className="rounded-full cursor-pointer transition-colors size-7 flex items-center justify-center p-2  hover:bg-white/10 ">
          <span>
            <CloseSideBarHugeIcon className="size-5.5" />
          </span>
        </button>
        <button className="rounded-full cursor-pointer transition-colors size-7 flex items-center justify-center p-2  hover:bg-white/10 ">
          <span>
            <SearchHugeIcon className="size-5.5" />
          </span>
        </button>
      </div>
      <button className="flex cursor-pointer items-center justify-between px-2 py-3  gap-x-2 rounded-full hover:bg-white/10 transition-colors">
        <span className="text-sm">گفت و گوی جدید</span>
        <EditHugeIcon className="size-5.5" />
      </button>
    </header>
  );
}
