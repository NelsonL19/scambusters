import React, {Component, useEffect, useState, Suspense} from 'react';
import {Link} from 'react-router-dom'
import '../styles/level_end.css'
import { Button } from 'antd';

const Level_End = (props) => {

    console.log(props)

    //Calls the load level function with the level that is being selected.
    return (
        <div className="endLevelParent">
            {props.info.isCorrect &&
                <h1 className="endHeader">Correct!</h1>
            }
            {!props.info.isCorrect &&
                <h1 className="endHeader">Incorrect :(</h1>
            }
            <h2 className="sectionHeader">Level score:</h2>
            <div className="scoreCalculation">
                <div className="timeBonusDiv">
                    <h4 style={{color: 'white', fontStyle: 'italic'}}>Time Bonus</h4>
                    <h2 className="bonusNum">{props.info.bonusScore}</h2>
                </div>
                <h1 style={{margin: '0', color: 'white'}}>X</h1>
                <div className="correctBonusDiv">
                    <h4 style={{color: 'white', fontStyle: 'italic'}}>Accuracy Bonus</h4>
                    {props.info.isCorrect && 
                        <h2 style={{color: 'gold', margin: '0'}}>2</h2>
                    }
                    {!props.info.isCorrect && 
                        <h2 style={{color: 'darkred', margin: '0'}}>0.5</h2>
                    }
                </div>
                <h1 style={{margin: '0', color: 'white'}}>=</h1>
                <div className="totalScoreDiv">
                    <h4 style={{color: 'white', fontStyle: 'italic'}}>Total Score</h4>
                    <h2 className="totalScoreNum">{props.info.bonusScore * (props.info.isCorrect ? 2 : 0.5)}</h2>
                </div>
            </div>
            <h2 className="sectionHeader">Leaderboard:</h2>
            <Link to = {`/level${props.info.level.levelNum + 1}`}><Button className="next_level_btn" type="primary" shape="round" size="large" style={{ background: "#00bbbb", borderColor: "white"}}>Next Level</Button></Link>

        </div>
    )
}

export default Level_End