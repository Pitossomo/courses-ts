import React from "react"
import { CoursePart } from "../data"

/**
 * Helper function for exhaustive type checking
 */
const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  )
}

const Part = ({ part }: { part: CoursePart }) => {
  switch (part.type) {
    case "normal":
      return <div>
        <h2> {part.name} {part.exerciseCount} </h2>
        <p> {part.description} </p>
        <p> Exercises: {part.exerciseCount} </p>
      </div>
    case "submission":
      return <div>
        <h2> {part.name} {part.exerciseCount} </h2>
        <p> {part.description} </p>
        <p> Exercises: {part.exerciseCount} </p>
        <a href={part.exerciseSubmissionLink}>Submission Link</a>
      </div>
    case "groupProject":
      return <div>
        <h2> {part.name} {part.exerciseCount} </h2>
        <p> Group Projects: {part.groupProjectCount} </p>
      </div>
    case "special":
      return <div>
        <h2> {part.name} {part.exerciseCount} </h2>
        <p> {part.description} </p>
        <p> Requirements: {part.requirements.join(",")} </p>
      </div>
    default:
      return assertNever(part)
  }
}

export default Part