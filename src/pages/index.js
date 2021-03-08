import React, { PureComponent } from "react";
import {Link} from "react-router-dom"


//GameEngine takes a list of systems and an object of entities (described by renderers)
const Home = (props) => {
  return (
    <>
      <h1>Welcome to Scambusters: The Video</h1>
      <Link to = "/level0">Level 0</Link>
      <Link to = "/level1">Level 1</Link>
      <Link to = "/level2">Level 2</Link>
    </>
  )
}

export default Home