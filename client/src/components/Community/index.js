import SideBar from "../Sidebar";

export default function Community({user,setUser}){

    return (
        <div className="mainContainer">
            <SideBar
                user={user}
                setUser={setUser}
                pageData={{}}
                page ={'community'}
            />
            <div className="display"> 


            </div>

        </div>
    )
}