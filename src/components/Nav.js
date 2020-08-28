import React from 'react'
//import './Header.scss'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav>
            <div className="nav">
                <h4>Chakra Journal</h4>
                <ul className="nav-ul">
                    { props.currentUser ? 
                    // when the user is logged in 
                    <>
                    {/* <li><Link to={'/chakras'}>Chakras</Link></li> */}
                    <li><Link to={'/profile'}>Profile</Link></li>{'  |  '}
                    <li><a href="/logout" onClick={ props.logout}>Log Out </a></li> {'  |  '}
                    <li><Link to={'/chakras'}>7 Major Chakras</Link></li> 
                    </>
                    :
                    // when the user is not logged in 
                    <>
                    {/* <li><Link to={'/chakras'}>Chakras</Link></li> */}
                    <li><Link to={'/signUp'}>Sign Up</Link></li> {' | '}
                    <li><Link to={'/login'}>Login</Link></li>     
                    </>
                }
                </ul>
            </div>
        </nav>
    )
}


export default Nav