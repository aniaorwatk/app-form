import React from "react";
export const maxCharacters: number = 255;
export const maxCharactersTextatea: number = 1400;
export const minCharacters: number = 2;
export const minCharactersPassword: number = 6;

const labels = {
  header: {
    invitation: "Dołącz do nas już dziś!",
    text: "Odkryj wspaniały świat cytatów znanych ludzi!",
  },
  form: {
    buttonLabel: "Wyślij formularz",
    registerTitle: "Formularz rejestracyjny",
    warningRequired: "To pole jest Wymagane",
    warningRequiredAgreement: "Zgoda jest wymagana",
    warningMaxCharacters: `To pole może mieć maksymalnie ${maxCharacters}`,
    warningMaxCharactersTextarea: `To pole może mieć maksymalnie ${maxCharactersTextatea}`,
    warningMinCharacters: `To pole może mieć minimalnie ${minCharacters}`,
    warningMinCharactersPassword: `To pole może mieć minimalnie ${minCharactersPassword}`,
    warningDifferentName: `Hasło nie może być takie samo jak Imię lub nazwisko`,
    warningMatchPassword: `Hasła muszą się zgadzać`,
    placeholderFirstName: "Imię",
    placeholderLastName: "Nazwisko",
    placeholderEmail: "Email",
    placeholderPassword: "Hasło",
    placeholderRepeatPassword: "Powtórz hasło",
    placeholderOpinion: "Twoja opinia odnośnie rejestracji",
    labelFirstName: "Podaj Imię:",
    labelLastName: "Podaj Nazwisko:",
    labelEmail: "Podaj adres e-mail:",
    labelPassword: "Podaj hasło:",
    labelRepeatPassword: "Powtórz hasło:",
    labelOpinion: "Prześlij opinię:",
    labelAgreement:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych u kontrahentów portalu wspaniałecytaty.pl",
    altImg: "Podglądnij hasło",
  },
  footer: {
    text: (
      <>
        Jeśli posiadasz konto, to przejdź do strony z
        <span className="log"> logowaniem</span>.
      </>
    ),
  },
};

export default labels;
