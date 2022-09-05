import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import labels from "../../labels";
import Input from "../Input/Input";
import {
  getErrorFirstName,
  getErrorsEmail,
  getErrorsLastName,
  getErrorsPassword,
  getErrorsRepeatPassword,
  nameInputs,
} from "./FormHandler";
import "./Form.scss";
import ButtonPrimary from "../Buttons/ButtonPrimary";

export interface IFormInputs {
  firstName: "string";
  lastName: "string";
  email: "string";
  password: "string";
  repeatPassword: "string";
}

const labelsType = {
  textLabelType: "text",
  emailLabelType: "email",
};

const formInputsType = {
  typeFirstName: "firstName",
  typeLastName: "lastName",
  typeEmail: "email",
  typePassword: "password",
  typeRepeatPassword: "repeatPassword",
};

const button = {
  buttonClass: "primary",
};

const Form = () => {
  const buttonType = "submit";

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

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  
 
 


  return (
    <main>
     {/* <i className="fa-regular fa-eye"></i>
     <i className="fa-regular fa-eye-slash"></i> */}
      <div>
        <h2>{labels.form.registerTitle}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            errors={getErrorFirstName({ firstName: errors.firstName })}
            labelType={labelsType.textLabelType}
            label={labels.form.labelFirstName}
            placeholder={labels.form.placeholderFirstName}
            inputType={formInputsType.typeFirstName}
            inputRequired={inputFirstName}
            nameInput={nameInputs.nameFirstInput}
          />
          <Input
            errors={getErrorsLastName({ lastName: errors.lastName })}
            labelType={labelsType.textLabelType}
            label={labels.form.labelLastName}
            placeholder={labels.form.placeholderLastName}
            inputType={formInputsType.typeEmail}
            inputRequired={inputLastName}
            nameInput={nameInputs.nameLastInput}
          />
          <Input
            errors={getErrorsEmail({ email: errors.email })}
            labelType={labelsType.emailLabelType}
            label={labels.form.labelEmail}
            placeholder={labels.form.placeholderEmail}
            inputType={formInputsType.typeLastName}
            inputRequired={inputEmail}
            nameInput={nameInputs.nameEmail}
          />
          <Input
            errors={getErrorsPassword({ password: errors.password })}
            labelType={labelsType.textLabelType}
            label={labels.form.labelPassword}
            placeholder={labels.form.placeholderPassword}
            inputType={formInputsType.typePassword}
            inputRequired={inputPassword}
            // eyeImage={}
            // altEyeInput={}
            // handleClick={}
            nameInput={nameInputs.namePassword}
          />
          <Input
            errors={getErrorsRepeatPassword({
              repeatPassword: errors.repeatPassword,
            })}
            labelType={labelsType.textLabelType}
            label={labels.form.labelRepeatPassword}
            placeholder={labels.form.placeholderRepeatPassword}
            inputType={formInputsType.typeRepeatPassword}
            inputRequired={inputRepeatPassword}
            // eyeImage={}
            // altEyeInput={}
            // handleClick={}
            nameInput={nameInputs.nameRepeatPassword}
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
