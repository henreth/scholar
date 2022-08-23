import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import key from '../../apiKey'
import BookReview from "../BookReview/BookReview"
import FeaturedBook from "../FeaturedBook/FeaturedBook"


// ! CREATE WAY TO SORT REVIEWS BY DATE/RATING

export default function BookPage({ user, setUser, userShelves, setUserShelves }) {
    let params = useParams()
    let id = params.id
    let [pageData, setPageData] = useState({})
    let [bookReviews, setBookReviews] = useState([])

    let [hoverStars, setHoverStars] = useState(0)
    let [clickedStars, setClickedStars] = useState(0)

    let [clickedEdit, setClickedEdit] = useState(false)
    let [selectedReview, setSelectedReview] = useState('')

    let [reviewText, setReviewText] = useState('')

    function truncateDecimals(num, digits) {
        let numS = num.toString(),
            decPos = numS.indexOf('.'),
            substrLength = decPos == -1 ? numS.length : 1 + decPos + digits,
            trimmedResult = numS.substr(0, substrLength),
            finalResult = isNaN(trimmedResult) ? 0 : trimmedResult;

        return parseFloat(finalResult);
    }

    useEffect(() => {
        let url = "https://www.googleapis.com/books/v1/volumes/" + id + '?&key=' + key
        let bookDataRequest = axios.get(url)
        let bookReviewUrl = '/allbookreviews'
        let bookReviewRequest = axios.post(bookReviewUrl, { "book_id": id })
        axios.all([bookDataRequest, bookReviewRequest])
            .then(axios.spread((res1, res2) => {
                document.title = res1.data.volumeInfo.title
                setPageData(res1.data)
                setBookReviews(res2.data)
            }))
    }, [user])

    if (!pageData.volumeInfo) return null

    let avgRating = pageData.volumeInfo.averageRating ? pageData.volumeInfo.averageRating : 0
    let numRatings = pageData.volumeInfo.ratingsCount ? pageData.volumeInfo.ratingsCount : 0
    //☆★

    function handleClickStar(num) {
        if (clickedStars === num) {
            setClickedStars(0)
            setHoverStars(num)
        } else {
            setClickedStars(num)
            setHoverStars(num)
        }
    }

    function handleHoverStar(num) {
        setHoverStars(num)
    }

    function handleHoverStarOff() {
        setHoverStars(clickedStars)
    }

    function displayStars(num) {
        return clickedStars >= num || hoverStars >= num ? '★' : '☆'
    }

    function starClass(num) {
        return clickedStars >= num || hoverStars >= num ? 'star active' : 'star'
    }

    function handleSubmit(e) {
        e.preventDefault()
        let date = new Date()
        let review = {
            "book_id": id,
            "user_id": user.id,
            "rating": clickedStars,
            "text": reviewText,
            "date": date.toDateString().slice(4,)
        }
        axios.post('/reviews', review)
            .then(r => {
                let updatedBookReviews = [...bookReviews, r.data].filter(newReview => newReview.id !== selectedReview)
                setBookReviews(updatedBookReviews)
            })
        if (clickedEdit) axios.post('/removereview', { "id": selectedReview })

        setClickedStars(0)
        setHoverStars(0)
        setReviewText('')
        setClickedEdit(false)
        setSelectedReview('')
    }

    function handleReviewTextChange(e) {
        setReviewText(e.target.value)
    }
    // bookReviews.sort((a,b)=>b.id-a.id)
    let reviewsToDisplay = bookReviews.sort((a,b)=>b.id-a.id).map(review => {
        function handleClickEdit() {
            if (clickedEdit && review.id === selectedReview) {
                setClickedStars(0)
                setReviewText('')
                setSelectedReview('')
                setClickedEdit(false)
            } else {
                setClickedStars(review.rating)
                setReviewText(review.text)
                setSelectedReview(review.id)
                setClickedEdit(true)
            }
        }
        let madeByUser = review.user.id === user.id
        let inEditMode = selectedReview === review.id
        return (
            <BookReview
                key={review.id}
                user={user}
                madeByUser={madeByUser}
                review={review}
                bookReviews={bookReviews}
                setBookReviews={setBookReviews}
                handleClickEdit={handleClickEdit}
                inEditMode={inEditMode}
            />
        )
    })

    function cancelEdit(e) {
        e.preventDefault()
        setClickedStars(0)
        setReviewText('')
        setSelectedReview('')
        setClickedEdit(false)
    }


    let disableSubmitButton = (clickedStars) && (reviewText)

    let bookReviewsRating = bookReviews.reduce((tot, review) => tot + review.rating, 0) / bookReviews.length //average rating of book reviews in the backend
    let calculateBookRating = bookReviews.length ? truncateDecimals(((avgRating * numRatings) + (bookReviewsRating * bookReviews.length)) / (numRatings + bookReviews.length), 2) : avgRating
    let totalNumBookReviews = numRatings + bookReviews.length

    let bookReviewsToDisplay = bookReviews.length ? reviewsToDisplay : <div className="userReviewCard">No reviews have been left for this book.</div>
    let displayReviewForm = user.username ? <>
        <div className="newReviewTitle">
            <h3>Write a Review: </h3>
            <div className="stars" onMouseOut={handleHoverStarOff}>
                <div className={starClass(1)} onClick={() => { handleClickStar(1) }} onMouseOver={() => handleHoverStar(1)}>{displayStars(1)}</div>
                <div className={starClass(2)} onClick={() => { handleClickStar(2) }} onMouseOver={() => handleHoverStar(2)}>{displayStars(2)}</div>
                <div className={starClass(3)} onClick={() => { handleClickStar(3) }} onMouseOver={() => handleHoverStar(3)}>{displayStars(3)}</div>
                <div className={starClass(4)} onClick={() => { handleClickStar(4) }} onMouseOver={() => handleHoverStar(4)}>{displayStars(4)}</div>
                <div className={starClass(5)} onClick={() => { handleClickStar(5) }} onMouseOver={() => handleHoverStar(5)}>{displayStars(5)}</div>
            </div>
        </div>
        <form className="reviewForm">
            <input
                type='text'
                placeholder="Write your throughts here."
                value={reviewText}
                onChange={handleReviewTextChange} />
            <div className="">
                <button onClick={handleSubmit} disabled={!disableSubmitButton}>Submit</button>
                {clickedEdit ? <button onClick={cancelEdit}>Cancel</button> : null}
            </div>
        </form>
        <hr></hr>
    </> : null
    return (
        <div className="mainContainer">
            <div className="sidebar">
                Sidebar
            </div>
            <div className="display">
                <FeaturedBook
                    book={pageData}
                    user={user}
                    setUser={setUser}
                    userShelves={userShelves}
                    setUserShelves={setUserShelves}
                />
                <div className="reviewContainer">
                    <div className="reviewInfo">
                        <h2>Average Rating: {calculateBookRating} ★ ({totalNumBookReviews})</h2>
                        {/* <h4>Number of ratings: {numRatings + bookReviews.length}</h4> */}
                        <hr></hr>
                        {displayReviewForm}
                        <h3>All Reviews: </h3>
                        <div className="userReviews">
                            {bookReviewsToDisplay}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}