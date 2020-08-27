import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'
import EntryShow from '../containers/EntryShow'
import NewEntry from '../containers/NewEntry'
import Profile from '../containers/Profile'
import Login from '../containers/Login'
import SignUp from '../containers/SignUp'
import ChakraList from '../containers/ChakraList'
import ChakraShow from '../containers/ChakraShow'
import EditEntry from '../containers/EditEntry'

export default (props) => {
    return (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/entries/new' component={ NewEntry } />
        <Route path='/entries/:id' component={ EntryShow } />
        <Route path='/editEntry/:id' component={ EditEntry } />
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