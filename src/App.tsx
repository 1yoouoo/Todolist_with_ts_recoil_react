import React from "react";
import CurrentDate from "./Views/CurrentDate/CurrentDate";
import DurationSelector from "./Views/DurationSelector/DurationSelector";
import ItemListForm from "./Views/ItemListForm/ItemListForm";

function App() {
  return (
    <>
      <form
        className="to-do-list-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <DurationSelector />
        <CurrentDate />
        <ItemListForm />
      </form>
    </>
  );
}

export default App;
