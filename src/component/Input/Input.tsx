import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputType {
  errors: string | false | JSX.Element;
  labelType: string;
  label: string;
  placeholder: string;
  inputType: string;
  nameInput: string;
  inputRequired: UseFormRegisterReturn<string>;
  eyeImage?: string;
  altEyeInput?: string;
  handleClick?: () => void;
  autocomplete?: string;
  classNameInput?: string;
}

const Input = ({
  errors,
  labelType,
  label,
  placeholder,
  inputType,
  inputRequired,
  eyeImage,
  altEyeInput,
  handleClick,
  nameInput,
  autocomplete,
}: IInputType) => {
  return (
    <div className="InputBox">
      <div className="InputBox__box">
        <label className="InputBox__box-label" htmlFor={labelType}>
          {label}
        </label>
        <div className="InputBox__box-filed">
          <img
            className="InputBox__box-filed--img"
            src={eyeImage}
            alt={altEyeInput}
            onClick={handleClick}
          />
          <input
            className={`InputBox__box-filed--input  ${errors ? "errorInput" : ""}`}
            id={labelType}
            type={inputType}
            {...inputRequired}
            placeholder={placeholder}
            name={nameInput}
            autoComplete={autocomplete}
          />
        </div>
      </div>
      {errors && <span className="InputError">{errors}</span>}
    </div>
  );
};

export default Input;
