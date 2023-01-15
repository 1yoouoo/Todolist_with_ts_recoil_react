import { useRecoilState } from "recoil";
import Delete from "../../Components/Delete/Delete";
import Pin from "../../Components/Pin/Pin";
import UnPin from "../../Components/UnPin/UnPin";
import { pinsState, todosState } from "../../recoil/todosState";
import { ActivatedVerticalDotPropTypes, TodoType } from "../../types/todoType";
import "./ActivatedVerticalDot.scss";

const ActivatedVerticalDot = ({
  toggle,
  data,
}: ActivatedVerticalDotPropTypes) => {
  const [todos, setTodos] = useRecoilState<TodoType[]>(todosState);
  const [pins, setPins] = useRecoilState<TodoType[]>(pinsState);

  const onDelete = (id?: number): void => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
    console.log(id);
    // setPins(
    //   pins.filter((todo) => {
    //     return todo.id !== id;
    //   })
    // );
    // console.log(id);
  };
  return (
    <span
      className={
        toggle
          ? "activated-vertical-dot-shown"
          : "activated-vertical-dot-hidden"
      }
    >
      <UnPin id={data?.id} />
      <Pin id={data?.id} />
      <Delete id={data?.id} onDelete={onDelete} />
    </span>
  );
};

export default ActivatedVerticalDot;
