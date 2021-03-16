import React, { Component, useEffect, useState } from 'react';
import { Button } from 'antd';
import Level_End from './level_end.jsx'
import '../styles/ui_overlay.css'

export default class UI_Overlay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            bonusScore: 3000,
            isLevelComplete: false,
            isCorrect: false,
        }
    }


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

    componentWillUnmount () {
        clearInterval(this.bonusTimerID)
    }

    tickDownBonus () {
        // only count down if the bonus > 0 AND the level is still being played.
        if (this.state.bonusScore <= 0 || this.props.isLevelComplete) { return }

        this.setState({
            bonusScore: this.state.bonusScore - 1
        })

        if (this.props.isLevelComplete) { return }
    }

    scamPressed () {
        // // make sure the level is not already done!
        // if (this.state.isLevelComplete) { return }

        // if (this.props.level.isScam) {
        //     // Correct!
        //     this.setState({ isLevelComplete: true, isCorrect: true })
        // }
        // else {
        //     // Incorrect
        //     this.setState({ isLevelComplete: true, isCorrect: false })
        // }
    }



    legitPressed () {
        // // make sure the level is not already done!
        // if (this.state.isLevelComplete) { return }

        // if (this.props.level.isScam) {
        //     // Incorrect
        //     this.setState({ isLevelComplete: true, isCorrect: false })
        // }
        // else {
        //     // Correct!
        //     this.setState({ isLevelComplete: true, isCorrect: true })

        // }
    }

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
                    <div className="flex-container">
                        <div className="top-row">
                            <div>
                                <h3>Level</h3>
                                <h1 className="level">{this.props.level.levelNum}</h1>
                            </div>
                            <div>
                                <h3>Time Bonus</h3>
                                <h1 className="bonus">{this.state.bonusScore}</h1>
                            </div>
                        </div>
                        <div className="bottom-row">
                            <h3>Scam or Legit?</h3>
                            <div className="scam-buttons">
                                <Button className="btn" onClick={this.props.handleCorrect} type="primary" shape="round" size="large" style={{ background: "#D80635", borderColor: "white" }}>SCAM</Button>
                                <Button className="btn" onClick={this.props.handleIncorrect} type="primary" shape="round" size="large" style={{ background: "#01F59C", borderColor: "white" }}>LEGIT</Button>
                            </div>
                        </div>
                    </div>
                    <>
                        {this.props.isLevelComplete &&
                            <Level_End 
                            level = {this.props.level} 
                            bonusScore = {this.state.bonusScore}
                            isCorrect = {this.props.isCorrect}
                            resetLevelState = {this.props.resetLevelState}
                            />
                        }
                    </>
                </div>
            )

        } else {
            let found = false;
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
                                <h1 className="bonus">{this.state.bonusScore}</h1>
                            </div>
                        </div>
                        <div className="bottom-row">
                            <h3>Evidence Collected:</h3>
                            <div className="collection-count">
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <th className= {this.props.evidenceFound.length >=1 ? "hasFound" : "notFound"}>1</th>
                                            <th className= {this.props.evidenceFound.length >=2 ? "hasFound" : "notFound"}>2</th>
                                            {/* <th className={coloring}>2</th>
                                            <th className={coloring}>3</th>
                                            <th className={coloring}>4</th>
                                            <th className={coloring}>5</th> */}
                                        </tr>
                                    </tbody>
                                    <tfoot></tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                    <>
                        {this.props.isLevelComplete &&
                            <Level_End 
                                level = {this.props.level}
                                bonusScore = {this.state.bonusScore}
                                isCorrect =  {this.props.isCorrect}
                                resetLevelState = {this.props.resetLevelState}
                            />
                        }
                    </>
                </div>
            )

        }
    }
}