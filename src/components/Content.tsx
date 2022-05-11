import React from "react"
import { CoursePart } from "../data"
import Part from "./Part"

interface ContentProps { courseParts: Array<CoursePart> }

const Content = ({ courseParts }: ContentProps) => (
  <>
    {courseParts.map((part, i) => <Part key={`part${i}`} part={part} />)}
  </>
)

export default Content