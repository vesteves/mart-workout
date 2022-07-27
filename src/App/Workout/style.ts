import styled from "styled-components";
import { EImpactTag, ELevelTag } from "./WorkoutTypes";
import { Container as ContainerApp } from "../style";

export interface IImpactTag {
  colorChange?: EImpactTag;
}

export interface ILevelTag {
  colorChange?: ELevelTag;
}

export const switchLevelTag = (levelTag: ELevelTag | null): string => {
  switch (levelTag) {
    case ELevelTag.BEGINNER:
      return "green";

    case ELevelTag.INTERMEDIATE:
      return "yellow";

    case ELevelTag.ADVANCED:
      return "red";

    default:
      return "white";
  }
};

export const Wrapper = styled.div`
  text-align: center;
  padding: 40px 0;
  background: #333;
`;

export const Container = styled(ContainerApp)``;

export const Image = styled.img`
  max-width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const Description = styled.h3`
  color: #fff;
`;

export const Duration = styled.p`
  color: #fff;
`;

export const Impact = styled.p`
  color: #fff;
`;

export const ImpactTag = styled.span<IImpactTag>`
  color: ${(props) =>
    props.colorChange === EImpactTag.HIGH ? "red" : "green"};
  font-weight: ${(props) =>
    props.colorChange === EImpactTag.HIGH ? "bold" : "inherit"};
`;

export const Level = styled.p`
  color: #fff;
`;

export const LevelTag = styled.span<ILevelTag>`
  color: ${(props) => switchLevelTag(props.colorChange || null)};
  font-weight: ${(props) =>
    props.colorChange === ELevelTag.ADVANCED ? "bold" : "inherit"};
`;

export const Video = styled.video`
  max-width: 80vw;
  height: auto;
`;
