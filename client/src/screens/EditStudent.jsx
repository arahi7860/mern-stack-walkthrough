import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateStudent, getStudent } from '../services/students';

export default function EditStudent() {
  const [student, setStudent] = useState({
    name: "",
    school: "",
    age: 0,
    image: "",
  })

  let navigate = useNavigate()
  let { id } = useParams()
  
  useEffect(() => {
    const fetchStudent = async () => {
      let oneStudent = await getStudent(id)
      setStudent(oneStudent)
    }
  
    fetchStudent()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setStudent((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateStudent(id, student)
    navigate("/students", {replace: true})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Name"
        name="name"
        value={student.name}
        onChange={handleChange}
      />
      <input
        placeholder="Enter School"
        name="school"
        value={student.school}
        onChange={handleChange}
      />
      <input
        placeholder="Enter Age"
        name="age"
        value={student.age}
        onChange={handleChange}
      />
      <input
        placeholder="Enter Image"
        name="image"
        value={student.image}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
