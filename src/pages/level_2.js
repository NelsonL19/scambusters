import React, {Component, useEffect, useState} from 'react';
import {Apple_music_email, Browser_Bar} from '../components';


export default class Level_2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }
    render(){
        return(
            <>
               <Apple_music_email/>
            </>
        )
    }
}