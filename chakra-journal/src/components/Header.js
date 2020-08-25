import React from 'react'
//import './Header.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <div>
                <ul>
                { props.currentUser ? 
                
                <>
                <li><Link to={'/chakras'}>Chakras</Link></li>
                <li><Link to={'/profile'}>Profile</Link></li>
                <li><a href="/logout" onClick={ props.logout}>Log Out </a></li>
                </>
                :
                // when the user is not logged in 
                <>
                <li><Link to={'/chakras'}>Chakras</Link></li>
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