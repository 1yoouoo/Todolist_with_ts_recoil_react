import "./ItemListForm.scss";
import React from "react";
import InputForm from "../../Components/InputForm/InputForm";
import ItemForm from "../ItemForm/ItemForm";
import { useRecoilValue } from "recoil";
import { TodoType } from "../../types/todoType";
import { pinState, todosState } from "../../recoil/todosState";

const ItemListForm = (): JSX.Element => {
  //state
  const todos = useRecoilValue<TodoType[]>(todosState);
  const pins = useRecoilValue<TodoType[]>(pinState);
  return (
    <div className="item-list-form">
      <InputForm />
      <ul className="item-list-form__list">
        {pins &&
          pins.map((pin) => {
            return <ItemForm pin={pin} />;
          })}
        {todos.map((data) => {
          return <ItemForm data={data} />;
        })}
      </ul>
    </div>
  );
};

export default ItemListForm;
