import Delete from "../../Components/Delete/Delete";
import Pin from "../../Components/Pin/Pin";
import "./ActivatedVerticalDot.scss";

const ActivatedVerticalDot = ({ toggle }: { toggle: boolean }) => {
  return (
    <span
      className={
        toggle
          ? "activated-vertical-dot-shown"
          : "activated-vertical-dot-hidden"
      }
    >
      <Pin />
      <Delete />
    </span>
  );
};

export default ActivatedVerticalDot;
