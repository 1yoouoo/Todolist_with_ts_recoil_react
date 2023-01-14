import "./Delete.scss";
import { useRecoilState } from "recoil";
import { TodoType } from "../../types/todoType";
import { todosState } from "../../recoil/todosState";
type DeleteProps = {
  id: number;
};
const Delete = ({ id }: DeleteProps) => {
  const [todos, setTodos] = useRecoilState<TodoType[]>(todosState);
  const onDelete = (id: number): void => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  return (
    <span className="toggle__shown-delete" onClick={() => onDelete(id)}>
      delete
    </span>
  );
};

export default Delete;
