import React from "react";
import { render } from "@testing-library/react";
import Section from "./Section";

describe("Section", () => {
  it("Should render", () => {
    const { container } = render(<Section />);
    expect(container).toMatchSnapshot();
  });
});

it('Should render img "Photo Albert Einstein" when src is okay', () => {
  const { getByAltText } = render(<Section />);
  const image = getByAltText("Photo Albert Einstein");
  expect(image).toHaveAttribute("src", "Albert-Einstein.jpg");
});

it('Should render img "Photo Dalajlama" when src is okay', () => {
  const { getByAltText } = render(<Section />);
  const image = getByAltText("Photo Dalajlama");
  expect(image).toHaveAttribute("src", "Dalajlama.jpg");
});

it('Should render img "Photo Henryk Sienkiewicz" when src is okay', () => {
  const { getByAltText } = render(<Section />);
  const image = getByAltText("Photo Henryk Sienkiewicz");
  expect(image).toHaveAttribute("src", "Henryk-Sienkiewicz.jpg");
});

it('Should render img "Photo Maria Skłodowska-Curie" when src is okay', () => {
  const { getByAltText } = render(<Section />);
  const image = getByAltText("Photo Maria Skłodowska-Curie");
  expect(image).toHaveAttribute("src", "Marie-Curie.jpg");
});

it('Should render img "Photo Wiliam Szekspir" when src is okay', () => {
  const { getByAltText } = render(<Section />);
  const image = getByAltText("Photo Wiliam Szekspir");
  expect(image).toHaveAttribute("src", "William-Szekspir.jpg");
});
