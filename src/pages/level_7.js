import React, {Component, useEffect, useState} from 'react';
import {IRS_Email, Browser_Bar} from '../components';


export default class Level_7 extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }


    render(){
        return(
            <>
               <IRS_Email handleCRClick = {this.props.handleCRClick} evidenceFound = {this.props.evidenceFound} isLevelComplete={this.props.isLevelComplete}/>
            </>
        )
    }
}