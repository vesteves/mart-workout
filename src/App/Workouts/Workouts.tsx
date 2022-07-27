import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IWorkouts } from "./WorkoutsTypes";
import * as S from "./style";

export const Workouts = () => {
  const [workouts, setWorkouts] = useState<IWorkouts>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get("/api/workouts.json").then((res) => {
      setWorkouts(res.data);
      setTimeout(() => {
        setIsLoading(false);
        console.log("aqui");
      }, 2000);
    });
  }, []);

  return (
    <S.Wrapper>
      {isLoading && <S.Loading>loading...</S.Loading>}
      {!isLoading && (
        <S.Container>
          {workouts.length > 0 &&
            workouts.map((workout) => (
              <S.Link key={workout.id} to={`/workouts/${workout.id}`}>
                <S.Image
                  src={workout.thumbnail}
                  alt={`Thumbnail for ${workout.title}`}
                />
                <S.Title>Title: {workout.title}</S.Title>
                <S.Level>
                  Level:{" "}
                  <S.LevelTag colorChange={workout.levelTag}>
                    {workout.levelTag}
                  </S.LevelTag>
                </S.Level>
              </S.Link>
            ))}
        </S.Container>
      )}
    </S.Wrapper>
  );
};

export default Workouts;
