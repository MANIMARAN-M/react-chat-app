import React from "react";
import { render, cleanup } from "@testing-library/react";
import Channel from "../Components/Channel/Channel";

afterEach(cleanup);
it("Channel rendered correctly", () => {
  const { queryByTestId } = render(<Channel />);
  expect(queryByTestId("Channel-1")).toBeTruthy();
});
