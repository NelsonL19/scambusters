import '../styles/puppy_site.css'
import {Clickable_Region} from '../components'
import React, { Component, useEffect, useState, Suspense } from 'react';
import { Tooltip, Button, Input, Form } from 'antd';
import p_husky from '../assets/puppy-2.png' 
import p_mix from '../assets/puppy-1.jpg' 
import p_pug from '../assets/puppy-3.jpg' 
import p_dach from '../assets/puppy-4.jpg' 
import bbb_fake from '../assets/bbbfake.png' 



const Puppy_Site = (props) => {

    const [buySecondsLeft, setBuySecondsLeft ] =  useState(899);
    console.log(props.allTooltipsVisible)


    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (buySecondsLeft > 0) {
                setBuySecondsLeft(buySecondsLeft - 1);
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
        };
    });
    

    const formSecondsLeft = (sec) => {
        var min = ~~(sec/60)
        var secLeft = sec - min*60
        if (secLeft < 10){
            secLeft = "0" + sec.toString()
        }
        if(min < 10){
            min = "0" + min.toString()
        }

        return `00:${min}:${secLeft}`
    }


    return (
        <div className="div_god">
            <div className="puppySection">
                <div className="puppyRow">
                    <div className="puppyBlock">
                        <img className="puppyPic" src={p_husky} alt="Husky Puppy"/>
                        <h1 className="tight"><b>Cece</b></h1>
                        <h3 className="tight">Breed: Husky</h3>
                        <h3 className="tight">Color: B&W</h3>
                        <h3 className="tight">Sex: Female</h3>
                        <h3 className="tight">Price: $600</h3>
                        <Button className="btn" type="primary" shape="round" size="large" style={{ background: "#36b023", borderColor: "white", width: "80%", margin: "5px" }}>Adopt</Button>

                    </div>
                    <div className="puppyBlock">
                        <img className="puppyPic" src={p_mix} alt="Mixed Puppy"/>
                        <h1 className="tight"><b>Abby</b></h1>
                        <h3 className="tight">Breed: Mix</h3>
                        <h3 className="tight">Color: Gold</h3>
                        <h3 className="tight">Sex: Female</h3>
                        <h3 className="tight">Price: $300</h3>
                        <Button className="btn" type="primary" shape="round" size="large" style={{ background: "#36b023", borderColor: "white", width: "80%", margin: "5px" }}>Adopt</Button>
                    </div>
                </div>
                <div className="puppyRow">
                    <div className="puppyBlock">
                        <img className="puppyPic" src={p_pug} alt="Pug Puppy"/>
                        <h1 className="tight"><b>Buddy</b></h1>
                        <h3 className="tight">Breed: Pug</h3>
                        <h3 className="tight">Color: B&W</h3>
                        <h3 className="tight">Sex: Male</h3>
                        <h3 className="tight">Price: $500</h3>
                        <Button className="btn" type="primary" shape="round" size="large" style={{ background: "#36b023", borderColor: "white", width: "80%", margin: "5px" }}>Adopt</Button>
                    </div>
                    <div className="puppyBlock">
                        <img className="puppyPic" src={p_dach} alt="Dachshund Puppy"/>
                        <h1 className="tight"><b>Maxwell</b></h1>
                        <h3 className="tight">Breed: Dachshund</h3>
                        <h3 className="tight">Color: Brown</h3>
                        <h3 className="tight">Sex: Male</h3>
                        <h3 className="tight">Price: $600</h3>
                        <Button className="btn" type="primary" shape="round" size="large" style={{ background: "#36b023", borderColor: "white", width: "80%", margin: "5px" }}>Adopt</Button>
                    </div>
                </div>
            </div>
            <div className="applicationSection">
                <Tooltip title={"Spelling mistake"} trigger={[]} visible={props.evidenceFound.includes(4)} placement='top'>
                        <Clickable_Region className="normal" handleCRClick={props.handleCRClick} evID={4} found={props.evidenceFound.includes(4)} content={<h1 className="appHeader">Fill out your apication!</h1>}/>
                </Tooltip>
                <div style={{display: "flex", width: '50%'}}>
                    <input className="pup-input" placeholder="First Name"></input>
                    <input className="pup-input" placeholder="Last Name"></input>
                </div>
                <div style={{display: "flex", width: '50%'}}>
                    <input className="pup-input" placeholder="Street Address"></input>
                </div>
                <div style={{display: "flex", width: '50%'}}>
                    <input className="pup-input" placeholder="City"></input>
                    <input className="pup-input" placeholder="Zip Code"></input>
                    <input className="pup-input" placeholder="State"></input>
                </div>
                <Tooltip title={"Suspicious, unprofessional email address"} trigger={[]} visible={props.evidenceFound.includes(1)} placement='left'>
                        <Clickable_Region className="normal" handleCRClick={props.handleCRClick} evID={1} found={props.evidenceFound.includes(1)} content={<p>Contact us: <i>puppy-adopt-nearby@hotmail.com</i></p>}/>
                </Tooltip>
                <Button className="btn" type="primary" shape="round" size="large" style={{ background: "#36b023", borderColor: "white", width: "80%", margin: "10px", marginBottom: "30px" }}>Submit Application</Button>
                <div className="bottomDiv">
                    <div style={{display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                        <h1 className="appHeader">Time Left to Adopt:</h1>
                        <Tooltip title={"Forcing people to act quickly without thinking"} trigger={[]} visible={props.evidenceFound.includes(2)} placement='left'>
                            <Clickable_Region className="normal" handleCRClick={props.handleCRClick} evID={2} found={props.evidenceFound.includes(2)} content={<h1 className="timerTicker">{formSecondsLeft(buySecondsLeft)}</h1>}/>
                        </Tooltip>
                    </div>
                    <Tooltip title={"This image was just pulled from online! It doesn't necessarily mean this website is safe"} trigger={[]} visible={props.evidenceFound.includes(3)} placement='bottom'>
                        <Clickable_Region className="normal" handleCRClick={props.handleCRClick} evID={3} found={props.evidenceFound.includes(3)} content={<img className="bbbPic" src={bbb_fake} alt="BBB Logo"/>}/>
                    </Tooltip>
                    
                </div>
            </div>
        </div>
        
    )

}

export default Puppy_Site