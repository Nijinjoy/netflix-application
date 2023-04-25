import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='navbar'>
         <img className='avatar' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
         <ul className='list'>
            <li>Home</li>
            <li>Shows</li>
            <li>Web Series</li>
            <li>Favourites</li>
         </ul>
        
        </div>
    )
}

export default Header