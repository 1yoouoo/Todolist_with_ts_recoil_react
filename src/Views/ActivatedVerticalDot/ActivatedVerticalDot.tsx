import { useRecoilState } from "recoil";
import Delete from "../../Components/Delete/Delete";
import Pin from "../../Components/Pin/Pin";
import { pinState, todosState } from "../../recoil/todosState";
import { ActivatedVerticalDotPropTypes, TodoType } from "../../types/todoType";
import "./ActivatedVerticalDot.scss";

const ActivatedVerticalDot = ({
  toggle,
  data,
}: ActivatedVerticalDotPropTypes) => {
  const [pins, setPins] = useRecoilState<TodoType[]>(pinState);
  const [todos, setTodos] = useRecoilState<TodoType[]>(todosState);
  const onPin = (id?: number): void => {
    setPins(
      todos.filter((todo) => {
        return todo.id === id;
      })
    );
    onDelete(id);
  };
  const onDelete = (id?: number): void => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  return (
    <span
      className={
        toggle
          ? "activated-vertical-dot-shown"
          : "activated-vertical-dot-hidden"
      }
    >
      <Pin id={data?.id} onPin={onPin} />
      <Delete id={data?.id} onDelete={onDelete} />
    </span>
  );
};

export default ActivatedVerticalDot;
