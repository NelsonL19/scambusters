import React, {Component, useEffect, useState} from 'react';
import { GameEngine } from "react-game-engine";
import {Box} from '../renderers'
import {moveBox} from '../systems'

export default class Level_0 extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }
    render(){
        return(
            <GameEngine
<<<<<<< HEAD
              style = {{width:800, height: 600, backgroundColor: 'gray'}}
=======
              style = {{width:800, height: 600, backgroundColor: 'cornflowerblue'}}
>>>>>>> 5cb4ff6d7a1ed80472fa32fd116a392ead2b4daa
              systems = {[moveBox]}
              entities = {{
                box1: {x:200, y:200, renderer: <Box/>}
              }}
            >
            </GameEngine>
          )
    }
}