import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/routes'
import UserModel from './models/user'
import './App.scss'


function App(props) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'))

  const storeUser = userId => {
    setCurrentUser({ currentUser: userId })
    localStorage.setItem('uid', userId)
  }
  const logout = event => {
    event.preventDefault()
    localStorage.removeItem('uid')
    UserModel.signOut()
    .then(data => {
      console.log(data)
      setCurrentUser(null)
      props.history.push('/')
    })
  }

  return (
    <div className="App">
      <div>
      <Header 
      currentUser={ currentUser }
      logout={ logout } 
      />
      </div>
      <Routes
      currentUser={ currentUser }
      storeUser={ storeUser }
      />
      <Footer />
    </div>
  );
}

export default withRouter(App);
