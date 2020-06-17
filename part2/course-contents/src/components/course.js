import React from 'react'

const Header = ({ course_name }) => {
    return (
      <h1>{course_name}</h1>
    )
  }
  
  const Total = ({ parts }) => {
  
    const sum = parts.reduce((s, p) => {
      return { exercises: (s.exercises + p.exercises) }
    })
  
    return (
      <p><strong>total of {sum.exercises} exercises</strong></p>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </div>
    )
  }
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header course_name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

  export default Course