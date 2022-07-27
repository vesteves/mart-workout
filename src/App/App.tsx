import { Routes, Route, Link } from "react-router-dom";
import Workouts from "./Workouts/Workouts";
import Home from "./Home/Home";
import Workout from "./Workout/Workout";
import * as S from "./style";

export const App = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <div>
          <S.Link to="/">Home</S.Link>
        </div>
        <div>
          <S.Link to="/workouts">Workouts</S.Link>
        </div>
        <hr />
      </S.Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/:id" element={<Workout />} />
      </Routes>
    </S.Wrapper>
  );
};

export default App;
