import '../styles/iphone_text.css'
import iphone from '../assets/iphone_blank.png' 
import {Clickable_Region} from '../components'
import { Tooltip } from 'antd';


const Iphone_Text = (props) => {

    const test = (e) => {
        console.log(e.target)
        console.log(e.currentTarget)
    }


    return (
        <div className="div_god">
            <img className="iphone_img" src={iphone} alt="iphone"/>
            <div className="phoneNumberDiv">
                <p className="phoneNumberText">
                    <Tooltip title = {"Random unknown phone number"} trigger = {[]} visible = {props.evidenceFound.includes(2)} placement = 'top'>
                        <Clickable_Region handleCRClick = {props.handleCRClick} evID = {2} found = {props.evidenceFound.includes(2)} content = "+1 (804) 540-6813"/>
                    </Tooltip> 
                </p>
            </div>
            <div className="messageDiv">
                <p className="imessageText">
                    USPS Update: Azlan, Package with tracking number&nbsp;                     
                    <Tooltip title = {"This is not what a USPS Tracking Number looks like"} trigger = {[]} visible = {props.evidenceFound.includes(0)} placement = 'left'>
                        <Clickable_Region handleCRClick = {props.handleCRClick} evID = {0} found = {props.evidenceFound.includes(0)} content = "ID-IW8476"/>
                    </Tooltip> 
                    &nbsp;is pending delivery in our warehouse.
                </p>
            </div>
            <div className="messageDiv2">
                <p className="imessageText">
                    To avoid additional fees, please confirm delivery time:&nbsp; 
                    <Tooltip title = {"Suspicious, unofficial URL"} trigger = {[]} visible = {props.evidenceFound.includes(1)} placement = 'bottom'>
                        <Clickable_Region handleCRClick = {props.handleCRClick} evID = {1} found = {props.evidenceFound.includes(1)} content = "xb15r.com/Sb91xj2Y"/>
                    </Tooltip> 
                </p>
            </div>
        </div>

        
    )
}
export default Iphone_Text