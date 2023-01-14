import Delete from "../../Components/Delete/Delete";
import Pin from "../../Components/Pin/Pin";
import { TodoType } from "../../types/todoType";
import "./ActivatedVerticalDot.scss";
type ActivatedVerticalDot = {
  toggle: boolean;
  data: TodoType;
};
const ActivatedVerticalDot = ({ toggle, data }: ActivatedVerticalDot) => {
  return (
    <span
      className={
        toggle
          ? "activated-vertical-dot-shown"
          : "activated-vertical-dot-hidden"
      }
    >
      {/* <Pin pin={data.pin}/> */}
      <Delete id={data.id} />
    </span>
  );
};

export default ActivatedVerticalDot;
