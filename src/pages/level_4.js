import React, {Component, useEffect, useState} from 'react';
import {Amazon_Voicemail, Browser_Bar} from '../components';


export default class Level_4 extends Component {
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