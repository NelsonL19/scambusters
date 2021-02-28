import React, {Component, useEffect, useState} from 'react';

export default class UI_Overlay extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }
    render(){
        return (
            <div>
                UI Overlay
            </div>
        )
    }
}