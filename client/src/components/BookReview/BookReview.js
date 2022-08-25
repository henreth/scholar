import { useState } from "react"
import axios from "axios"
import { SlackCounter, GithubSelector } from '@charkour/react-reactions';

export default function BookReview({ user, madeByUser, review, bookReviews, setBookReviews, handleClickEdit, inEditMode }) {
    let [counters, setCounters] = useState(review.reactions)
    let [clickedDelete, setClickedDelete] = useState(false)
    let [displayEmojis, setDisplayEmojis] = useState(false)

    function handleConfirmDelete() {
        let reviewToDelete = { "id": review.id }
        axios.post('/removereview', reviewToDelete)
            .then(r => {
                let updatedBookReviews = bookReviews.filter(newReview => newReview.id !== review.id)
                setBookReviews(updatedBookReviews)
            })
        alert('Review deleted!')
        setClickedDelete(false)
    }

    function handleDeleteClick() {
        setClickedDelete(!clickedDelete)
    }

    function handleClickCancel() {
        setClickedDelete(false)
    }

    let buttons = clickedDelete ? <>
        <label className="reviewbuttonlabel">Are you sure?</label>
        <button onClick={handleClickCancel}>Cancel</button>
        <button onClick={handleConfirmDelete}>Confirm</button>
    </> : <>
        <button onClick={handleClickEdit}>{inEditMode ? 'Stop Editing' : 'Edit'}</button>
        {inEditMode ? null : <button onClick={handleDeleteClick}>Delete</button>}
    </>

    let userButtons = madeByUser ? buttons : null


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

    function handleRemoveReaction(e) {
        let reactionToDelete = {
            emoji: e,
            user_id: user.id,
            review_id: review.id
        }
        axios.post('/removereaction', reactionToDelete)
            .then(r => {
                let filteredCounters = counters.filter(reaction => reaction.id !== r.data.id)
                setCounters(filteredCounters)
            })

    }

    function handleMouseOut() {
        setTimeout(() => {
            displayEmojis(false)
        }, 50 * 1000)
    }

    function handleClickAddEmojis() {
        if (review.user.id !== user.id) setDisplayEmojis(!displayEmojis)
    }

    let displayEmojiSelector = displayEmojis ? <div className="emojiSelector" onMouseOut={handleMouseOut}>
        <GithubSelector onSelect={handleSelectReaction} />
    </div> : null;

    let counterClass = madeByUser ? "reactionCounter madebyuser" : "reactionCounter"

    return (
        <div className="userReviewCard">
            <hr></hr>
            <div className="userReviewId">
                <div className="userReviewTitle"> <img src={review.user.profile_picture} className='reviewprofilepic' /> <span>{review.user.username}</span> <div>-</div> <span>{'★'.repeat(review.rating)}</span> {userButtons}</div>
                <div className="userReviewDate">{review.date}</div>
            </div>
            <div className="userReviewText"> {review.text} </div>
            <div className={counterClass}>
                <h5>Reactions: </h5>
                <SlackCounter counters={reactions} onSelect={handleRemoveReaction} onAdd={handleClickAddEmojis} />
            </div>
            {displayEmojiSelector}
        </div>
    )
}