import { useState } from "react"
import axios from "axios"
import { SlackCounter, GithubSelector } from '@charkour/react-reactions';

export default function BookReview({ user, madeByUser, review, bookReviews, setBookReviews, clickEdit, inEditMode }) {
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

    let [counters, setCounters] = useState(review.reactions)

    let reactions = counters.map(reaction => {
        return {
            "emoji": reaction.emoji,
            "by": reaction.user.username
        }
    })


    function handleSelectReaction(e) {
        let includesReact = counters.map(reaction => (reaction.emoji === e) && (reaction.by === user.username)).includes(true)
        if (!includesReact) {
            let count = {
                emoji: e,
                user_id: user.id,
                review_id: review.id
            }
            axios.post('/reactions', count)
                .then(r => setCounters([...counters, r.data]))

        }
    }

    function removeSelectReaction(e) {
        let filteredCounters = counters.filter(reaction => (reaction.emoji !== e) && (reaction.by === user.username))
        setCounters(filteredCounters)
    }

    let [displayEmojis, setDisplayEmojis] = useState(false)
    function handleClickAddEmojis() {
        setDisplayEmojis(!displayEmojis)
    }

    let displayEmojiSelector = displayEmojis ? <GithubSelector onSelect={handleSelectReaction} /> : null;

    return (
        <div className="userReviewCard">
            <hr></hr>
            <div className="userReviewId">
                <div className="userReviewTitle"> <span>{review.user.username}</span> - <span>{review.rating}</span> ★ {userButtons}</div>
                <div className="userReviewDate">{review.date}</div>
            </div>
            <div className="userReviewText"> {review.text} </div>
            <div className="reactionCounter">
                <h5>Reactions: </h5>
                <SlackCounter counters={reactions} onSelect={removeSelectReaction} onAdd={handleClickAddEmojis} />
            </div>
            {displayEmojiSelector}
        </div>
    )
}