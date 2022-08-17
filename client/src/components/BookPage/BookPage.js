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

    function handleSubmit(e){
        e.preventDefault()
    }

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
                                <div onClick={() => { handleClickStar(1) }} onMouseOver={() => handleHoverStar(1)}>{displayStars(1)}</div>
                                <div onClick={() => { handleClickStar(2) }} onMouseOver={() => handleHoverStar(2)}>{displayStars(2)}</div>
                                <div onClick={() => { handleClickStar(3) }} onMouseOver={() => handleHoverStar(3)}>{displayStars(3)}</div>
                                <div onClick={() => { handleClickStar(4) }} onMouseOver={() => handleHoverStar(4)}>{displayStars(4)}</div>
                                <div onClick={() => { handleClickStar(5) }} onMouseOver={() => handleHoverStar(5)}>{displayStars(5)}</div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}