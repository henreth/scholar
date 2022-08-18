import { useState } from "react"
import axios from "axios"


export default function BookReview({ madeByUser, review, bookReviews, setBookReviews, clickEdit, inEditMode }) {
    let [clickedDelete, setClickedDelete] = useState(false)


    function handleConfirmDelete() {
        let obj = { "id": review.id }
        axios.post('/removereview', obj)
            .then(r => {
                let updatedBookReviews = bookReviews.filter(newReview => newReview.id !== review.id)
                setBookReviews(updatedBookReviews)
            })
        setClickedDelete(false)
    }

    function handleDeleteClick() {
        setClickedDelete(true)
    }

    function handleClickCancel() {
        setClickedDelete(false)
    }
    let buttons = clickedDelete ? <>
        <label>Are you sure?</label>
        <button onClick={handleClickCancel}>Cancel</button> <button onClick={handleConfirmDelete}>Confirm</button>
    </> : <><button onClick={clickEdit}>{inEditMode ? 'Stop Editing' : 'Edit'}</button> <button onClick={handleDeleteClick}>Delete</button></>
    let userButtons = madeByUser ? <>
        {buttons}
    </> : null

    return (
        <div className="userReviewCard" key={review.id}>
            <hr></hr>
            <div className="userReviewId">
                <div className="userReviewTitle"> <span>{review.user.username}</span> - <span>{review.rating} ★ {userButtons}</span></div>
                <div className="userReviewDate">{review.date}</div>
            </div>
            <div className="userReviewText">
                {review.text}
            </div>
        </div>
    )
}