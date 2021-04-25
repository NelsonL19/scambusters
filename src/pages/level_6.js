import React, {Component, useEffect, useState} from 'react';
import {Puppy_Site, Browser_Bar} from '../components';


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
                <Puppy_Site handleCRClick = {this.props.handleCRClick} evidenceFound = {this.props.evidenceFound} isLevelComplete={this.props.isLevelComplete}/>
            </>
        )



    }
}