import { TogglePropTypes } from "../../types/todoType";
import "./UnPin.scss";

const UnPin = ({ id, onUnPin }: TogglePropTypes) => {
  // function

  return (
    <span className="toggle__shown-pin" onClick={() => onUnPin?.(id)}>
      unpin
    </span>
  );
};

export default UnPin;
