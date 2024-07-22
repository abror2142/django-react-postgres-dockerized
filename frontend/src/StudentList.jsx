import { useState, useEffect } from "react";
import axios from "axios";


function StudentList(){

    const [data, setData] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const url = 'http://localhost:8004/api/student/'

            try {
                const response = await axios.get(url)
                console.log(response)
                setData(response.data)
            } catch(error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h4>Student List: </h4>
            <ul>
                { data.map(student => (
                    <li key={student.id}>{student.first_name} {student.last_name} -- {student.age} years old.</li>
                ))}
            </ul>
        </div>
    )
}

export default StudentList