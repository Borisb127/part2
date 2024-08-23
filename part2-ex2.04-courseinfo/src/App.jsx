


import React from 'react';


// Header component
const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}


// Part component
const Part = ({part}) => {

  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

// Content component
const Content = ({ parts }) => {

  // Calculate total exercises
  const total = parts.reduce((sum, part)=> sum + part.exercises, 0);

  return (
    <div>
        {parts.map(p => (
          <Part key={p.id} part={p} />
        ))}
        <b>total of {total} exercises </b>
    </div>
  )
}



// Course component
const Course = ({courses}) => {

  
  //courses.map(c=>console.log(c.name))
  
  return (
    <div>
      {courses.map(c => (
        <div key={c.id}>
          <Header  name={c.name}/>
          <Content parts={c.parts}/>
        </div>
      ))}
      
    </div>
  )
}


// App component
const App = () => {
  const courses = [ 
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  

  return <Course courses={courses} />
}

export default App