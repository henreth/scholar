import { useState } from "react";
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

    let [clickedCreate, setClickedCreate] = useState(false)
    function handleClickCreate() {
        setClickedCreate(!clickedCreate)
    }

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
                        {clickedCreate ? <div className="bookClubCard addNew">
                            <img className='addNew' src={"https://img.icons8.com/ios-glyphs/100/000000/plus--v1.png"} />
                            <input
                                type='url'
                                placeholder="Image Link"
                            />
                            <input
                                type='text'
                                placeholder="Name"
                            />
                            <hr></hr>
                            <div className="clubCardBottom">
                                <input
                                    type='text'
                                    placeholder="Description"
                                />
                                <button onClick={handleClickCreate}>Cancel</button>
                                <button onClick={handleClickCreate}>Submit</button>
                            </div>
                        </div> :
                            <div className="bookClubCard addNew">
                                <img className='addNew' src={"https://img.icons8.com/ios-glyphs/100/000000/plus--v1.png"} />
                                <h2>New Club</h2>
                                <hr></hr>
                                <div className="clubCardBottom">
                                    <div className="clubDescription">Click below to create a book club!</div>
                                    <button onClick={handleClickCreate}>Create</button>
                                </div>
                            </div>}
                    </div>
                </div>

            </div>

        </div>
    )
}