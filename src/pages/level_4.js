import React, {Component, useEffect, useState} from 'react';
import {Iphone_Text, Browser_Bar} from '../components';


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
               <Iphone_Text handleCRClick = {this.props.handleCRClick} evidenceFound = {this.props.evidenceFound}/>
            </>
        )
    }
}