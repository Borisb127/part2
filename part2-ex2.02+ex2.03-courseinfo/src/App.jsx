
import React from 'react';


const Header = ({name}) => {

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}


const Part = ({part}) => {

  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}



// Content component
const Content = ({course}) => {

  return (
    <div>
        {course.parts.map(part => 
            <Part key={part.id} part={part} />
        )}
    </div>
  )
}



// Course component
const Course = ({course}) => {

  // Calculate total exercises
  const total = course.parts.reduce((sum, part)=> sum + part.exercises, 0);


  return (
    <div>
      <Header name={course.name} />
      <Content course={course} />

      <b>total of {total} exercises </b>
    </div>
  )
}


// App component
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      } 
    ]
  }

  return <Course course={course} />
}

export default App