import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
// import "./Input.scss";

interface ITextareaType {
  errors: string | false | JSX.Element;
  labelType: string;
  label: string;
  placeholder: string;
  inputRequired: UseFormRegisterReturn<string>;
  nameInput: string;
}

const InputTextarea = ({
  nameInput,
  errors,
  label,
  labelType,
  inputRequired,
  placeholder,
}: ITextareaType) => {
  return (
    <div className="textareaBox">
      <div className="extareaBox__box">
        <label className="extareaBox__box-label" htmlFor={labelType}>
          {label}
        </label>
        <textarea
          className={`extareaBox__box-text ${errors ? "errorInput" : ""}`}
          id={labelType}
          placeholder={placeholder}
          {...inputRequired}
          name={nameInput}
        />
      </div>
      {errors && <span className="InputError">{errors}</span>}
    </div>
  );
};

export default InputTextarea;
