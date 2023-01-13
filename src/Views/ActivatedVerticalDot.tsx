const ActivatedVerticalDot = ({ toggle }: any) => {
  return (
    <span
      className={
        toggle
          ? "activated-vertical-dot-shown"
          : "activated-vertical-dot-hidden"
      }
    >
      <span className="activated-vertical-dot__pin">pin</span>
      <span className="activated-vertical-dot__delete">delete</span>
    </span>
  );
};

export default ActivatedVerticalDot;
