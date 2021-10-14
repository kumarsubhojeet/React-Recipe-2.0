import React from 'react'

import {Switch , Route} from 'react-router-dom'

import Home from './Components/Home'
import Recipe from './Components/Recipe.jsx'
import Main from './Components/Main'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/Home/:name' children={<Home />}></Route> 
      <Route exact path='/' component={Main}/>
      <Route path='/Recipe/:name' children={<Recipe />}></Route>
    </Switch>
    </>
  )
}

export default App
