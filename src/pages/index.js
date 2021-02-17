import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import {Box} from '../renderers'
import {moveBox} from '../systems'

//GameEngine takes a list of systems and an object of entities (described by renderers)
export default class Game extends PureComponent {
  render () {
    return(
      <GameEngine
        style = {{width:800, height: 600, backgroundColor: 'cornflowerblue'}}
        systems = {[moveBox]}
        entities = {{
          box1: {x:200, y:200, renderer: <Box/>}
        }}
      >


      </GameEngine>
    )
  }
}