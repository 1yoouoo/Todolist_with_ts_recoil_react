import "./CurrentDate.scss";

const CurrentDate = () => {
  const date: Date = new Date();
  const getYear: number = date.getFullYear();
  const getMonth = date.toLocaleString("default", { month: "long" });
  const getDay: number = date.getDay();
  const dayOfWeekName: string = date.toLocaleString("default", {
    weekday: "long",
  });
  return (
    <>
      <div className="current-date">
        <span className="current-date__day-of-week">{dayOfWeekName}</span>
        <span className="current-date__ymd">
          {`${getMonth.slice(0, 3)} ${getDay}, ${getYear}`}
        </span>
      </div>
    </>
  );
};
export default CurrentDate;
