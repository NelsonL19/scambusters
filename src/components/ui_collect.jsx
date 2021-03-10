import React, { Component, useEffect, useState } from 'react';
import { Button } from 'antd';
import '../styles/ui_overlay.css'
import Level_End from './level_end.jsx'

export default class UI_Collect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            level: this.props.level,
            bonusScore: 3000,
            isLevelComplete: false,
            isCorrect: false
        }
    }

    componentDidMount () {
        this.bonusTimerID = setInterval(
            () => this.tickDownBonus(), 10
        )
    }

    componentWillUnmount () {
        clearInterval(this.bonusTimerID)
    }


    tickDownBonus () {
        // only count down if the bonus > 0 AND the level is still being played.
        if (this.state.bonusScore <= 0 || this.state.isLevelComplete) { return }

        this.setState({
            bonusScore: this.state.bonusScore - 1
        })
    }

    checkIfDone () {
        // make sure the level is not already done!
        if (this.state.isLevelComplete) { return }
    }

    render () {
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
                            <table>
                                <tr>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                </tr>
                                </table>
                        </div>
                        </div>
                    </div>

                    <>
                        {this.state.isLevelComplete &&
                            <Level_End info={this.state} />
                        }
                    </>

                </div>
        )
    }
}