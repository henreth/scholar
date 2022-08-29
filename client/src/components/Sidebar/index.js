import SideBarBookClub from "../SideBarBookClub"

export default function SideBar({user,setUser,pageData,page,userBookClubs}) {

    if (!user.username) return null 
    let bookClubs = userBookClubs ? userBookClubs.map(clubuser => clubuser.bookclub) : []

    let bookClubsToDisplay = bookClubs.length ? bookClubs.map(club => {
        return (
            <SideBarBookClub club={club} key={club.id} setUser={setUser} book={pageData} page={page}/>
        )
    }) : null


    return (
        <div className="sidebar">
            <div className="sideBarInfo">
                <h2>{user.first_name}'s Book Clubs:</h2>
                {bookClubsToDisplay}
                <hr></hr>
            </div>
        </div>
    )
}