import React, {Component, useEffect, useState} from 'react';
import {Coupon, Browser_Bar} from '../components';


export default class Level_5 extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }
    render(){
        return(
            <>
                <Coupon allTooltipsVisible = {this.props.allTooltipsVisible}/>
            </>
        )



    }
}