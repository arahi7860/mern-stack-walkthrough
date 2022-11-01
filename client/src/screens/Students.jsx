import { useState, useEffect } from 'react';
import { getStudents } from "../services/students.js";
import Student from '../components/Student.jsx';

export default function Students() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchStudents = async () => {
      const allStudents = await getStudents()
      setStudents(allStudents)
    }

    fetchStudents()
  }, [])

  return (
    <div>
      <h1>Students</h1>
      {students.map((studentData) => (
        <Student key={studentData._id} student={studentData} />
      ))}
    </div>
  )
}
