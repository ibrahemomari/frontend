import React, { Component } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Favorite from './components/Favorite'
import {BrowserRouter,Route,Router,Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home/>

            </Route>
            <Route  path="/favorite">
              <Favorite/>

            </Route>
          </Switch>
        </BrowserRouter>
        
      </>
    )
  }
}

export default App
