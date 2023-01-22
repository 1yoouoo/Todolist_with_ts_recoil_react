import "./Delete.scss";
import { TogglePropTypes } from "../../types/todoType";

const Delete = ({ id, onDelete }: TogglePropTypes) => {
  return (
    <span className="toggle__shown-delete" onClick={() => onDelete?.(id)}>
      delete
    </span>
  );
};

export default Delete;
