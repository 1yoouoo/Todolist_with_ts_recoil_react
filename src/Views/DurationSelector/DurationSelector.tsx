import "./DurationSelector.scss";

const DurationSelector = () => {
  return (
    <nav className="duration-nav">
      <span className="duration-nav__day">Day</span>
      <span className="duration-nav__week">Week</span>
      <span className="duration-nav__month">Month</span>
      <span className="duration-nav__year">Year</span>
    </nav>
  );
};

export default DurationSelector;
