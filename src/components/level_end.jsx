import React, {Component, useEffect, useState, Suspense} from 'react';
import {Link, useHistory} from 'react-router-dom'
import '../styles/level_end.css'
import { Button } from 'antd';

const Level_End = (props) => {

    const history = useHistory()
    const [showContent, setShowContent] = useState(false)


    //resets level state and redirects to next level
    const handleNextLevelClick = () => {
        props.resetLevelState()
        history.push(`/level${props.level.levelNum + 1}`)
    }

    useEffect(() => {
        if(props.level.type == "scamOrNot"){
            const waitTimer = setTimeout(() => {
                setShowContent(true)
            },3000)
        }
        else{
            setShowContent(true)
        }


    })


    //Calls the load level function with the level that is being selected.
    return (
        <>
        {showContent &&
        <div className="endLevelParent">
            {props.isCorrect &&
                <h1 className="endHeader">Correct!</h1>
            }
            {!props.isCorrect &&
                <h1 className="endHeader">Incorrect :(</h1>
            }
            <h2 className="sectionHeader">Level score:</h2>
            <div className="scoreCalculation">
                <div className="timeBonusDiv">
                    <h4 style={{color: 'white', fontStyle: 'italic'}}>Time Bonus</h4>
                    <h2 className="bonusNum">{props.bonusScore}</h2>
                </div>
                <h1 style={{margin: '0', color: 'white'}}>X</h1>
                <div className="correctBonusDiv">
                    <h4 style={{color: 'white', fontStyle: 'italic'}}>Accuracy Bonus</h4>
                    {props.isCorrect && 
                        <h2 style={{color: 'gold', margin: '0'}}>2</h2>
                    }
                    {!props.isCorrect && 
                        <h2 style={{color: 'darkred', margin: '0'}}>0.5</h2>
                    }
                </div>
                <h1 style={{margin: '0', color: 'white'}}>=</h1>
                <div className="totalScoreDiv">
                    <h4 style={{color: 'white', fontStyle: 'italic'}}>Total Score</h4>
                    <h2 className="totalScoreNum">{props.bonusScore * (props.isCorrect ? 2 : 0.5)}</h2>
                </div>
            </div>
            <h2 className="sectionHeader">Leaderboard:</h2>
            <Button className="next_level_btn" type="primary" shape="round" size="large" style={{ background: "#00bbbb", borderColor: "white"}}  onClick = {handleNextLevelClick}>Next Level</Button>

        </div>}
        </>
    )
}

export default Level_End