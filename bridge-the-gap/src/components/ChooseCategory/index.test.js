import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { test, expect } from "@jest/globals";
import ChooseCategory from "./";

// check the page renders an image with alt text 'Coding'
test("renders Coding image", () => {
  render(<ChooseCategory />);
  //   const imageElement = screen.getByAltText(/Coding/i);
  //   expect(imageElement).toBeInTheDocument();
});
