import React, {Component, useEffect, useState} from 'react';
import {Target_Letter} from '../components';


export default class Level_6 extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }
    
    render(){
        return(
            <>
                <Target_Letter handleCRClick = {this.props.handleCRClick} evidenceFound = {this.props.evidenceFound} isLevelComplete={this.props.isLevelComplete}/>
            </>
        )



    }
}