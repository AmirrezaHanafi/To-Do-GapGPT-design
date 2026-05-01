import MenuHugeIcon from "../Icons/MenuHugeIcon.jsx";
import ImageHugeIcon from "../Icons/ImageHugeIcon.jsx";
import CubeHugeIcon from "../Icons/CubeHugeIcon.jsx";
import CodeHugeIcon from "../Icons/CodeHugeIcon.jsx";
import NewFolderHugeIcon from "../Icons/NewFolderHugeIcon.jsx";

export default function TitleOfSideBar() {
  return (
    <div className="flex flex-col items-start gap-y-1 mt-2 ">
      <button className="flex w-full bg-transparent gap-x-2 rounded-xl transition-colors py-2 px-2 cursor-pointer hover:bg-white/10">
        <span>
          <MenuHugeIcon className="size-5.5 " />
        </span>
        <span>لیست مدل ها</span>
      </button>
      <button className="flex w-full bg-transparent gap-x-2 rounded-xl transition-colors py-2 px-2 cursor-pointer hover:bg-white/10">
        <span>
          <ImageHugeIcon className="size-5.5 " />
        </span>
        <span>تولید تصویر</span>
      </button>
      <button className="flex w-full bg-transparent gap-x-2 rounded-xl transition-colors py-2 px-2 cursor-pointer hover:bg-white/10">
        <span>
          <CubeHugeIcon className="size-5.5 " />
        </span>
        <span>دستیار ها </span>
      </button>
      <button className="flex w-full bg-transparent gap-x-2 rounded-xl transition-colors py-2 px-2 cursor-pointer hover:bg-white/10">
        <span>
          <CodeHugeIcon className="size-5.5 " />
        </span>
        <span>برنامه نویسی ها</span>
      </button>
      <button className="flex w-full bg-transparent gap-x-2 rounded-xl transition-colors py-2 px-2 cursor-pointer hover:bg-white/10">
        <span>
          <NewFolderHugeIcon className="size-5.5 " />
        </span>
        <span>پروژه جدید</span>
      </button>
    </div>
  );
}
