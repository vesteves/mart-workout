import { render } from "@testing-library/react";
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
});
