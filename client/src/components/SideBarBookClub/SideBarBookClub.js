import { useState } from "react"

export default function SideBarBookClub({ club }) {
    let [clickedDropDown, setClickedDropDown] = useState(false)

    function handleClickRow() {
        setClickedDropDown(!clickedDropDown)
    }

    let showOptions = clickedDropDown && <div>
        <div className="clubOption">
            <div>Visit Club Page</div>
        </div>
        <div className="clubOption">
            <div>Add to Reading List</div>
        </div>
    </div>

    let dropDownTriangle = clickedDropDown ? '▾' : '▴'

    return (
        <div className="clubCard">
            <div className="clubrow" onClick={handleClickRow}>
                <div className="clubname">{club.name}</div>
                <div className='dropdown'>{dropDownTriangle}</div>
            </div>

            {showOptions}
        </div>
    )
}