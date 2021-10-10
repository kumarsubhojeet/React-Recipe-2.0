import React from 'react'

import {Switch , Route} from 'react-router-dom'

import Home from './Components/Home'
import Recipe from './Components/Recipe.jsx'
import Main from './Components/Main'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path='/Home' component={Home}/>
      <Route exact path='/' component={Main}/>
      <Route path='/Recipe/:name' children={<Recipe />}></Route>
    </Switch>
    </>
  )
}

export default App
