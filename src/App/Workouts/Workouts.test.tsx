import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Workouts from "./Workouts";

describe("<Workout /> test suite", () => {
  test("should match to snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <Workouts />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
