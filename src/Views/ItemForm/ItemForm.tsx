import "./ItemForm.scss";

import { useState } from "react";
import ActivatedVerticalDot from "../ActivatedVerticalDot/ActivatedVerticalDot";
type ItemForProps = {
  data: DataObject;
  idx: number;
};
type DataObject = {
  id: number;
  task: string;
};
const ItemForm = (props: ItemForProps) => {
  const { data, idx } = props;
  const [toggle, setToggle] = useState(false);
  const onClickVerticalDot = (data: DataObject) => {
    setToggle(!toggle);
    console.log(data);
  };
  return (
    <>
      <li key={idx}>
        <span>
          <input type="checkbox" id={`${idx}`} />
          <label htmlFor={`${idx}`}></label>
          <span>{data.task}</span>
        </span>
        <span
          className="item-list-form__list--vertical-dot"
          onClick={() => onClickVerticalDot(data)}
        >
          <svg
            id="vertical-dot"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
          >
            <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
          </svg>
          <ActivatedVerticalDot toggle={toggle} />
        </span>
      </li>
    </>
  );
};

export default ItemForm;
