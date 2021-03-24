import {Clickable_Region} from '../components'
import { Tooltip } from 'antd';


const Iphone_Text = (props) => {

    const test = (e) => {
        console.log(e.target)
        console.log(e.currentTarget)
    }


    return (
        <div className="flex-container" id ="flexApple"  >
            <div className="mailBox">
                <button id="compose">Compose</button>
                <button>Inbox</button>
                <button>Starred</button>
                <button>Sent</button>
                <button>Drafts</button>
                <button>Junk</button>
            </div>
    
            <div className="message">
                <h1 className="emailName">Update Your Account Information</h1>
                <p className="sender">
                    <Tooltip title = {"The capitalization in the sender's name is incorrect"} trigger = {[]} visible = {props.evidenceFound.includes(0)} placement = 'top'>
                        <Clickable_Region handleCRClick = {props.handleCRClick} evID = {0} found = {props.evidenceFound.includes(0)} content = "apple.Inc"/>
                    </Tooltip>
                    - 
                    <Tooltip title = {"This email address doesn't seem like an Apple company email address"} trigger = {[]} visible = {props.evidenceFound.includes(1)} placement = 'bottom'>
                        <Clickable_Region handleCRClick = {props.handleCRClick} evID = {1} found = {props.evidenceFound.includes(1)} content = "Update.account.confirmed@altervista.org"/> 
                    </Tooltip>
                </p>
                <p>to me</p>
                <img className="logo" src={logo} alt="AppleMusic" width="128" height="32"/>
                <br/>
                <br/>
                <p>Dear Apple Music Customer!
                <br/>
                <br/>
                Your Apple Music account has been frozen because we are unable to validate your
                account information. Once you have updated your account records, we will try again
                to validate your information and your account suspension will be lifted. This will help
                protect your account in the future. This process does not take more than 3 minutes.
                To proceed to confirm your account details, please click on the link and follow the
                instructions. </p>
                <button>Get Started</button>
                <p>If you need any assistance, go to our Help by left clicking the Help link located in the upper 
                    right-hand corner of any Apple page. 
                    <br/>
                    <br/>
                    Sincerely, 
                    <br/>
                    <br/>
                    Apple Inc. </p>

                <p className="legaltext">Please do not reply to this email. We are unable to respond to inquiries sent to this address. For immedicate answers
                    to your questions, visit our Help left by clikcing “Help” at the top of any Apple page. 
                    <br/><br/>
                    Copyright 2021 Apple Inc. All rights reserved. Apple is located at 2211 N. First St, San Jose, CA 95131</p>
            </div>
        </div>

        
    )
}
export default Iphone_Text