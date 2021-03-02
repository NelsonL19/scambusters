import React, {Component, useEffect, useState} from 'react';
import { Button } from 'antd';
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
                        <p>Level: 1</p>
                        <div>
                            <p>Time Bonus</p>
                            <p>1000</p>
                        </div>
                    </div>
                    <div className="bottom-row">
                        <h4>Scam or Legit?</h4>
                        <div className="scam-buttons">
                            <Button className="btn" onClick={this.scamPressed} type="primary" style={{ background: "red", borderColor: "white"}}>SCAM</Button>
                            <Button className="btn" onClick={this.legitPressed} type="primary" style={{ background: "green", borderColor: "white"}}>LEGIT</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}