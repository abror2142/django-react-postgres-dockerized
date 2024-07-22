import { useState } from 'react'
import StudentForm from './StudentForm'
import StudentList from './StudentList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <StudentForm />
      <StudentList />
    </div>
  )
}

export default App
