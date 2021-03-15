import React, { Component, useEffect, useState, Suspense } from 'react';
import {useHistory} from 'react-router-dom'
import Browser_Bar from './browser_bar.jsx'
import UI_Overlay from './ui_overlay.jsx'
import './level_prototype.css'

const Level_Prototype = (props) => {

    const [evidenceFound, setEvidenceFound] = useState([])
    const [isLevelComplete, setIsLevelComplete] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [allTooltipsVisible,setAllTooltipsVisible] = useState(false)

    //This function is responsible for taking in the level number, and rendering the level content that is being used for each level.
    const loadLevel = (number) => {
        const Level = React.lazy(() =>
            import(`../pages/level_${number}.js`)
        );
        return Level;
    }

    //event handler for clicking in a clickable region
    const handleCRClick = (evID) => {
        console.log("here")
        setEvidenceFound([...evidenceFound, evID])
    }

    //handle correct selection in scam/no scam levels
    const handleCorrect = () => {
        if(isLevelComplete){
            return
        }
        setIsLevelComplete(true)
        setIsCorrect(true)
        if(props.level.type == "scamOrNot"){
            setAllTooltipsVisible(true)
            setTimeout(() => {
                setAllTooltipsVisible(false)
            }, 3000);
        }

    }

    //handle incorrect selection in scam/no scam levels
    const handleIncorrect = () => {
        if(isLevelComplete){
            return
        }
        setIsLevelComplete(true)
        setIsCorrect(false)  
        if(props.level.type == "scamOrNot"){
            setAllTooltipsVisible(true)
            setTimeout(() => {
                setAllTooltipsVisible(false)
            }, 3000);
        }

    }

    //handle click of "next level" button
    const resetLevelState  = () => {
        setEvidenceFound([])
        setIsCorrect(false)
        setIsLevelComplete(false)
        console.log("triggered")
    }

    useEffect(() => {
        setEvidenceFound([])
    },[props.level])

    const Level = loadLevel(props.level.levelNum)

    return(
        //Calls the load level function with the level that is being selected.
                <div>
                    <div className="minification">
                        <Browser_Bar url={props.level.url} />
                        <Suspense fallback={<div>Loading Level...</div>}>
                            {props.level.type == "scamOrNot" && 
                                <Level 
                                    isLevelComplete = {isLevelComplete} 
                                    isCorrect = {isCorrect}
                                    allTooltipsVisible = {allTooltipsVisible}
                                />}
                            {props.level.type == "evidenceCollect" && <Level handleCRClick = {handleCRClick} evidenceFound = {evidenceFound} isLevelComplete = {isLevelComplete} isCorrect = {isCorrect}/>}
                        </Suspense>
                    </div>
                    <UI_Overlay 
                        level={props.level}
                        evidenceFound = {evidenceFound} 
                        isLevelComplete = {isLevelComplete}
                        isCorrect = {isCorrect}
                        handleCorrect = {handleCorrect}
                        handleIncorrect = {handleIncorrect}
                        resetLevelState = {resetLevelState}
                    />
                </div>
            )
}

export default Level_Prototype;