import React from "react";
import "./InputForm.scss";

type InputFormProps = {
  onChangeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  onKeyDownEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const InputForm = (props: InputFormProps) => {
  const { onChangeInputValue, inputValue, onKeyDownEnter } = props;

  return (
    <div className="input-form">
      <input
        className="input-form__input"
        placeholder="Add a task ..."
        value={inputValue}
        onChange={(e) => onChangeInputValue(e)}
        onKeyDown={(e) => onKeyDownEnter(e)}
      />
    </div>
  );
};

export default InputForm;
