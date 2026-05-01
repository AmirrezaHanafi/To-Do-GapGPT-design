import PlusIcon from "../Icons/PlusIcon.jsx";
import MicIcon from "../Icons/MicIcon.jsx";
import VoiceIcon from "../Icons/VoiceIcon.jsx";

export default function IntialEntry({
  inputValue,
  handleChangeInput,
  handleClickButton,
}) {
  return (
    <div className="flex-1 min-h-screen bg-neutral-800 flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8">
        <h1 className="text-white text-4xl font-bold mb-2">خوش آمدید</h1>
        <h1 className="text-white text-3xl font-bold mb-2">
          بریم برای یه برنامه ریزی خفن!
        </h1>
        <p className="text-gray-400">
          هم‌اکنون قدرت گرفته از یک ذهن مشتاق یادگیری
        </p>
      </div>

      <div className="w-full max-w-3xl flex items-center gap-2 bg-white/10 rounded-full px-4 py-3">
        <button className="text-gray-400 rounded-full hover:bg-white/20 p-2 transition-colors hover:text-white">
          <VoiceIcon className="size-6 " />
        </button>
        <input
          type="text"
          value={inputValue}
          className="flex-1 bg-transparent text-white outline-none placeholder-gray-400"
          placeholder="تودوی خود را وارد کنید..."
          onChange={handleChangeInput}
          onKeyDown={(e) => e.key === "Enter" && handleClickButton()}
        />
        <button className="text-gray-400 cursor-pointer mx-2 rounded-full hover:bg-white/20 p-2 transition-colors hover:text-white">
          <MicIcon className="size-5.5" />
        </button>

        <button
          className="bg-white text-black rounded-full p-2 hover:bg-white/50 cursor-pointer transition-colors  "
          onClick={handleClickButton}
        >
          <PlusIcon className="size-5.5" />
        </button>
      </div>
    </div>
  );
}
