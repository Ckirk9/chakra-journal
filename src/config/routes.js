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
import CheckIn from '../containers/CheckIn'
import Results from '../containers/Results'

export default (props) => {
    return (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/entries/new' component={ NewEntry } />
        <Route path='/entries/:id' component={ EntryShow } />
        <Route path='/editEntry/:id' component={ EditEntry } />
        <Route path='/profile' component={ Profile }/>
        <Route path='/SignUp' component={ SignUp } />
        <Route path='/chakras/:name' component={ ChakraShow } />
        <Route path='/chakras' component={ ChakraList} />
        <Route path='/checkIn' component={ CheckIn } />
        <Route path='/results' component={ Results }/>
        <Route path='/login' render={ (routeProps) => {
            return <Login
            {...routeProps}
            storeUser={ props.storeUser }
            />
        }} />
    </Switch>)
}