import { useState } from "react";
import InputForm from "../Components/InputForm";
// type
type DummyData = { id: string; task: string };
const initialData = [
  {
    id: "1",
    task: "this is test code !",
  },
  {
    id: "2",
    task: "this is test code !",
  },
  {
    id: "3",
    task: "this is test code !",
  },
  {
    id: "4",
    task: "this is test code !",
  },
  {
    id: "5",
    task: "this is test code !",
  },
];

const ItemListForm = (): JSX.Element => {
  // dummydata
  const [data, setData] = useState<DummyData[]>(initialData);

  //state
  const [inputValue, setInputValue] = useState("");

  //function
  const addData = () => {
    setData([...data, { id: "5", task: inputValue }]);
  };
  const onChangeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const onKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addData();
      console.log(inputValue);
    }
  };

  return (
    <div className="item-list-form">
      <InputForm
        onChangeInputValue={onChangeInputValue}
        inputValue={inputValue}
        onKeyDownEnter={onKeyDownEnter}
      />
      <ul className="item-list-form__list">
        {/* PIN */}
        <li className="item-list-form__list--pin">
          <svg
            id="pin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" />
          </svg>
          <span>
            <input type="checkbox" id="check1" />
            <label htmlFor="check1"></label>
            <span>Practice to get used to TypeScript</span>
          </span>
          <svg
            id="vertical-dot"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
          >
            <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
          </svg>
        </li>
        {data.map((task) => {
          return (
            <li key={task.id}>
              <span>
                <input type="checkbox" id={task.id} />
                <label htmlFor={task.id}></label>
                <span>{task.task}</span>
              </span>
              <svg
                id="vertical-dot"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 512"
              >
                <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
              </svg>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemListForm;
