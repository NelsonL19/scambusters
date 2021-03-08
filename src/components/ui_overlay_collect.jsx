import React, {Component, useEffect, useState} from 'react';
import { Button } from 'antd';
import '../styles/ui_overlay.css'

export default class UI_Overlay_Collect extends Component {
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
                        <h3>Evidence Collected:</h3>
                        <div className="collection-count">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}