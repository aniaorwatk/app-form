
import React from "react";
import {  LiteralUnion, Message, MultipleFieldErrors, Ref } from "react-hook-form";
import labels from "../../labels";

export const nameInputs ={
   nameFirstInput: "firstName",
    nameLastInput: "lastName",
    nameEmail: "email",
namePassword: "password",
nameRepeatPassword: "repeatPassword",
} 

export enum IErrorType{
    required = 'required',
    validate='validate',
}

export interface IErrorContentType{
    type: ErrorType,
    message?: string
}

export type FieldError = {
    type: LiteralUnion< "firstName" |"required" | "min" | "max" | "maxLength" | "minLength" | "pattern" | "validate" | "valueAsNumber" | "valueAsDate" | "value" | "setValueAs" | "shouldUnregister" | "onChange" | "onBlur" | "disabled" | "deps", string>;
    root?: FieldError | undefined;
    ref?: Ref | undefined;
    types?: MultipleFieldErrors | undefined;
    message?: string | undefined;
};

// export type FieldError = {
//     type: string;
//     ref?: Ref;
//     types?: MultipleFieldErrors;
//     message?: Message;
// };

export interface IErrors {
    firstName: 'string',
    lastName: 'string',
    email: 'string'
    password: 'string',
    repeatPassword: 'string'
}



type ErrorType =
    (string & { _?: never })
    |"firstName"
    |"lastName"
    | "required"
    | "min"
    | "max"
    | "maxLength"
    | "minLength"
    | "pattern"
    | "validate"
    | "valueAsNumber"
    | "valueAsDate"
    | "value"

// type ErrorType = LiteralUnion<"required" | "min" | "max" | "maxLength" | "minLength" | "pattern" | "validate" | "valueAsNumber" | "valueAsDate" | "value" | "setValueAs" | "shouldUnregister" | "onChange" | "onBlur" | "disabled" | "deps", string>

export const getErrorFirstName = ({firstName}:{firstName?:IErrorContentType }) =>{
    return (
        firstName?.type === IErrorType.required && labels.form.warningRequired
        || ''
    )
}

export const getErrorsLastName =({lastName}:{lastName?:IErrorContentType })=>{
    return( lastName?.type === IErrorType.required && labels.form.warningRequired )
}

export const getErrorsPassword =({password}:{password?:IErrorContentType })=>{
    return(
        password?.type ===IErrorType.required && labels.form.warningRequired
    )
}

export const getErrorsRepeatPassword =({repeatPassword}:{repeatPassword?:IErrorContentType })=>{
    return(
        repeatPassword?.type ===IErrorType.required && labels.form.warningRequired
    )
}

export const getErrorsEmail =({email}:{email?:IErrorContentType })=>{
    return(
        email?.type ===IErrorType.required && labels.form.warningRequired
    )
}