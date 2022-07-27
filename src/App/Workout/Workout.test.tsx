import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import Workout from "./Workout";

describe("<Workout /> test suite", () => {
  test("should match to snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <Workout />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("should call useEffect", () => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    jest.spyOn(axios, "get");

    render(
      <BrowserRouter>
        <Workout />
      </BrowserRouter>
    );

    expect(axios.get).toHaveBeenCalled();
  });
});
