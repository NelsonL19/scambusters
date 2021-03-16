import React, {Component, useEffect, useState, Suspense} from 'react';
import {Link, useHistory} from 'react-router-dom'
import '../styles/level_end.css'
import { Button } from 'antd';

const Level_End = (props) => {

    const history = useHistory()
    const [showContent, setShowContent] = useState(false)
    const [levelScore, setLevelScore] = useState(0)


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
            console.log(props)
            setShowContent(true)
        }


    })


    //Calls the load level function with the level that is being selected.
    return (
        <>
        {showContent &&
        <div className="endLevelParent">
            {props.isCorrect && props.level.type == "scamOrNot" &&
                <h1 className="endHeaderCorrect">Correct!</h1>
            }
            {props.isCorrect && props.level.type == "evidenceCollect" &&
                <h1 className="endHeaderCorrect">Finished!</h1>
            }
            {!props.isCorrect &&
                <h1 className="endHeaderWrong">Incorrect :(</h1>
            }
            <h2 className="sectionHeader">Level score:</h2>

            {props.level.type === "scamOrNot" &&
            <div className="scoreCalculation">
                <div className="correctBonusDiv">
                    <h4 style={{color: 'white', fontStyle: 'italic'}}>Accuracy</h4>
                    {props.isCorrect && 
                        <h2 style={{color: 'gold', margin: '0'}}>3000</h2>
                    }
                    {!props.isCorrect && 
                        <h2 style={{color: 'darkred', margin: '0'}}>0</h2>
                    }
                </div>
                <h1 className="mathSymbol">+</h1>
                <div className="timeBonusDiv">
                    <h4 style={{color: 'white', fontStyle: 'italic'}}>Time</h4>
                    <h2 className="bonusNum">{props.bonusScore}</h2>
                </div>
                <h1 className="mathSymbol">=</h1>
                <div className="levelScoreDiv">
                    <h4 style={{color: 'white', fontStyle: 'italic'}}>Level Score</h4>
                    <h2 className="levelScoreNum">{props.bonusScore + (props.isCorrect ? 3000 : 0)}</h2>
                </div>
            </div>            
            }

            {props.level.type === "evidenceCollect" &&
                <div className="scoreCalculation">
                    <div className="numberDiv">
                        <h4 style={{color: 'white', fontStyle: 'italic'}}># Collected</h4>
                        <h2 style={{color: 'gold', margin: '0'}}>{props.numCollected}</h2>
                    </div>
                    <h1 className="mathSymbol">X</h1>
                    <div className="numberDiv">
                        <h4 style={{color: 'white', fontStyle: 'italic'}}>Value</h4>
                        <h2 className="bonusNum">3000</h2>
                    </div>
                    <h1 className="mathSymbol">+</h1>
                    <div className="numberDiv">
                        <h4 style={{color: 'white', fontStyle: 'italic'}}>Time</h4>
                        <h2 className="bonusNum">{props.bonusScore}</h2>
                    </div>
                    <h1 className="mathSymbol">=</h1>
                    <div className="levelScoreDiv">
                        <h4 style={{color: 'white', fontStyle: 'italic'}}>Level Score</h4>
                        <h2 className="levelScoreNum">{props.numCollected * 3000 + props.bonusScore}</h2>
                    </div>
                </div>  
            }
            <h2 className="sectionHeader">Total Score:</h2>
            <div className="totalScoreCalculation">
                <div className="totalScoreRow">
                    <div className="numberDiv">
                        <h4 style={{color: 'white', fontStyle: 'italic'}}>Previous Score</h4>
                        <h2 style={{color: 'white', margin: '0'}}>0</h2>
                    </div>
                    <h1 className="mathSymbol">+</h1>
                    <div className="numberDiv">
                        <h4 style={{color: 'white', fontStyle: 'italic'}}>Level Score</h4>
                        {props.level.type === "evidenceCollect" &&
                            <h2 className="bonusNum">{props.numCollected * 3000 + props.bonusScore}</h2>
                        }
                        {props.level.type === "scamOrNot" &&
                            <h2 className="bonusNum">{props.bonusScore + (props.isCorrect ? 3000 : 0)}</h2>
                        }
                    </div>
                </div>
                <div>
                    {props.level.type === "evidenceCollect" &&
                        <h2 className="totalScoreNum">{0 + (props.numCollected * 3000 + props.bonusScore)}</h2>
                    }
                    {props.level.type === "scamOrNot" &&
                        <h2 className="totalScoreNum">{props.bonusScore + (props.isCorrect ? 3000 : 0)}</h2>
                    }
                </div>
            </div>
            <Button className="next_level_btn" type="primary" shape="round" size="large" style={{ background: "#00bbbb", borderColor: "white"}}  onClick = {handleNextLevelClick}>Next Level</Button>

        </div>}
        </>
    )
}

export default Level_End