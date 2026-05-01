import PlusIcon from "../Icons/PlusIcon.jsx";
import VoiceIcon from "../Icons/VoiceIcon.jsx";
import MicIcon from "../Icons/MicIcon.jsx";
import DeleteIcon from "../Icons/DeleteIcon.jsx";
import useTodoStore from "../../stores/todo-store.js";

export default function AfterIntailRender({
  todoItems,
  doingItems,
  doneItems,
  inputValue,
  handleChangeInput,
  handleClickButton,
}) {
  const changeStatus = useTodoStore((state) => state.changeStatus);
  const deleteTodo = useTodoStore((state) => state.removeTodo);

  return (
    <div className="flex-1 min-h-screen bg-neutral-800 flex flex-col px-4 overflow-x-scroll">
      <div className="flex-1 py-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* TODO */}
          <div className="flex min-h-[600px] flex-col gap-3 bg-neutral-700 px-5 py-5 rounded-lg">
            <h2 className="text-gray-100 text-xl font-bold mb-2">Todo</h2>
            {todoItems.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-600 rounded-lg p-4 hover:bg-neutral-500 transition-colors flex items-center justify-between"
              >
                <p className="text-gray-100">{item.title}</p>
                <div className="flex items-center  gap-x-2">
                  <button
                    onClick={() => changeStatus(item.id, "doing")}
                    className="text-black px-2 py-1 rounded-md cursor-pointer hover:bg-white/80 bg-white/50"
                  >
                    شروع
                  </button>
                  <button
                    onClick={() => deleteTodo(item.id)}
                    className="p-2 rounded-full hover:bg-rose-700 transition-colors duration-300 cursor-pointer "
                  >
                    <DeleteIcon className={"size-5.5 text-white"} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* DOING */}
          <div className="flex min-h-[600px] flex-col gap-3 bg-neutral-700 px-5 py-5 rounded-lg">
            <h2 className="text-gray-100 text-xl font-bold mb-2">Doing</h2>
            {doingItems.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-600 rounded-lg p-4 hover:bg-neutral-500 transition-colors flex items-center justify-between"
              >
                <p className="text-gray-100">{item.title}</p>
                <div className="flex items-center  gap-x-2">
                  <button
                    onClick={() => changeStatus(item.id, "done")}
                    className="text-black px-2 py-1 rounded-md cursor-pointer hover:bg-white/80 bg-white/50"
                  >
                    تمام!
                  </button>
                  <button
                    onClick={() => deleteTodo(item.id)}
                    className="p-2 rounded-full hover:bg-rose-700 transition-colors duration-300 cursor-pointer "
                  >
                    <DeleteIcon className={"size-5.5 text-white"} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* DONE */}
          <div className="flex flex-col min-h-[600px] gap-3 bg-neutral-700 px-5 py-5 rounded-lg">
            <h2 className="text-gray-100 text-xl font-bold mb-2">Done</h2>
            {doneItems.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-600 rounded-lg p-4 hover:bg-neutral-500 transition-colors flex items-center justify-between"
              >
                <p className="text-gray-100">{item.title}</p>
                <div className="flex items-center  gap-x-2">
                  <button
                    onClick={() => deleteTodo(item.id)}
                    className="p-2 rounded-full hover:bg-rose-700 transition-colors duration-300 cursor-pointer "
                  >
                    <DeleteIcon className={"size-5.5 text-white"} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-neutral-800 py-4 border-t border-neutral-700 rounded-md">
        <div className="max-w-3xl mx-auto flex items-center gap-2 bg-white/10 rounded-full px-4 py-3">
          <button className="text-gray-400 rounded-full hover:bg-white/20 p-2 transition-colors hover:text-white">
            <VoiceIcon className="size-6 " />
          </button>
          <input
            type="text"
            value={inputValue}
            className="flex-1 bg-transparent text-white outline-none placeholder-gray-400"
            placeholder="میخوای یه کار جدید انجام بدی؟"
            onChange={handleChangeInput}
            onKeyDown={(e) => e.key === "Enter" && handleClickButton()}
          />
          <button className="text-gray-400 cursor-pointer mx-2 rounded-full hover:bg-white/20 p-2 transition-colors hover:text-white">
            <MicIcon className="size-5.5" />
          </button>
          <button
            className="bg-white text-gray-900 rounded-full p-2 hover:bg-white/80"
            onClick={handleClickButton}
          >
            <PlusIcon className="size-5.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
