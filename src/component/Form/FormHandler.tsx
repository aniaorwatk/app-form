import { LiteralUnion, MultipleFieldErrors, Ref } from "react-hook-form";
import labels from "../../labels";
import eyeOn from "../../assets/eye-regular.svg";
import eyeOff from "../../assets/eye-slash-regular.svg";

export const nameInputs = {
  nameFirstInput: "firstName",
  nameLastInput: "lastName",
  nameEmail: "email",
  namePassword: "password",
  nameRepeatPassword: "repeatPassword",
  nameOpinion: "opinion",
};

export enum IErrorType {
  required = "required",
  maxLength = "maxLength",
  minLength = "minLength",
  validate = "validate",
}

export interface IErrorContentType {
  type: ErrorType;
  message?: string;
}

export type FieldError = {
  type: LiteralUnion<
    | "firstName"
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
    | "setValueAs"
    | "shouldUnregister"
    | "onChange"
    | "onBlur"
    | "disabled"
    | "deps",
    string
  >;
  root?: FieldError | undefined;
  ref?: Ref | undefined;
  types?: MultipleFieldErrors | undefined;
  message?: string | undefined;
};

export interface IErrors {
  firstName: "string";
  lastName: "string";
  email: "string";
  password: "string";
  repeatPassword: "string";
  agreement: "string";
}

type ErrorType =
  | (string & { _?: never })
  | "firstName"
  | "lastName"
  | "required"
  | "min"
  | "max"
  | "maxLength"
  | "minLength"
  | "pattern"
  | "validate"
  | "valueAsNumber"
  | "valueAsDate"
  | "value";

export const getErrorFirstName = ({
  firstName,
}: {
  firstName?: IErrorContentType;
}) => {
  return (
    (firstName?.type === IErrorType.required && labels.form.warningRequired) ||
    (firstName?.type === IErrorType.maxLength &&
      labels.form.warningMaxCharacters) ||
    (firstName?.type === IErrorType.minLength &&
      labels.form.warningMinCharacters)
  );
};

export const getErrorsLastName = ({
  lastName,
}: {
  lastName?: IErrorContentType;
}) => {
  return (
    (lastName?.type === IErrorType.required && labels.form.warningRequired) ||
    (lastName?.type === IErrorType.maxLength &&
      labels.form.warningMaxCharacters) ||
    (lastName?.type === IErrorType.minLength &&
      labels.form.warningMinCharacters)
  );
};

export const getErrorsPassword = ({
  password,
}: {
  password?: IErrorContentType;
}) => {
  return (
    (password?.type === IErrorType.required && labels.form.warningRequired) ||
    (password?.type === IErrorType.maxLength &&
      labels.form.warningMaxCharacters) ||
    (password?.type === IErrorType.minLength &&
      labels.form.warningMinCharactersPassword) ||
    (password?.type === IErrorType.validate && labels.form.warningDifferentName)
  );
};

export const getErrorsRepeatPassword = ({
  repeatPassword,
}: {
  repeatPassword?: IErrorContentType;
}) => {
  return (
    (repeatPassword?.type === IErrorType.required &&
      labels.form.warningRequired) ||
    (repeatPassword?.type === IErrorType.maxLength &&
      labels.form.warningMaxCharacters) ||
    (repeatPassword?.type === IErrorType.minLength &&
      labels.form.warningMinCharactersPassword) ||
    (repeatPassword?.type === IErrorType.validate &&
      labels.form.warningMatchPassword)
  );
};

export const getErrorsEmail = ({ email }: { email?: IErrorContentType }) => {
  return (
    (email?.type === IErrorType.required && labels.form.warningRequired) ||
    (email?.type === IErrorType.maxLength && labels.form.warningMaxCharacters)
  );
};

export const getErrorsOpinion = ({
  opinion,
}: {
  opinion?: IErrorContentType;
}) => {
  return (
    (opinion?.type === IErrorType.maxLength &&
      labels.form.warningMaxCharactersTextarea) ||
    (opinion?.type === IErrorType.minLength && labels.form.warningMinCharacters)
  );
};

export const getErrorsAgreement = ({
  agreement,
}: {
  agreement?: IErrorContentType;
}) => {
  return (
    agreement?.type === IErrorType.required &&
    labels.form.warningRequiredAgreement
  );
};

export const eyeOnPassword = eyeOn;
export const eyeOffPassword = eyeOff;

export const InputType = {
  textType: "text",
  emailType: "email",
  checkboxType: "checkbox",
};

export const formInputsType = {
  typeFirstName: "firstName",
  typeLastName: "lastName",
  typeEmail: "email",
  typePassword: "password",
  typeRepeatPassword: "repeatPassword",
  typeAgreement: "agreement",
};

export const button = {
  buttonClass: "primary",
};
