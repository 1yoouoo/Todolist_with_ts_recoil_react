import React from "react";

type InputFormProps = {
  onChangeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
};

const InputForm = ({ onChangeInputValue, inputValue }: InputFormProps) => {
  return (
    <div className="input-form">
      <input
        className="input-form__input"
        placeholder="Add a task ..."
        value={inputValue}
        onChange={(e) => onChangeInputValue(e)}
      />
    </div>
  );
};

export default InputForm;
