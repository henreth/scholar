import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import key from '../../apiKey'
import FeaturedBook from "../FeaturedBook/FeaturedBook"

export default function BookPage({ setUser }) {
    let params = useParams()
    let id = params.id
    let [pageData, setPageData] = useState({})

    let [hoverStars, setHoverStars] = useState(0)
    let [clickedStars, setClickedStars] = useState(0)

    useEffect(() => {
        // let url = "https://www.googleapis.com/books/v1/volumes/" + id + '?&key=' + key
        let url = "https://www.googleapis.com/books/v1/volumes/" + id
        axios.get(url)
            .then(r => setPageData(r.data))
    }, [])

    if (!pageData.volumeInfo) return null

    let avgRating = pageData.volumeInfo.averageRating ? pageData.volumeInfo.averageRating : 0
    let numRatings = pageData.volumeInfo.ratingsCount ? pageData.volumeInfo.ratingsCount : 0
    //☆★

    function handleClickStar(num) {
        if (hoverStars === num && clickedStars) {
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
    }


    let demoReviews = [
        {
            'username': 'test',
            'rating': 5,
            'text': 'Prudence profonde coupoles prennent roc pas precieux pourquoi. Ennemies massacre triomphe les cavernes des six toi. Je or devant blason palais et epouse sa atroce. Se on rendre ah sortit annees jusque jambes voyage. Chantant traverse soutenir net campagne sur remettre. Demeurons cet six art toutefois resterait les. Firmament sortaient net echauffer aux reprendre preferait eux.',
            'date': 'Jan 10, 2022'
        },
        {
            'username': 'test-2',
            'rating': 1,
            'text': 'Prudence profonde coupoles prennent roc pas precieux pourquoi. Ennemies massacre triomphe les cavernes des six toi. Je or devant blason palais et epouse sa atroce. Se on rendre ah sortit annees jusque jambes voyage. Chantant traverse soutenir net campagne sur remettre. Demeurons cet six art toutefois resterait les. Firmament sortaient net echauffer aux reprendre preferait eux.',
            'date': 'Jan 10, 2022'
        },
        {
            'username': 'test-3',
            'rating': 2,
            'text': 'Prudence profonde coupoles prennent roc pas precieux pourquoi. Ennemies massacre triomphe les cavernes des six toi. Je or devant blason palais et epouse sa atroce. Se on rendre ah sortit annees jusque jambes voyage. Chantant traverse soutenir net campagne sur remettre. Demeurons cet six art toutefois resterait les. Firmament sortaient net echauffer aux reprendre preferait eux.',
            'date': 'Jan 10, 2022'
        }
    ]

    let reviewsToDisplay = demoReviews.map(review => {
        return (
            <div className="userReviewCard">
                <hr></hr>
                <div className="userReviewId">
                    <div className="userReviewTitle"> <span>{review.username}</span> - <span>{review.rating} ★</span></div>
                    <div className="userReviewDate">{review.date}</div>
                </div>
                <div className="userReviewText">
                    {review.text}
                    {review.text}
                </div>
            </div>
        )
    })

    return (
        <div className="mainContainer">
            <div className="sidebar">
                Sidebar
            </div>
            <div className="display">
                <FeaturedBook
                    book={pageData}
                    setUser={setUser}
                />
                <div className="reviewContainer">
                    <div className="reviewInfo">
                        <h2>Average Rating: {avgRating} ★</h2>
                        <h4>Number of ratings: {numRatings}</h4>
                        <hr></hr>
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
                            />
                            <button onClick={handleSubmit}>Submit</button>
                        </form>
                        <hr></hr>
                        <h3>All Reviews: </h3>
                        <div className="userReviews">
                            {reviewsToDisplay}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}