import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NAV() {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
        <div>
          <NavLink to="/students">All Students</NavLink>
          <NavLink to="/add-student">Add Student</NavLink>
        </div>
      </div>
    </nav>
  )
}
