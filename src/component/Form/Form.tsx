import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input/Input";
import "./From.scss";

interface IFormInputs {
firstName: "string",
lastName:"string",
password: "string",
repeatPassword: "string",
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

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            errors={}
            labelType={}
            label={}
            placeholder={}
            inputType={}
            inputRequired={}
            nameInput={}
            autocomplete={}
          />

          <Input
            errors={}
            labelType={}
            label={}
            placeholder={}
            inputType={}
            inputRequired={}
            nameInput={}
            autocomplete={}
          />

          <Input
            errors={}
            labelType={}
            label={}
            placeholder={}
            inputType={}
            inputRequired={}
            eyeImage={}
            altEyeInput={}
            handleClick={}
            nameInput={}
            autocomplete={}
          />

          <Input
            errors={}
            labelType={}
            label={}
            placeholder={}
            inputType={}
            inputRequired={}
            eyeImage={}
            altEyeInput={}
            handleClick={}
            nameInput={}
            autocomplete={}
          />


        </form>
      </div>
    </main>
  );
};

export default Form;
