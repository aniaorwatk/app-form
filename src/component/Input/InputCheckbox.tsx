import { UseFormRegisterReturn } from "react-hook-form";
import "./Inputs.scss";

export interface ICheckboxType {
  errors: string | false;
  labelType: string;
  label: string | JSX.Element;
  inputType: string;
  inputRequired: UseFormRegisterReturn<string>;
}

const InputCheckbox = ({
  errors,
  labelType,
  label,
  inputType,
  inputRequired,
}: ICheckboxType) => {
  return (
    <div className="inputCheckbox">
      <div className="inputCheckbox__box">
        <input
          id={labelType}
          className={`inputCheckbox__box-input  ${
            errors ? "errorCheckbox" : ""
          }`}
          type={inputType}
          {...inputRequired}
        />
        <label className="inputCheckbox__box-label" htmlFor={labelType}>
          {label}
        </label>
      </div>
      {errors && <span className="InputError">{errors}</span>}
    </div>
  );
};

export default InputCheckbox;
