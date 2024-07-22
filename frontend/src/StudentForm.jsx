import { useState } from "react";
import axios from "axios";

function StudentForm(){

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState()


    async function handleSubmit(e){
        e.preventDefault()

        const data = {
            'first_name': firstName,
            'last_name': lastName,
            'age': age
        }

        const url = 'http://localhost:8004/api/student/'

        try{
            const response = await axios.post(url, data)
            console.log(response)
            window.location.reload()
        } catch(error){
            console.log(error)
        }

    }


    return (
        <div>
            <br />
            <hr />
            
            <h4>Student Form: </h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                        id="firstName" 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                        id="lastName" 
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="age">Age: </label>
                    <input 
                        id="age" 
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
            <hr />
        </div>
    )
}

export default StudentForm