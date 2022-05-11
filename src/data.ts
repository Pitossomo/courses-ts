export const courseName = "Half Stack application development"

export interface CoursePartBase {
  name: string
  exerciseCount: number
  type: string
}

export interface CourseDescriptedPart extends CoursePartBase {
  description: string
}

export interface CourseNormalPart extends CourseDescriptedPart {
  type: "normal"
}

export interface CourseProjectPart extends CoursePartBase {
  type: "groupProject"
  groupProjectCount: number
}

export interface CourseSubmissionPart extends CourseDescriptedPart {
  type: "submission"
  exerciseSubmissionLink: string
}

export interface CourseSpecialPart extends CourseDescriptedPart {
  type: "special"
  requirements: Array<string>
}

export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseSpecialPart

export const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is the leisured course part",
    type: "normal"
  },
  {
    name: "Advanced",
    exerciseCount: 7,
    description: "This is the harded course part",
    type: "normal"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3,
    type: "groupProject"
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    type: "submission"
  },
  {
    name: "Backend development",
    exerciseCount: 21,
    description: "Typing the backend",
    requirements: ["nodejs", "jest"],
    type: "special"
  }
]