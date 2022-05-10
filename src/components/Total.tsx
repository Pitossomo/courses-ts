import React from "react"

type coursePart = {
  name: string,
  exerciseCount: number
}

interface TotalProps { courseParts: Array<coursePart> }

const Total = ({ courseParts }: TotalProps) => (
  <p>
    Number of exercises{" "}
    {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
  </p>
)

export default Total