import { useRecoilState } from "recoil";
import Delete from "../../Components/Delete/Delete";
import Pin from "../../Components/Pin/Pin";
import UnPin from "../../Components/UnPin/UnPin";
import { todosState } from "../../recoil/todosState";
import { ActivatedVerticalDotPropTypes, TodoType } from "../../types/todoType";
import "./ActivatedVerticalDot.scss";

const ActivatedVerticalDot = ({
  toggle,
  data,
}: ActivatedVerticalDotPropTypes) => {
  const [todos, setTodos] = useRecoilState<TodoType[]>(todosState);

  const onDelete = (id?: number): void => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const onUnPin = (id?: number): void => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, pin: !todo.pin } : todo;
      })
    );
  };
  const onPin = (id?: number): void => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, pin: !todo.pin } : todo;
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
      {data?.pin === true ? (
        <>
          <UnPin id={data?.id} onUnPin={onUnPin} />
        </>
      ) : (
        <>
          <Pin id={data?.id} onPin={onPin} />
          <Delete id={data?.id} onDelete={onDelete} />
        </>
      )}
    </span>
  );
};

export default ActivatedVerticalDot;
