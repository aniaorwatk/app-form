import React from "react";
import { getErrorFirstName, getErrorsAgreement, getErrorsEmail, getErrorsLastName, getErrorsOpinion, getErrorsPassword, getErrorsRepeatPassword, IErrorType } from "./FormHandler";

it("should show error required error in type firstName", () => {
    const args = {
        firstName: {
            type: IErrorType.required
        }
    };
    const result = getErrorFirstName(args);
    expect(result).toEqual("To pole jest Wymagane")
})

it("should show error maxLength error in type firstName", () => {
    const args = {
        firstName: {
            type: IErrorType.maxLength
        }
    };
    const result = getErrorFirstName(args);
    expect(result).toEqual("To pole może mieć maksymalnie 255")
})

it("should show error minLength error in type firstName", () => {
    const args = {
        firstName: {
            type: IErrorType.minLength
        }
    };
    const result = getErrorFirstName(args);
    expect(result).toEqual("To pole może mieć minimalnie 2")
})

it("should show error required error in type lastName", () => {
    const args = {
        lastName: {
            type: IErrorType.required
        }
    };
    const result = getErrorsLastName(args);
    expect(result).toEqual("To pole jest Wymagane")
})

it("should show error maxLength error in type lastName", () => {
    const args = {
        lastName: {
            type: IErrorType.maxLength
        }
    };
    const result = getErrorsLastName(args);
    expect(result).toEqual("To pole może mieć maksymalnie 255")
})

it("should show error minLength error in type lastName", () => {
    const args = {
        lastName: {
            type: IErrorType.minLength
        }
    };
    const result = getErrorsLastName(args);
    expect(result).toEqual("To pole może mieć minimalnie 2")
})

it("should show error validate error in type password", () => {
    const args = {
        password: {
            type: IErrorType.validate
        }
    };
    const result = getErrorsPassword(args);
    expect(result).toEqual("Hasło nie może być takie samo jak Imię lub nazwisko")
})

it("should show error required error in type password", () => {
    const args = {
        password: {
            type: IErrorType.required
        }
    };
    const result = getErrorsPassword(args);
    expect(result).toEqual("To pole jest Wymagane")
})

it("should show error maxLength error in type password", () => {
    const args = {
        password: {
            type: IErrorType.maxLength
        }
    };
    const result = getErrorsPassword(args);
    expect(result).toEqual("To pole może mieć maksymalnie 255")
})

it("should show error minLength error in type password", () => {
    const args = {
        password: {
            type: IErrorType.minLength
        }
    };
    const result = getErrorsPassword(args);
    expect(result).toEqual("To pole może mieć minimalnie 6")
})

it("should show error minLength error in type repeatPassword", () => {
    const args = {
        repeatPassword: {
            type: IErrorType.minLength
        }
    };
    const result = getErrorsRepeatPassword (args);
    expect(result).toEqual("To pole może mieć minimalnie 6")
})

it("should show error maxLength error in type repeatPassword", () => {
    const args = {
        repeatPassword: {
            type: IErrorType.maxLength
        }
    };
    const result = getErrorsRepeatPassword (args);
    expect(result).toEqual("To pole może mieć maksymalnie 255")
})

it("should show error required error in type repeatPassword", () => {
    const args = {
        repeatPassword: {
            type: IErrorType.required
        }
    };
    const result = getErrorsRepeatPassword (args);
    expect(result).toEqual("To pole jest Wymagane")
})

it("should show error validate error in type repeatPassword", () => {
    const args = {
        repeatPassword: {
            type: IErrorType.validate
        }
    };
    const result = getErrorsRepeatPassword (args);
    expect(result).toEqual("Hasła muszą się zgadzać")
})

it("should show error required error in type email", () => {
    const args = {
        email: {
            type: IErrorType.required
        }
    };
    const result = getErrorsEmail(args);
    expect(result).toEqual("To pole jest Wymagane")
})

it("should show error maxLength error in type email", () => {
    const args = {
        email: {
            type: IErrorType.maxLength
        }
    };
    const result = getErrorsEmail(args);
    expect(result).toEqual("To pole może mieć maksymalnie 255")
})

it("should show error maxLength error in type opinion", () => {
    const args = {
        opinion: {
            type: IErrorType.maxLength
        }
    };
    const result = getErrorsOpinion(args);
    expect(result).toEqual("To pole może mieć maksymalnie 1400")
})

it("should show error minLength error in type opinion", () => {
    const args = {
        opinion: {
            type: IErrorType.minLength
        }
    };
    const result = getErrorsOpinion(args);
    expect(result).toEqual("To pole może mieć minimalnie 2")
})

it("should show error required  error in type agreement", () => {
    const args = {
        agreement: {
            type: IErrorType.required 
        }
    };
    const result = getErrorsAgreement(args);
    expect(result).toEqual("Zgoda jest wymagana")

})

