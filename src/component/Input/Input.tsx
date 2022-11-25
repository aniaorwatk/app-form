import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { eyeOffPassword, eyeOnPassword } from "../Form/FormHandler";
import "./Inputs.scss";

interface IInputType {
  errors?: string | false | JSX.Element;
  labelType: string;
  label: string;
  placeholder: string;
  inputType?: string;
  nameInput: string;
  inputRequired: UseFormRegisterReturn<string>;
  altEyeInput?: string;
  autocomplete?: string;
  classNameInput?: string;
  inputPassword?: boolean;
}

const Input = ({
  inputPassword,
  errors,
  labelType,
  label,
  placeholder,
  inputType,
  inputRequired,
  altEyeInput,
  nameInput,
  autocomplete,
}: IInputType) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const passwordType = `${passwordShown ? "text" : "password"}`;
  const imgEye = `${passwordShown ? eyeOffPassword : eyeOnPassword}`;

  return (
    <div className="InputBox">
      <div className="InputBox__box">
        <label className="InputBox__box-label" htmlFor={labelType}>
          {label}
        </label>
        <div className="InputBox__box-filed">
          {inputPassword ? (
            <img
              className="InputBox__box-filed--img"
              src={imgEye}
              alt={altEyeInput}
              onClick={togglePassword}
            />
          ) : (
            ""
          )}
          <input
            className={`InputBox__box-filed--input  ${
              errors ? "errorInput" : ""
            }`}
            id={labelType}
            type={inputPassword ? passwordType : inputType}
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
