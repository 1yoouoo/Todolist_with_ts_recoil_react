import React, { Children, InputHTMLAttributes } from "react";

type InputFormProps = {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputForm = (props: InputFormProps) => {
  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onChangeInputValue");
    props.onChangeInput(e);
  };

  return (
    <div className="input-form">
      <input
        className="input-form__input"
        placeholder="Add a task ..."
        onChange={(e) => {
          console.log("InputForm event");
          onChangeInputValue(e);
        }}
      />
    </div>
  );
};

export default InputForm;
