const CurrentDate = () => {
  const date: Date = new (Date as any)();
  const getYear: number = date.getFullYear();
  const getMonth: number = date.getMonth();
  const getDay: number = date.getDay();
  const dayOfWeekName: string = new (Date as any)().toLocaleString("default", {
    weekday: "long",
  });
  return (
    <>
      <div className="current-date">
        <div className="current-date__day-of-week">{dayOfWeekName}</div>
        {`${getYear}.${getMonth + 1}.${getDay}`}
      </div>
    </>
  );
};
export default CurrentDate;
