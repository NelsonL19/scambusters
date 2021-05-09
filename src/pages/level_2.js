import React, {Component, useEffect, useState} from 'react';
import {Apple_music_email, Browser_Bar} from '../components';


//This renders Fake Apple Email.
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
               <Apple_music_email handleCRClick = {this.props.handleCRClick} evidenceFound = {this.props.evidenceFound} isLevelComplete={this.props.isLevelComplete}/>
            </>
        )
    }
}