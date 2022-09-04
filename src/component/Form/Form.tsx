import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input/Input";
import "./From.scss";

interface IFormInputs {}

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
            

        </form>
      </div>
    </main>
  );
};

export default Form;
