import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { test, expect } from "@jest/globals";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import ContributeResource from "./";

// check the page renders an image with alt text 'Coding'
test("renders Coding image", async () => {
  render(<ContributeResource />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  //check the page renders a textbox with placeholder text 'Your Name'
  expect(screen.getByPlaceholderText(/Your Name/i)).toBeInTheDocument();
});
