import React from "react";
import { useRecoilState } from "recoil";
import { todoInputState, todosState } from "../../recoil/todosState";
import { TodoType } from "../../types/todoType";
import "./InputForm.scss";

const InputForm = () => {
  const [inputValue, setInputValue] = useRecoilState<string>(todoInputState);
  const [todos, setTodos] = useRecoilState<TodoType[]>(todosState);

  // function
  const findLastId = () => {
    const lastId = todos.slice(-1)[0].id;
    return lastId;
  };
  const addData = () => {
    const newId = findLastId() + 1;
    setTodos([...todos, { id: newId, pin: false, task: inputValue }]);
  };
  const onChangeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const onKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (todos.length > 8) {
        alert("할 일이 너무 많습니다 ..");
      } else {
        addData();
        setInputValue("");
      }
    }
  };

  return (
    <div className="input-form">
      <input
        className="input-form__input"
        placeholder="Add a task ..."
        value={inputValue}
        onChange={(e) => onChangeInputValue(e)}
        onKeyDown={(e) => onKeyDownEnter(e)}
      />
    </div>
  );
};

export default InputForm;
