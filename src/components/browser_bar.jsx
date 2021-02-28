import React, {Component, useEffect, useState} from 'react';


export default class Browser_Bar extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }
    render(){
        return (<div>Browser Bar Here, pass url into this component to customize</div>)
    }
}