import React, { PureComponent } from "react";
import {Link} from "react-router-dom"


//GameEngine takes a list of systems and an object of entities (described by renderers)
const Home = (props) => {
  return (
    <>
      <h1>Scambusters</h1>
      <Link to = "/level0">Level 0</Link>
    </>
  )
}

export default Home