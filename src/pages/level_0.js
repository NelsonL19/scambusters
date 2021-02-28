import React, {Component, useEffect, useState} from 'react';


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