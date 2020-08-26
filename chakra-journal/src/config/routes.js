import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import EntryShow from '../pages/EntryShow'
import NewEntry from '../pages/NewEntry'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import ChakraList from '../pages/ChakraList'
import ChakraShow from '../pages/ChakraShow'

export default (props) => {
    return (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/entries/new' component={ NewEntry } />
        <Route path='/entries/:id' component={ EntryShow } />
        <Route path='/profile' component={ Profile }/>
        <Route path='/SignUp' component={ SignUp } />
        <Route path='/chakras/:id' component={ ChakraShow } />
        <Route path='/chakras' component={ ChakraList} />
        <Route path='/login' render={ (routeProps) => {
            return <Login
            {...routeProps}
            storeUser={ props.storeUser }
            />
        }} />
    </Switch>)
}