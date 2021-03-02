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
                        <h3>Level: 1</h3>
                        <div>
                            <h3>Time Bonus</h3>
                            <h2 className="bonus">1000</h2>
                        </div>
                    </div>
                    <div className="bottom-row">
                        <h3>Scam or Legit?</h3>
                        <div className="scam-buttons">
                            <Button className="btn" onClick={this.scamPressed} type="primary" shape="round" size="large" style={{ background: "red", borderColor: "white"}}>SCAM</Button>
                            <Button className="btn" onClick={this.legitPressed} type="primary" shape="round" size="large" style={{ background: "green", borderColor: "white"}}>LEGIT</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}