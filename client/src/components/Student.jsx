import React from 'react'
import { Link } from 'react-router-dom'

export default function Student({student}) {
  
  return (
    <div>
      <Link to={`/students/${student._id}`}>
        <img src={student.image} alt="student info" />
        <h2>{student.name}</h2>
      </Link>
    </div>
  )
}
