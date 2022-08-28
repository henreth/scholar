import BookClubCard from "../BookClubCard";
import SideBar from "../Sidebar";

export default function Community({ user, setUser, bookClubs, setBookClubs }) {
    document.title = 'Scholar - Book Clubs'

    let bookClubsToDisplay = bookClubs.map(club => {

        return (
            <BookClubCard
                club={club}
            />
        )
    })

    return (
        <div className="mainContainer">
            <SideBar
                user={user}
                setUser={setUser}
                pageData={{}}
                page={'community'}
            />
            <div className="communityDisplay">
                <div className="commContainer">
                    <h1>Book Clubs:</h1>
                    <div className="clubsContainer">
                        {bookClubsToDisplay}

                    </div>
                </div>

            </div>

        </div>
    )
}