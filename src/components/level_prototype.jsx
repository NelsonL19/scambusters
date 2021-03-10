import React, { Component, useEffect, useState, Suspense } from 'react';
import {useHistory} from 'react-router-dom'
import Browser_Bar from './browser_bar.jsx'
import UI_Overlay from './ui_overlay.jsx'
import './level_prototype.css'

const Level_Prototype = (props) => {

    const [evidenceFound, setEvidenceFound] = useState([])

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
                            {props.level.type == "scamOrNot" && <Level/>}
                            {props.level.type == "evidenceCollect" && <Level handleCRClick = {handleCRClick} evidenceFound = {evidenceFound}/>}
                        </Suspense>
                    </div>
                    <UI_Overlay level={props.level} evidenceAmount = {props.level.evidenceAmount} evidenceFound = {evidenceFound} />
                </div>
            )
}

export default Level_Prototype;