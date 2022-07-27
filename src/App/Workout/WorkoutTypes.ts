export enum EImpactTag {
  LOW = "low",
  HIGH = "high",
}

export enum ELevelTag {
  ADVANCED = "advanced",
  INTERMEDIATE = "intermediate",
  BEGINNER = "beginner",
}

export interface IWorkout {
  description: string;
  duration: number;
  id: string;
  impactTag: EImpactTag;
  levelTag: ELevelTag;
  media: string;
  thumbnail: string;
  title: string;
  trainerId: string;
}
