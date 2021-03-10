import {useState} from 'react'
import '../styles/clickable_region.css'

const Clickable_Region = (props) =>{

    const handleClick = (e) => {
        if(!props.found){
            props.handleCRClick(props.evID)
        }
    } 


    return (

        <div className = {`clickable-region ${props.found ? "found" : ""}`} onClick = {(e) => handleClick(e)}>
            {props.content}
        </div>
    
    
    )
} 

export default Clickable_Region