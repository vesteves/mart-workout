import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IWorkout } from "./WorkoutTypes";
import * as S from "./style";

export const Workout = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState<IWorkout>();
  useEffect(() => {
    axios.get("/api/workouts.json").then((res) => {
      setWorkout(res.data.find((item: IWorkout) => item.id === id));
    });
  }, [id]);
  return (
    <S.Wrapper>
      <S.Container>
        <S.Image src={workout?.thumbnail} alt="" />
        <S.Title>{workout?.title}</S.Title>
        <S.Description>{workout?.description}</S.Description>
        <S.Duration>Duration: {workout?.duration}</S.Duration>
        <S.Impact>
          Impact:{" "}
          <S.ImpactTag colorChange={workout?.impactTag}>
            {workout?.impactTag}
          </S.ImpactTag>
        </S.Impact>
        <S.Level>
          Level:{" "}
          <S.LevelTag colorChange={workout?.levelTag}>
            {workout?.levelTag}
          </S.LevelTag>
        </S.Level>
        {workout && workout.media && (
          <S.Video controls>
            <source src={workout?.media}></source>
          </S.Video>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default Workout;
