import React, { Component, useEffect, useState } from 'react';
import { Button } from 'antd';
import Level_End from './level_end.jsx'
import '../styles/ui_overlay.css'
import { RightOutlined, CaretRightOutlined } from '@ant-design/icons';

//This bad boy creates the UI Overlay that will exist ontop of each level. This includes the HUD and all that jazz.
export default class UI_Overlay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            timeBonus: 3000,
            isLevelComplete: false,
            isCorrect: false,
            isTimeOut: false
        }
        this.giveUp.bind(this)
    }

    //This counts down the bonus timer.
    componentDidMount () {
        this.bonusTimerID = setInterval(
            () => this.tickDownBonus(), 10
        )
        // if (this.state.evidenceTotal > 0) {
        //     for (let i = 0; i < this.state.evidenceTotal; i++) {
        //         this.state.evidence[i] = false;
        //     }
        // }

    }

    //This checks to see if it's an evidence level, then if you've found a pieee of evidence.
    componentDidUpdate () {
        if(this.props.level.type == "evidenceCollect"){
            if(this.props.evidenceFound.length >= this.props.level.evidenceAmount && this.props.isLevelComplete == false){
                this.props.handleCorrect()
            }
        //     else if (this.state.isLevelComplete == true && this.props.evidenceFound.length < this.props.level.evidenceAmount){
        //         this.setState({isCorrect: false, isLevelComplete:false})
        //     }
        } 
    }

    //Resets the timer for the next level.
    componentWillUnmount () {
        clearInterval(this.bonusTimerID)
    }


    //This is what ticks down the timer and actully gives you the bonus for the level if you do it fast. Not if you're slow. Because that would probably be dumb. idk.
    tickDownBonus () {
        // only count down if the bonus > 0 AND the level is still being played.
        if (this.state.timeBonus - this.props.misclicks*100 <= 0) {
            this.setState({
                isTimeOut: true
            })
            return
        }
        if (this.props.isLevelComplete) { return }

        this.setState({
            timeBonus: this.state.timeBonus - 1
        })

        if (this.props.isLevelComplete) { return }

    }


    //TEST FUNCTION: To make sure that we're handling people giving up correctly
    giveUp() {
        console.log("gave up")
    }

    //This actually creates the evidence markers for each level by counting how many are supposed to be in there, and then adding them in by returning it as an HTML div.
    createEvidenceMarkers = (num) => {
        var children = []
        for(let i = 0; i < num; i++){
            children.push(
                <div className={this.props.evidenceFound.length >=i+1 ? "hasFound" : "notFound"} >
                    {i+1}
                </div>
            )
        }
        return children
    }

    //This resets the score and state to the original. Hasta la vista baby!
    resetLevelAndOverlayState = () => {
        this.props.resetLevelState()
        this.setState({
            timeBonus: 3000,
            isTimeOut: false
        })
        
    }

    //This displays the content to the player
    //It checks to see what type of level it is, renders the correct overlay, and once the game is done, renders the end screen. 
    render () {
        let levelType = this.props.level.type;
        // for (let i = 0; i < this.state.evidence.length; i++) {
        //     if (this.state.evidence[i] == true) {
        //         coloring = "hasFound"
        //     }
        // }

        if (levelType == "scamOrNot") {

            return (
                <div className="UI_Parent">
                    <div>
                        <h1 className="prompt">Is the media below a scam?</h1>
                    </div>
                    <div className="flex-container">
                        <div className="top-row">
                            <div>
                                <h3>Level</h3>
                                <h1 className="level">{this.props.level.levelNum}</h1>
                            </div>
                            <div>
                                <h3>Time Bonus</h3>
                                <h1 className="bonus">{!this.state.isTimeOut ? this.state.timeBonus - this.props.misclicks*100 : 0}</h1>
                            </div>
                        </div>
                        <div className="bottom-row">
                            <h3>Scam or Legit?</h3>
                            <div className="scam-buttons">
                                <Button className="btn" onClick={this.props.level.isScam ? this.props.handleCorrect : this.props.handleIncorrect} type="primary" shape="round" size="large" style={{ background: "#D80635", borderColor: "white" }}>SCAM</Button>
                                <Button className="btn" onClick={!this.props.level.isScam ? this.props.handleCorrect : this.props.handleIncorrect} type="primary" shape="round" size="large" style={{ background: "#19bd00", borderColor: "white" }}>LEGIT</Button>
                            </div>
                        </div>
                    </div>
                    <>
                        {this.props.isLevelComplete &&
                            <Level_End 
                                level = {this.props.level} 
                                timeBonus = {!this.state.isTimeOut ? this.state.timeBonus - this.props.misclicks*100 : 0}
                                isCorrect = {this.props.isCorrect}
                                resetLevelAndOverlayState = {this.resetLevelAndOverlayState}
                                lobbyInfo = {this.props.lobbyInfo}
                            />
                        }
                    </>
                </div>
            )

        } else {
            let found = false;
            return (
                <div className="UI_Parent">
                    <div>
                        <h1 className="prompt">This is a scam. Collect all {this.props.level.evidenceAmount} pieces of evidence!</h1>
                    </div>
                    <div className="flex-container">
                        <div className="top-row">
                            <div>
                                <h3>Level</h3>
                                <h1 className="level">{this.props.level.levelNum}</h1>
                            </div>
                            <div>
                                <h3>Time Bonus</h3>
                                <h1 className="bonus">{!this.state.isTimeOut ? this.state.timeBonus - this.props.misclicks*100: 0}</h1>
                            </div>
                        </div>
                        <div className="bottom-row">
                            <h3>Evidence Collected:</h3>
                            <div className="collection-count">
                                {this.createEvidenceMarkers(this.props.level.evidenceAmount)}
                            </div>
                            <div className="giveUpBtnDiv">
                                <Button className="btn" onClick={this.props.handleGiveUp} type="primary" shape="round" size="medium" style={{ background: "#d1a70f", borderColor: "white", marginTop: "10px" }}>Skip Level<CaretRightOutlined /></Button>
                            </div>
                        </div>
                    </div>
                    <>
                        {this.props.isLevelComplete &&
                            <Level_End 
                                level = {this.props.level}
                                timeBonus = {!this.state.isTimeOut ? this.state.timeBonus - this.props.misclicks*100 : 0}
                                isCorrect =  {this.props.isCorrect}
                                numCollected = {this.props.evidenceFound.length}
                                resetLevelAndOverlayState = {this.resetLevelAndOverlayState}
                                lobbyInfo = {this.props.lobbyInfo}
                            />
                        }
                    </>
                </div>
            )

        }
    }
}