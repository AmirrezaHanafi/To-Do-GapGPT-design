import { useState } from "react";
import IntialEntry from "./Main/IntialEntry.jsx";
import AfterIntailRender from "./Main/AfterIntailRender.jsx";
import useTodoStore from "../stores/todo-store.js";

export default function Main() {
  const [inputValue, setInputValue] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const addItem = useTodoStore((state) => state.addTodo);
  const todos = useTodoStore((state) => state.todos);

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleClickButton = () => {
    if (inputValue.trim()) {
      addItem(inputValue);
      setInputValue("");
      setHasStarted(true);
    }
  };

  const todoItems = todos.filter((item) => item.status === "todo");
  const doingItems = todos.filter((item) => item.status === "doing");
  const doneItems = todos.filter((item) => item.status === "done");

  return hasStarted ? (
    <AfterIntailRender
      todoItems={todoItems}
      doingItems={doingItems}
      doneItems={doneItems}
      inputValue={inputValue}
      handleChangeInput={handleChangeInput}
      handleClickButton={handleClickButton}
    />
  ) : (
    <IntialEntry
      handleClickButton={handleClickButton}
      inputValue={inputValue}
      handleChangeInput={handleChangeInput}
    />
  );
}
