import React, {Component, useEffect, useState} from 'react';
import {Fake_Netflix, Browser_Bar} from '../components';


export default class Level_1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }
    render(){
        return(
            <>
                <Fake_Netflix allTooltipsVisible = {this.props.allTooltipsVisible}/>
            </>
        )



    }
}