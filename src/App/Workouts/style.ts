import styled from "styled-components";
import { Link as LinkReact } from "react-router-dom";
import {
  LevelTag as LevelTagWorkout,
  Wrapper as WrapperWorkout,
} from "../Workout/style";
import { Container as ContainerApp } from "../style";

export const Wrapper = styled(WrapperWorkout)``;

export const Container = styled(ContainerApp)``;

export const Link = styled(LinkReact)`
  text-decoration: none;
  color: #fff;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Title = styled.p``;

export const Level = styled.p``;

export const LevelTag = styled(LevelTagWorkout)``;
