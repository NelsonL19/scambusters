import {useState} from 'react'
import '../styles/clickable_region.css'

const Clickable_Region = (props) =>{

    const handleClick = (e) => {
        e.stopPropagation();
        if(!props.found && !props.isLevelComplete){
            props.handleCRClick(props.evID)
        }
    } 

    //This inserts a clickable region into the game, and handles the resulting code when it's clicked and found/not found
    return (

        <div className = {`clickable-region ${props.found ? "found" : ""}`} onClick = {(e) => handleClick(e)}>
            {props.content}
        </div>
    
    
    )
} 

export default Clickable_Region