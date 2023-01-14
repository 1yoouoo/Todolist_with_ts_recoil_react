const ActivatedVerticalDot = ({ toggle }: { toggle: boolean }) => {
  return (
    <span
      className={
        toggle
          ? "activated-vertical-dot-shown"
          : "activated-vertical-dot-hidden"
      }
    >
      <span className="activated-vertical-dot-shown__pin">pin</span>
      <span className="activated-vertical-dot-shown__delete">delete</span>
    </span>
  );
};

export default ActivatedVerticalDot;
