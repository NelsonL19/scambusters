import React, { Component, useEffect, useState, Suspense } from 'react';
import { Link, useHistory } from 'react-router-dom'
import '../styles/level_end.css'
import { firebase } from '../firebase-config/config'
import { Button } from 'antd';

const Level_End = (props) => {

    const history = useHistory()
    const db = firebase.firestore()
    const [showContent, setShowContent] = useState(false)
    const [pastScore, setPastScore] = useState(0)
    const [totalScore, setTotalScore] = useState(props.level.type == "scamOrNot" ?
        props.timeBonus + (props.isCorrect ? 3000 : 0)
        :
        props.numCollected * 3000 + props.timeBonus
    )



    //resets level state and redirects to next level
    //TODO if Time Allows: Pass in length of array, if levelnum = length, go to gameend
    //Current Status: Checks if it's at level 8, the current final level, and if it is, next screen is end screen.
    //If the game is offline, this is also where the current score is fowarded to the next one.
    const handleNextLevelClick = () => {
        updatePastScore()
        let failed = props.lobbyInfo.hasFailed;
        if (!props.isCorrect) {
            failed = true;
            console.log("test");
        }
        props.resetLevelAndOverlayState()
        if (props.level.levelNum == 8) {
            history.push({ pathname: "/game_end", state: { score: pastScore + totalScore, pass: props.lobbyInfo.pass, hasFailed: failed }})
        } else {
            history.push({ pathname: `/level${props.level.levelNum + 1}`, state: { user: props.lobbyInfo.user, pass: props.lobbyInfo.pass, connection: props.lobbyInfo.connection, offlineScore: totalScore + pastScore, hasFailed: failed} })
        }
    }

    //This checks to see if the level is a scam or not, then sets the timer for the level. 
    useEffect(() => {
        const waitTimer = setTimeout(() => {
            setShowContent(true)
        }, 2200)

    })

    const updatePastScore = () => {
        setPastScore(pastScore + totalScore)
    }

    //This function is what updates our leaderboards internally and in Firebase. 
    //If the game is online, it'll get the scores from Firebase, then Push the new score to Firebase.
    //If the game is offline, it'll set the past score internally only.
    useEffect(() => {
        if (props.lobbyInfo.connection == true) {
            db.collection("lobbies").doc(props.lobbyInfo.pass).get().then((doc) => {
                console.log(doc.data())
                db.collection("lobbies").doc(props.lobbyInfo.pass).update({
                    [props.lobbyInfo.user]: totalScore + doc.data()[props.lobbyInfo.user]
                })
                setPastScore(doc.data()[props.lobbyInfo.user])

            })
        } else {
            setPastScore(props.lobbyInfo.offlineScore)
        }
    }, [])

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
                            <div className="numberDiv">
                                <h4 style={{ color: 'white', fontStyle: 'italic' }}>Accuracy</h4>
                                {props.isCorrect &&
                                    <h2 style={{ color: 'gold', margin: '0' }}>3000</h2>
                                }
                                {!props.isCorrect &&
                                    <h2 style={{ color: 'darkred', margin: '0' }}>0</h2>
                                }
                            </div>
                            <h1 className="mathSymbol">+</h1>
                            <div className="numberDiv">
                                <h4 style={{ color: 'white', fontStyle: 'italic' }}>Time</h4>
                                <h2 className="bonusNum">{props.timeBonus}</h2>
                            </div>
                            <h1 className="mathSymbol">=</h1>
                            <div className="levelScoreDiv">
                                <h4 style={{ color: 'white', fontStyle: 'italic' }}>Level Score</h4>
                                <h2 className="levelScoreNum">{props.timeBonus + (props.isCorrect ? 3000 : 0)}</h2>
                            </div>
                        </div>
                    }

                    {props.level.type === "evidenceCollect" &&
                        <div className="scoreCalculation">
                            <div className="numberDiv">
                                <h4 style={{ color: 'white', fontStyle: 'italic' }}># Collected</h4>
                                <h2 style={{ color: 'gold', margin: '0' }}>{props.numCollected}</h2>
                            </div>
                            <h1 className="mathSymbol">X</h1>
                            <div className="numberDiv">
                                <h4 style={{ color: 'white', fontStyle: 'italic' }}>Value</h4>
                                <h2 className="bonusNum">3000</h2>
                            </div>
                            <h1 className="mathSymbol">+</h1>
                            <div className="numberDiv">
                                <h4 style={{ color: 'white', fontStyle: 'italic' }}>Time</h4>
                                <h2 className="bonusNum">{props.timeBonus}</h2>
                            </div>
                            <h1 className="mathSymbol">=</h1>
                            <div className="levelScoreDiv">
                                <h4 style={{ color: 'white', fontStyle: 'italic' }}>Level Score</h4>
                                <h2 className="levelScoreNum">{totalScore}</h2>
                            </div>
                        </div>
                    }
                    <h2 className="sectionHeader">Total Score:</h2>
                    <div className="totalScoreCalculation">
                        <div className="totalScoreRow">
                            <div className="numberDiv">
                                <h4 style={{ color: 'white', fontStyle: 'italic' }}>Previous Score</h4>
                                <h2 style={{ color: 'white', margin: '0' }}>{pastScore}</h2>
                            </div>
                            <h1 className="mathSymbol">+</h1>
                            <div className="numberDiv">
                                <h4 style={{ color: 'white', fontStyle: 'italic' }}>Level Score</h4>
                                {props.level.type === "evidenceCollect" &&
                                    <h2 className="bonusNum">{totalScore}</h2>
                                }
                                {props.level.type === "scamOrNot" &&
                                    <h2 className="bonusNum">{totalScore}</h2>
                                }
                            </div>
                        </div>
                        <div>
                            {props.level.type === "evidenceCollect" &&
                                <h2 className="totalScoreNum">{pastScore + totalScore}</h2>
                            }
                            {props.level.type === "scamOrNot" &&
                                <h2 className="totalScoreNum">{pastScore + totalScore}</h2>
                            }
                        </div>
                    </div>
                    <Button className="next_level_btn" type="primary" shape="round" size="large" style={{ background: "#00bbbb", borderColor: "white" }} onClick={handleNextLevelClick}>Next Level</Button>

                </div>}
        </>
    )
}

export default Level_End