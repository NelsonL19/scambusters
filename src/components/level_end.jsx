import React, {Component, useEffect, useState, Suspense} from 'react';
import '../styles/level_end.css'
import { Button } from 'antd';

export default class Level_End extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }

    goToNextLevel() {
        alert("going to next level!")
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
                        <h4 style={{color: 'white', fontStyle: 'italic'}}>Time Bonus</h4>
                        <h2 className="bonusNum">{this.props.info.bonusScore}</h2>
                    </div>
                    <h1 style={{margin: '0', color: 'white'}}>X</h1>
                    <div className="correctBonusDiv">
                        <h4 style={{color: 'white', fontStyle: 'italic'}}>Accuracy Bonus</h4>
                        {this.props.info.isCorrect && 
                            <h2 style={{color: 'gold', margin: '0'}}>2</h2>
                        }
                        {!this.props.info.isCorrect && 
                            <h2 style={{color: 'darkred', margin: '0'}}>0.5</h2>
                        }
                    </div>
                    <h1 style={{margin: '0', color: 'white'}}>=</h1>
                    <div className="totalScoreDiv">
                        <h4 style={{color: 'white', fontStyle: 'italic'}}>Total Score</h4>
                        <h2 className="totalScoreNum">{this.props.info.bonusScore * (this.props.info.isCorrect ? 2 : 0.5)}</h2>
                    </div>
                </div>
                <h2 className="sectionHeader">Leaderboard:</h2>
                <Button className="next_level_btn" onClick={this.goToNextLevel.bind(this)} type="primary" shape="round" size="large" style={{ background: "#00bbbb", borderColor: "white"}}>Next Level</Button>

            </div>
        )
    }
}