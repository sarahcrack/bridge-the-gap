import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { test, expect } from "@jest/globals";
import userEvent from "@testing-library/user-event";
import HomePage from "./";
import { App, BrowserRouter } from "react-router-dom";

// check the page renders an image with alt text 'Coding'
test("renders Coding image", async () => {
  //   render(<App />, { wrapper: BrowserRouter });
  //   const user = userEvent.setup();
  //   // verify page content for default route
  //   expect(
  //     screen.getByText(/Bridge the gap in your knowledge!/i)
  //   ).toBeInTheDocument();
});
