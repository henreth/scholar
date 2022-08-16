import BookContainer from "../BookContainer/BookContainer";
import axios from 'axios'

export default function Home({testData,user}){
    if (!user.current) return null 

    const handleLogIn = () => {
        axios.post('/login',{"username":"test",
    "password":"12345"})
        
    }
    
    const handleShowMe = () => {
        axios.get('/me')
        .then(r=>console.log(r.data))
    }

    let currentlyReadingBooks = user.current

    return (
        <div>
            <BookContainer 
                testData={testData}
            />
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleShowMe}>Show Me</button>

        </div>
    )
}