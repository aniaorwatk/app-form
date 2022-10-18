import {
  fireEvent,
  getByAltText,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import Form from "./Form";

it("Should render value in input firstName", () => {
  render(<Form />);
  const inputFirstName = screen.getByPlaceholderText(
    "Imię"
  ) as HTMLInputElement;
  fireEvent.change(inputFirstName, { target: { value: "ella123" } });
  expect(inputFirstName.value).not.toEqual("xxx");
  expect(inputFirstName.value).toEqual("ella123");
});

it("Should render value in input lastName", () => {
  render(<Form />);
  const inputLastName = screen.getByPlaceholderText(
    "Nazwisko"
  ) as HTMLInputElement;
  fireEvent.change(inputLastName, { target: { value: "ella123" } });
  expect(inputLastName.value).not.toEqual("xxx");
  expect(inputLastName.value).toEqual("ella123");
});

it("Should render value in input Email", () => {
  render(<Form />);
  const inputEmail = screen.getByPlaceholderText("Email") as HTMLInputElement;
  fireEvent.change(inputEmail, { target: { value: "ella123@test.pl" } });
  expect(inputEmail.value).not.toEqual("xxx");
  expect(inputEmail.value).toEqual("ella123@test.pl");
});

it("Should render value in input Password", () => {
  render(<Form />);
  const inputPassword = screen.getByPlaceholderText(
    "Hasło"
  ) as HTMLInputElement;
  fireEvent.change(inputPassword, { target: { value: "123456" } });
  expect(inputPassword.value).not.toEqual("xxx");
  expect(inputPassword.value).toEqual("123456");
});

it("Should render value in input RepeatPassword", () => {
  render(<Form />);
  const inputRepeatPassword = screen.getByPlaceholderText(
    "Powtórz hasło"
  ) as HTMLInputElement;
  fireEvent.change(inputRepeatPassword, { target: { value: "123456" } });
  expect(inputRepeatPassword.value).not.toEqual("xxx");
  expect(inputRepeatPassword.value).toEqual("123456");
});

it("Should render value in input Opinion", () => {
  render(<Form />);
  const inputOpinion = screen.getByPlaceholderText(
    "Twoja opinia odnośnie rejestracji"
  ) as HTMLInputElement;
  fireEvent.change(inputOpinion, { target: { value: "Wszystko ok" } });
  expect(inputOpinion.value).not.toEqual("xxx");
  expect(inputOpinion.value).toEqual("Wszystko ok");
});

