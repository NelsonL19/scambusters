import React, {Component, useEffect, useState} from 'react';
import {Amazon_Voicemail, Browser_Bar} from '../components';


//This renders Fake Amazon.
export default class Level_3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }
    render(){
        return(
            <>
                <Amazon_Voicemail allTooltipsVisible = {this.props.allTooltipsVisible}/>
            </>
        )



    }
}