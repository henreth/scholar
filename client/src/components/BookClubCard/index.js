import { useNavigate } from "react-router-dom";

export default function BookClubCard({ club }) {
    let navigate = useNavigate()

    function handleClickVisit() {
        navigate('/bookclub/' + club.id)
    }
    return (
        <div className="bookClubCard">
            <img src={club.image} />
            <h2>{club.name}</h2>
            <div>Host: {club.host.username}</div>
            <hr></hr>
            <div className="clubCardBottom">
                <div className="clubDescription">{club.description}</div>
                <button onClick={handleClickVisit}>Visit</button>
            </div>
        </div>
    )
}
