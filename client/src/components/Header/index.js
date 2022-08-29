import { useState } from "react"
import key from "../../apiKey"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import book from '../../images/book.png';

export default function Header({ user, setUser,setUserShelves, setUserBookClubs }) {
    let [showProfileMenu, setShowProfileMenu] = useState(false)
    const profileClick = () => setShowProfileMenu(!showProfileMenu)
    const handleMenuHover = () => setShowProfileMenu(true)
    let [searchTerm, setSearchTerm] = useState('')
    const handleSearchChange = (e) => setSearchTerm(e.target.value)
    let navigate = useNavigate()

    function handleSearchSubmit(e) {
        let booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&maxResults=40&printType=books&key=' + key
        e.preventDefault()
        axios.get(booksUrl)
            .then(r => {
                if (r.data.items) {
                    navigate('/search/' + searchTerm)
                    setSearchTerm('')
                } else {
                    alert('No results found!')
                }
            })
    }

    function handleHeaderClick() {
        navigate('/')
        setShowProfileMenu(false)
    }

    function handleAboutClick() {
        navigate('/about')
        setShowProfileMenu(false)
    }

    function handleBrowseClick() {
        navigate('/browse')
        setShowProfileMenu(false)
    }

    function handleCommunityClick() {
        navigate('/community')
        setShowProfileMenu(false)
    }

    function handleClickProfile() {
        navigate('/profile/'+user.username)
        setShowProfileMenu(false)
    }

    function handleLogOut() {
        axios.delete('/logout')
            .then(r => {
                setShowProfileMenu(false)
                setUser({})
                setUserShelves([])
                setUserBookClubs([])
                alert('You are now logged out.')
            })
    }

    function handleMouseOut() {
        setTimeout(() => {
            setShowProfileMenu(false)
        }, 10 * 1000)
    }

    let displayProfileMenu = showProfileMenu ? (
        <div className='profile-menu' onMouseOver={handleMenuHover} onMouseOut={handleMouseOut}>
            <div className='menu-option'>⬜️ {user.username}</div>
            <div className='menu-option option' onClick={handleClickProfile}>Profile</div>
            <div className='menu-option option' onClick={handleLogOut}>Log Out</div>
        </div>
    ) : null

    let dropDownTriangle = showProfileMenu ? '▼' : '▲'

    let userProfileButton = user.username ? <div className="profileMenuButton" onClick={profileClick}>
        <img className='profile pic'  src={user.profile_picture} />
        <div className='profile drop' >{dropDownTriangle}</div>
    </div> : null;

    return (
        <div className="header-container">
            <div className='header'>
                <div className="group">
                    <div className="headerTitle option" onClick={handleHeaderClick}>Scholar</div>
                    <div className="option" onClick={handleAboutClick}>About</div>
                    <div className="option" onClick={handleBrowseClick}>Browse</div>
                    <div className="option" onClick={handleCommunityClick}>Community</div>
                </div>
                <img className='logo' src={book} onClick={handleHeaderClick} />
                <div className="group end">
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type='text'
                            value={searchTerm}
                            placeholder='Search'
                            className="searchBar"
                            onChange={handleSearchChange}
                        />
                    </form>
                    {userProfileButton}
                </div>
                {displayProfileMenu}
            </div>
        </div>
    )
}