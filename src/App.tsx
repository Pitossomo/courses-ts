import React from 'react'
import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import Total from './components/Total'
import { courseName, courseParts } from './data'

const App = () => {

  return (
    <div>
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  )
}

export default App
