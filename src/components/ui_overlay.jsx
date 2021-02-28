import React, {Component, useEffect, useState} from 'react';
import './ui_overlay.css'

export default class UI_Overlay extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }

    scamPressed(){
        alert("scam pressed")
    }

    legitPressed(){
        alert("legit pressed")
    }

    render(){
        return (
            <div className="UI_Parent">
                <div className="flex-container">
                    <div className="top-row">
                        <p>level number</p>
                        <p>bonus score</p>
                    </div>
                    <div className="bottom-row">
                        <h4>Scam or Legit?</h4>
                        <div className="scam-buttons">
                            <button onClick={this.scamPressed}>SCAM</button>
                            <button onClick={this.legitPressed}>LEGIT</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}