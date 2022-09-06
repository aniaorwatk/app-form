import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import labels from "../../labels";
import Input from "../Input/Input";
import {
  getErrorFirstName,
  getErrorsAgreement,
  getErrorsEmail,
  getErrorsLastName,
  getErrorsPassword,
  getErrorsRepeatPassword,
  nameInputs,
} from "./FormHandler";

import eyeOn from "../../assets/eye-regular.svg";
import eyeOff from "../../assets/eye-slash-regular.svg";
import "./Form.scss";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import InputCheckbox from "../Input/InputCheckbox";

export interface IFormInputs {
  firstName: "string";
  lastName: "string";
  email: "string";
  password: "string";
  repeatPassword: "string";
  agreement: boolean;
}

const labelsType = {
  textLabelType: "text",
  emailLabelType: "email",
  checkboxType: "checkbox"
};

const formInputsType = {
  typeFirstName: "firstName",
  typeLastName: "lastName",
  typeEmail: "email",
  typePassword: "password",
  typeRepeatPassword: "repeatPassword",
  typeAgreement: "agreement",
};

const button = {
  buttonClass: "primary",
};

const Form = () => {
  const buttonType = "submit";
  const eyeOnPassword = eyeOn;
  const eyeOffPassword = eyeOff;

  const {
    register,
    formState: { errors, dirtyFields, isValid, isSubmitted },
    setError,
    setValue,
    handleSubmit,
    watch,
  } = useForm<IFormInputs>({});

  const inputFirstName = register("firstName", {
    required: true,
  });

  const inputLastName = register("lastName", {
    required: true,
  });

  const inputEmail = register("email", {
    required: true,
  });

  const inputPassword = register("password", {
    required: true,
  });

  const inputRepeatPassword = register("repeatPassword", {
    required: true,
  });

  const inputAgremeent = register("agreement", {
    required: true,
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [passwordRepeatShown, setPasswordRepeatShown] = useState(false);
  const togglePasswordRepeat = () => {
    setPasswordRepeatShown(!passwordRepeatShown);
  };

  const passwordType = `${passwordShown ? "text" : "password"}`;
  const passwordRepeatType = `${passwordRepeatShown ? "text" : "password"}`;
  const imgEye = `${passwordShown ? eyeOffPassword : eyeOnPassword}`;
  const imgEyeRepeat = `${
    passwordRepeatShown ? eyeOffPassword : eyeOnPassword
  }`;

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
            inputType={formInputsType.typeFirstName}
            inputRequired={inputFirstName}
            nameInput={nameInputs.nameFirstInput}
          />
          <Input
            errors={getErrorsLastName({ lastName: errors.lastName })}
            labelType={formInputsType.typeEmail}
            label={labels.form.labelLastName}
            placeholder={labels.form.placeholderLastName}
            inputType={formInputsType.typeEmail}
            inputRequired={inputLastName}
            nameInput={nameInputs.nameLastInput}
          />
          <Input
            errors={getErrorsEmail({ email: errors.email })}
            labelType={formInputsType.typeLastName}
            label={labels.form.labelEmail}
            placeholder={labels.form.placeholderEmail}
            inputType={formInputsType.typeLastName}
            inputRequired={inputEmail}
            nameInput={nameInputs.nameEmail}
          />
          <Input
            errors={getErrorsPassword({ password: errors.password })}
            labelType={labels.form.placeholderPassword}
            label={labels.form.labelPassword}
            placeholder={labels.form.placeholderPassword}
            inputType={passwordType}
            inputRequired={inputPassword}
            eyeImage={imgEye}
            altEyeInput={labels.form.altImg}
            handleClick={togglePassword}
            nameInput={nameInputs.namePassword}
          />
          <Input
            errors={getErrorsRepeatPassword({
              repeatPassword: errors.repeatPassword,
            })}
            labelType={labelsType.textLabelType}
            label={labels.form.labelRepeatPassword}
            placeholder={labels.form.placeholderRepeatPassword}
            inputType={passwordRepeatType}
            inputRequired={inputRepeatPassword}
            eyeImage={imgEyeRepeat}
            altEyeInput={labels.form.altImg}
            handleClick={togglePasswordRepeat}
            nameInput={nameInputs.nameRepeatPassword}
          />
          <InputCheckbox
            errors={getErrorsAgreement({agreement: errors.agreement})}
            labelType={formInputsType.typeAgreement}
            label={labels.form.labelAgreement}
            inputType={labelsType.checkboxType}
            inputRequired={inputAgremeent}
          />
          <ButtonPrimary
            customClassName={button.buttonClass}
            buttonLabel={labels.form.buttonLabel}
            type={buttonType}
          />
        </form>
      </div>
    </main>
  );
};

export default Form;
