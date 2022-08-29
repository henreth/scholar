import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function BookClub({ user, setUser, bookClubs, setBookClubs, userBookClubs, setUserBookClubs }) {
    let [bookClub, setBookClub] = useState({})

    let params = useParams()
    let id = params.id

    useEffect(() => {
        let bookClubReq = axios.get('/bookclubs/' + id)
        axios.all([bookClubReq])
            .then(axios.spread((res1) => {
                setBookClub(res1.data)
            }))

    }, [id])

    return (
        <div className='profileContainer'>
            <div className="profileCardTop">
            </div >
            <div className="profileCardBottom">
            </div >
        </div>
    )
}