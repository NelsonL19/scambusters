import React, { Component, useEffect, useState, Suspense } from 'react';
import { useHistory } from 'react-router-dom'
import Browser_Bar from './browser_bar.jsx'
import UI_Overlay from './ui_overlay.jsx'
import './level_prototype.css'
import ReactAudioPlayer from 'react-audio-player';
import elevatorMusic from '../assets/leopard-print-elevator-by-kevin-macleod-from-filmmusic-io.mp3'
import misclickSFX from '../assets/ComputerError.mp3'
import rightSFX from '../assets/smsAlert.mp3'
import correctSound from '../assets/winNotification.wav'
import incorrectSound from '../assets/failure.wav'




const Level_Prototype = (props) => {
    const [evidenceFound, setEvidenceFound] = useState([])
    const [isLevelComplete, setIsLevelComplete] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [allTooltipsVisible, setAllTooltipsVisible] = useState(false)
    const [misclicks, setMisclicks] = useState(0)
    //This function is responsible for taking in the level number, and rendering the level content that is being used for each level.

    const loadLevel = (number) => {
        const Level = React.lazy(() =>
            import(`../pages/level_${number}.js`)
        );
        return Level;
    }

    //event handler for clicking in a clickable region
    const handleCRClick = (evID) => {

        if(props.settings.soundToggle){
            let correctFX = new Audio(rightSFX);
            correctFX.volume = props.settings.soundVolume/100
            correctFX.play();
        }

        setEvidenceFound([...evidenceFound, evID])
    }

    const handleMisclick = (e) => {
        if (props.level.type == "scamOrNot") {
            return
        }

        e.stopPropagation()

        const circle = document.querySelector(".misclick-circle")
        const bonus = document.querySelector(".bonus")
        circle.style.left = (e.clientX - 20) + "px";
        circle.style.top = (e.clientY - 20) + "px";
        circle.classList.add("visible")
        bonus.classList.add('red-flash')
        if(props.settings.soundToggle){
            let soundFX = new Audio(misclickSFX);
            soundFX.volume = props.settings.soundVolume/100
            soundFX.play();
        }
        setTimeout(() => {
            circle.classList.remove("visible")
            bonus.classList.remove("red-flash")

        }, 250)



        setMisclicks(misclicks + 1)
    }

    //handle correct selection in scam/no scam levels
    const handleCorrect = () => {
        if (isLevelComplete) {
            return
        }
        if(props.settings.soundToggle){
            let winSound = new Audio(correctSound);
            winSound.volume = props.settings.soundVolume/100
            winSound.play();
        }
        setIsLevelComplete(true)
        setIsCorrect(true)
        if (props.level.type == "scamOrNot") {
            setAllTooltipsVisible(true)
            setTimeout(() => {
                setAllTooltipsVisible(false)
            }, 3000);
        }

    }

    //handle incorrect selection in scam/no scam levels
    const handleIncorrect = () => {
        if (isLevelComplete) {
            return
        }
        if(props.settings.soundToggle){
            let loseSound = new Audio(incorrectSound);
            loseSound.volume = props.settings.soundVolume/100
            loseSound.play();
        }
        setIsLevelComplete(true)
        setIsCorrect(false)
        if (props.level.type == "scamOrNot") {
            setAllTooltipsVisible(true)
            setTimeout(() => {
                setAllTooltipsVisible(false)
            }, 3000);
        }

    }

    //handle click of "next level" button
    const resetLevelState = () => {
        setEvidenceFound([])
        setIsCorrect(false)
        setIsLevelComplete(false)
        console.log("triggered")
    }

    useEffect(() => {
        setEvidenceFound([])
    }, [props.level])

    const getFontSize = () =>{
        switch(props.settings.fontSize){
            case "sm":
                return "12px"
            case "md":
                return "16px"
            case "lg":
                return "20px"
        }
    }

    const Level = loadLevel(props.level.levelNum)

    return (
        //Calls the load level function with the level that is being selected.
        <div style = {{fontSize: getFontSize()}}>

            {props.settings.musicToggle && 
                <ReactAudioPlayer
                    src={elevatorMusic}
                    autoPlay={true}
                    loop={true}
                    volume={(props.settings.musicVolume/100) * 0.5}
                />
            }
            <div className="minification" onClick={(e) => handleMisclick(e)}>
                <Browser_Bar url={props.level.url} />
                <Suspense fallback={<div>Loading Level...</div>}>
                    {props.level.type == "scamOrNot" &&
                        <Level
                            isLevelComplete={isLevelComplete}
                            isCorrect={isCorrect}
                            allTooltipsVisible={allTooltipsVisible}
                        />}
                    {props.level.type == "evidenceCollect" &&
                        <Level
                            handleCRClick={handleCRClick}
                            evidenceFound={evidenceFound}
                            isLevelComplete={isLevelComplete}
                            isCorrect={isCorrect}
                        />}
                </Suspense>
            </div>
            <UI_Overlay
                level={props.level}
                evidenceFound={evidenceFound}
                isLevelComplete={isLevelComplete}
                isCorrect={isCorrect}
                handleCorrect={handleCorrect}
                handleIncorrect={handleIncorrect}
                resetLevelState={resetLevelState}
                misclicks={misclicks}
                lobbyInfo={{ user: props.location.state.user, pass: props.location.state.pass }}
            />
            <div className="misclick-circle"></div>
        </div>
    )
}

export default Level_Prototype;