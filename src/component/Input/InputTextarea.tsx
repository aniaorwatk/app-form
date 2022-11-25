import { UseFormRegisterReturn } from "react-hook-form";

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
      <div className="textareaBox__box">
        <label className="textareaBox__box-label" htmlFor={labelType}>
          {label}
        </label>
        <textarea
          className={`textareaBox__box-text ${errors ? "errorInput" : ""}`}
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
