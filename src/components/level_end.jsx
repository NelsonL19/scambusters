import React, {Component, useEffect, useState, Suspense} from 'react';
import '../styles/level_end.css'

export default class Level_End extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }

    render(){
        //Calls the load level function with the level that is being selected.
        return (
            <div className="endLevelParent">
                {this.props.info.isCorrect &&
                    <h1 className="endHeader">Correct!</h1>
                }
                {!this.props.info.isCorrect &&
                    <h1 className="endHeader">Incorrect :(</h1>
                }
                <h2 className="sectionHeader">Level score:</h2>
                <div className="scoreCalculation">
                    <div className="timeBonusDiv">
                        <h4>Time Bonus</h4>
                        <h2>{this.props.info.bonusScore}</h2>
                    </div>
                    <h1>X</h1>
                    <div className="correctBonusDiv">
                        <h4>Accuracy Bonus</h4>
                        {this.props.info.isCorrect && 
                            <h2>2</h2>
                        }
                        {!this.props.info.isCorrect && 
                            <h2>0.5</h2>
                        }
                    </div>
                    <h1>=</h1>
                    <div className="totalScoreDiv">
                        <h4>Total Score</h4>
                        <h2>{this.props.info.bonusScore * (this.props.info.isCorrect ? 2 : 0.5)}</h2>
                    </div>
                </div>
                <h2 className="sectionHeader">Leaderboard:</h2>

            </div>
        )
    }
}