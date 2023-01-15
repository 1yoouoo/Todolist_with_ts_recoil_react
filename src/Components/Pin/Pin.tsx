import { TogglePropTypes } from "../../types/todoType";
import "./Pin.scss";

const Pin = ({ id, onPin }: TogglePropTypes) => {
  // function

  return (
    <span className="toggle__shown-pin" onClick={() => onPin?.(id)}>
      pin
    </span>
  );
};

export default Pin;
