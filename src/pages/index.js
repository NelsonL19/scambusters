import React, { PureComponent } from "react";
import {Link} from "react-router-dom"


//GameEngine takes a list of systems and an object of entities (described by renderers)
const Home = (props) => {
  return (
    <>
      <h1>Welcome to Scambusters®: The Video Game</h1>
      <p>Release Version: v0.3-alpha: Firebase Autodeply Test Version</p>
      <Link to = "/level0">Level 0</Link>
      <br/>
      <Link to = "/level1">Level 1</Link>
      <br/>
      <Link to = "/level2">Level 2</Link>
      <br/>
      <Link to = "/level4">Level 4</Link>
    </>
  )
}

export default Home