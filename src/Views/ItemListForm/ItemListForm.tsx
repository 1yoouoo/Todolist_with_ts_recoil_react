import "./ItemListForm.scss";
import InputForm from "../../Components/InputForm/InputForm";
import ItemForm from "../ItemForm/ItemForm";
import { useRecoilValue } from "recoil";
import { TodoType } from "../../types/todoType";
import { todosState } from "../../recoil/todosState";

const ItemListForm = (): JSX.Element => {
  //state
  const todos = useRecoilValue<TodoType[]>(todosState);

  return (
    <div className="item-list-form">
      <InputForm />
      <ul className="item-list-form__list">
        {todos.map((data) => {
          return <ItemForm data={data} key={data.id} />;
        })}
      </ul>
    </div>
  );
};

export default ItemListForm;
