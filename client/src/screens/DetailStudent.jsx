import { useState, useEffect } from 'react';
import { getStudent, deleteStudent } from '../services/students';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function DetailStudent() {
  const [student, setStudent] = useState({})
  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    const fetchStudent = async () => {
      let oneStudent = await getStudent(id)
      setStudent(oneStudent)
    }
  
    fetchStudent()
  }, [id])
  

  return (
    <div>
      <img src={student.image} alt="student info" />
      <h1>{student.name}</h1>
      <h3>{student.school}</h3>
      <p>{student.age}</p>
      <div>
        <button>
          <Link to={`/students/${student._id}/edit`}>
            Edit Student
          </Link>
        </button>
        <button onClick={() => {
          deleteStudent(student._id)
          navigate("/students", {replace: true})
        }}>
          Delete Student
        </button>
      </div>
    </div>
  )
}
