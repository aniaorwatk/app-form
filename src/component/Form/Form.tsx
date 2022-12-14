import  { useRef} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import labels, {
  maxCharacters,
  maxCharactersTextatea,
  minCharacters,
  minCharactersPassword,
} from "../../labels";
import Input from "../Input/Input";
import {
  button,
  formInputsType,
  getErrorFirstName,
  getErrorsAgreement,
  getErrorsEmail,
  getErrorsLastName,
  getErrorsOpinion,
  getErrorsPassword,
  getErrorsRepeatPassword,
  InputType,
  nameInputs,
} from "./FormHandler";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import InputCheckbox from "../Input/InputCheckbox";
import InputTextarea from "../Input/InputTextarea";
import "./Form.scss";

export interface IFormInputs {
  firstName: "string";
  lastName: "string";
  email: "string";
  password: "string";
  repeatPassword: "string";
  agreement: boolean;
  opinion: "string";
}

const Form = () => {
  const buttonType = "submit";
  const nameFirstInput = "firstName";
  const {
    register,
    formState: { errors, isValid, isSubmitted, dirtyFields },
    handleSubmit,
    watch,
  } = useForm<IFormInputs>({});

  const firstName = useRef({});
  firstName.current = watch("firstName");
  const lastName = useRef({});
  lastName.current = watch("lastName");
  const password = useRef({});
  password.current = watch("password");
  const disabledButtonOrange = !isValid && isSubmitted;

  const isDisabled = () => {
    return !(
      dirtyFields.firstName &&
      dirtyFields.lastName &&
      dirtyFields.email &&
      dirtyFields.password &&
      dirtyFields.repeatPassword &&
      dirtyFields.agreement
    );
  };

  const disabled = isDisabled() || disabledButtonOrange;

  const inputFirstName = register("firstName", {
    required: true,
    maxLength: maxCharacters,
    minLength: minCharacters,
  });

  const inputLastName = register("lastName", {
    required: true,
    maxLength: maxCharacters,
    minLength: minCharacters,
  });

  const inputEmail = register("email", {
    required: true,
    maxLength: maxCharacters,
  });

  const inputPassword = register("password", {
    required: true,
    maxLength: maxCharacters,
    minLength: minCharactersPassword,
    validate: (value) =>
      value !== firstName.current && value !== lastName.current,
  });

  const inputRepeatPassword = register("repeatPassword", {
    required: true,
    maxLength: maxCharacters,
    minLength: minCharactersPassword,
    validate: (value) => value === password.current,
  });

  const inputOpinion = register("opinion", {
    maxLength: maxCharactersTextatea,
    minLength: minCharacters,
  });

  const inputAgremeent = register("agreement", { required: true });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <main>
      <div className="formBox">
        <h2>{labels.form.registerTitle}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            errors={getErrorFirstName({ firstName: errors.firstName })}
            labelType={formInputsType.typeFirstName}
            label={labels.form.labelFirstName}
            placeholder={labels.form.placeholderFirstName}
            inputType={InputType.textType}
            inputRequired={inputFirstName}
            nameInput={nameFirstInput}
          />
          <Input
            errors={getErrorsLastName({ lastName: errors.lastName })}
            labelType={formInputsType.typeLastName}
            label={labels.form.labelLastName}
            placeholder={labels.form.placeholderLastName}
            inputType={InputType.textType}
            inputRequired={inputLastName}
            nameInput={nameInputs.nameLastInput}
          />
          <Input
            errors={getErrorsEmail({ email: errors.email })}
            labelType={formInputsType.typeEmail}
            label={labels.form.labelEmail}
            placeholder={labels.form.placeholderEmail}
            inputType={InputType.emailType}
            inputRequired={inputEmail}
            nameInput={nameInputs.nameEmail}
          />
          <Input
            errors={getErrorsPassword({ password: errors.password })}
            labelType={formInputsType.typePassword}
            label={labels.form.labelPassword}
            placeholder={labels.form.placeholderPassword}
            inputRequired={inputPassword}
            altEyeInput={labels.form.altImgInPassword}
            nameInput={nameInputs.namePassword}
            inputPassword={true}
          />
          <Input
            errors={getErrorsRepeatPassword({
              repeatPassword: errors.repeatPassword,
            })}
            labelType={formInputsType.typeRepeatPassword}
            label={labels.form.labelRepeatPassword}
            placeholder={labels.form.placeholderRepeatPassword}
            inputRequired={inputRepeatPassword}
            altEyeInput={labels.form.altImgInRepeatPassword}
            nameInput={nameInputs.nameRepeatPassword}
            inputPassword={true}
          />
          <InputTextarea
            errors={getErrorsOpinion({ opinion: errors.opinion })}
            label={labels.form.labelOpinion}
            labelType={labels.form.labelOpinion}
            inputRequired={inputOpinion}
            placeholder={labels.form.placeholderOpinion}
            nameInput={nameInputs.nameOpinion}
          />
          <InputCheckbox
            errors={getErrorsAgreement({ agreement: errors.agreement })}
            labelType={formInputsType.typeAgreement}
            label={labels.form.labelAgreement}
            inputType={InputType.checkboxType}
            inputRequired={inputAgremeent}
          />
          <ButtonPrimary
            customClassName={button.buttonClass}
            buttonLabel={labels.form.buttonLabel}
            type={buttonType}
            isDisabled={disabled}
          />
        </form>
        <h3>{labels.form.text}</h3>
      </div>
    </main>
  );
};

export default Form;
