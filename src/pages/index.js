import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import {Link} from "react-router-dom"
import {Box} from '../renderers'
import {moveBox} from '../systems'

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