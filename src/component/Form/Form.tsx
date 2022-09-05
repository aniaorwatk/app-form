import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import labels from "../../labels";
import Input from "../Input/Input";
import { getErrorFirstName, getErrorsLastName, getErrorsPassword, getErrorsRepeatPassword, nameInputs } from "./FormHandler";
import ""

export interface IFormInputs {
  firstName: "string";
  lastName: "string";
  password: "string";
  repeatPassword: "string";
}

const labelsType= {
textLabelType: 'text'
}

const formInputsType= {
  typeFirstName: 'firstName',
  typeLastName: 'lastName',
  typePassword: 'password',
  typeRepeatPassword: 'repeatPassword'
}

const Form = () => {

  const {
    register,
    formState: { errors, dirtyFields, isValid, isSubmitted },
    setError,
    setValue,
    handleSubmit,
    watch,
  } = useForm<IFormInputs>({});

const inputFirstName =register('firstName',{
  required: true,
})

const inputLastName =register('lastName',{
  required: true,
})

const inputPassword =register('password',{
  required: true,
})

const inputRepeatPassword =register('repeatPassword',{
  required: true,
})


  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            errors={getErrorFirstName({firstName: errors.firstName})}
            labelType={labelsType.textLabelType}
            label={labels.form.labelFirstName}
            placeholder={labels.form.placeholderFirstName}
            inputType={formInputsType.typeFirstName}
            inputRequired={inputFirstName}
            nameInput={nameInputs.nameFirstInput}

          />

          <Input
            errors={getErrorsLastName({lastName: errors.lastName})}
            labelType={labelsType.textLabelType}
            label={labels.form.labelLastName}
            placeholder={labels.form.placeholderLastName}
            inputType={formInputsType.typeLastName}
            inputRequired={inputLastName}
            nameInput={nameInputs.nameLastInput}
 
          />

          <Input
            errors={getErrorsPassword({password: errors.password})}
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
            errors={getErrorsRepeatPassword({repeatPassword: errors.repeatPassword})}
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
        </form>
      </div>
    </main>
  );
};

export default Form;
