
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

  export default Course