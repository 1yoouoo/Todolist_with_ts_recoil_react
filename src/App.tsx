import React from "react";
import "./App.scss";
import CurrentDate from "./Views/CurrentDate";
import DurationSelector from "./Views/DurationSelector";
import ItemListForm from "./Views/ItemListForm";

function App() {
  return (
    <>
      <form className="to-do-list-form">
        <DurationSelector />
        <CurrentDate />
        <ItemListForm />
      </form>
    </>
  );
}

export default App;
