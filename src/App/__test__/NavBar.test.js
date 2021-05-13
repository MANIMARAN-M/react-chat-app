import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import NavBar from "../Components/NavBar/NavBar";

afterEach(cleanup);
it("rendered correctly", () => {
  const { queryByTestId } = render(<NavBar />);
  expect(queryByTestId("NavBar-1")).toBeTruthy();
});
it("should render my component", () => {
  render(<NavBar />);
  const InputID = screen.getByTestId("signout");
  expect(InputID.textContent).toBe("SignOut");
});
describe("Search button", () => {
  it("does not trigger requestSearch function", () => {
    const requestSearch = jest.fn();
    const { queryByTestId } = render(<NavBar requestSearch={requestSearch} />);
    fireEvent.click(queryByTestId("signout"));
    expect(requestSearch).not.toHaveBeenCalled();
  });
});
