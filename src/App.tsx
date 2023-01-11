import React from "react";
import "./App.scss";
import CurrentDate from "./Components/CurrentDate";
import ItemListForm from "./Views/ItemListForm";

function App() {
  return (
    <>
      <form className="to-do-list-form">
        <CurrentDate />
        <div>할 일을 적어주세요</div>
        <input />
        <ItemListForm />
      </form>
    </>
  );
}

export default App;
