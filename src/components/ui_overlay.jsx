import React, {Component, useEffect, useState} from 'react';
import { Button } from 'antd';
import '../styles/ui_overlay.css'

export default class UI_Overlay extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }

    scamPressed(){
        if(this.props.level.isScam){
            alert("Correct")
        }
        else{
            alert("Incorrect")
        }
    }

    legitPressed(){
        if(this.props.level.isScam){
            alert("Incorrect")
        }
        else{
            alert("Correct")
        }
    }

    render(){
        return (
            <div className="UI_Parent">
                <div className="flex-container">
                    <div className="top-row">
                        <div>
                        <h3>Level</h3>
                        <h1 className="level">{this.props.level.levelNum}</h1>
                        </div>
                        <div>
                            <h3>Time Bonus</h3>
                            <h1 className="bonus">1000</h1>
                        </div>
                    </div>
                    <div className="bottom-row">
                        <h3>Scam or Legit?</h3>
                        <div className="scam-buttons">
                            <Button className="btn" onClick={this.scamPressed.bind(this)} type="primary" shape="round" size="large" style={{ background: "#D80635", borderColor: "white"}}>SCAM</Button>
                            <Button className="btn" onClick={this.legitPressed.bind(this)} type="primary" shape="round" size="large" style={{ background: "#01F59C", borderColor: "white"}}>LEGIT</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}