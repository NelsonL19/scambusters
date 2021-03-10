import React, {Component, useEffect, useState} from 'react';
import { Button } from 'antd';
import Level_End from './level_end.jsx'
import '../styles/ui_overlay.css'

export default class UI_Overlay extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null,
            level: this.props.level,
            bonusScore: 3000,
            isLevelComplete: false,
            isCorrect: false
        }
    }

    componentDidMount() {
        this.bonusTimerID = setInterval(
            () => this.tickDownBonus(), 10
        )

    }

    componentWillUnmount() {
        clearInterval(this.bonusTimerID)
    }

    tickDownBonus(){
        // only count down if the bonus > 0 AND the level is still being played.
        if(this.state.bonusScore <= 0 || this.state.isLevelComplete) {return}

        this.setState({
            bonusScore: this.state.bonusScore - 1
        })

        if (this.state.isLevelComplete) {return}
    }

    scamPressed(){
        // make sure the level is not already done!
        if (this.state.isLevelComplete) {return}

        if(this.props.level.isScam){
            // Correct!
            this.setState({isLevelComplete: true, isCorrect: true})
        }
        else{
            // Incorrect
            this.setState({isLevelComplete: true, isCorrect: false})
        }
    }

    legitPressed(){
        // make sure the level is not already done!
        if (this.state.isLevelComplete) {return}

        if(this.props.level.isScam){
            // Incorrect
            this.setState({isLevelComplete: true, isCorrect: false})
        }
        else{
            // Correct!
            this.setState({isLevelComplete: true, isCorrect: true})

        }
    }



    render(){
        let levelType = this.props.level.type;

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
                            <Button className="btn" onClick={this.scamPressed.bind(this)} type="primary" shape="round" size="large" style={{ background: "#D80635", borderColor: "white"}}>SCAM</Button>
                            <Button className="btn" onClick={this.legitPressed.bind(this)} type="primary" shape="round" size="large" style={{ background: "#01F59C", borderColor: "white"}}>LEGIT</Button>
                        </div>
                    </div>
                </div>
                <>
                {this.state.isLevelComplete &&
                    <Level_End info={this.state}/>
                }
                </>
            </div>
        )

            } else {

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
                                <tr>
                                <th class = "hasFound">1</th>
                                <th class = "notFound">2</th>
                                <th class = "notFound">3</th>
                                <th class = "notFound">4</th>
                                <th class = "notFound">5</th>
                                </tr>
                                </table>
                        </div>
                        </div>
                </div>
                <>
                {this.state.isLevelComplete &&
                    <Level_End info={this.state}/>
                }
                </>
            </div>
        )

            }
    }
}