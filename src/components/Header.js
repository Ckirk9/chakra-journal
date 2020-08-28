import React from 'react'
//import './Header.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <div className="header">
                <ul>
                    <h4>Welcome to the Chakra Journal</h4>
                { props.currentUser ? 
                // when the user is logged in 
                <>
                {/* <li><Link to={'/chakras'}>Chakras</Link></li> */}
                <li><Link to={'/profile'}>Profile</Link></li>
                <li><a href="/logout" onClick={ props.logout}>Log Out </a></li>
                <li><Link to={'/chakras'}>7 Major Chakras</Link></li>
                </>
                :
                // when the user is not logged in 
                <>
                {/* <li><Link to={'/chakras'}>Chakras</Link></li> */}
                <li><Link to={'/signUp'}>Sign Up</Link></li>
                <li><Link to={'/login'}>Login</Link></li>     
                </>
                }
                </ul>
            </div>
        </header>
    )
}


export default Header