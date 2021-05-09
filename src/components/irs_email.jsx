import '../styles/irs_email.css'
import { Clickable_Region } from '../components'
import { Tooltip } from 'antd';

//This file creates the IRS Email HTML Page by emulating a GMail Mailbox and asking players if it's legit/fake. It's real. 
const IRS_Email = (props) => {

    return (
        <div className="flex-container outside" id="flexEmail">
            <div className="mailBox">
                <button id="compose">Compose</button>
                <button>Inbox</button>
                <button>Starred</button>
                <button>Sent</button>
                <button>Drafts</button>
                <button>Junk</button>
            </div>

            <div className="message">
                <div className="message1">
                    <h1 className="emailName">User Profile Has Been Created</h1>
                    <p className="sender"> <strong>From IRS Online Services</strong> (IRS.online.services@irs.gov)</p>
                    <p><strong> to me</strong> on Tuesday, Feb 2, 8:41 am</p>
                    <br />
                    <Tooltip title = {"Typically, the IRS will not contact you or ask for any sensitive information by email. This is directly mentioned at the bottom of the second email in the chain. This email is NOT asking for any sensitive information."} trigger = {[]} visible = {props.allTooltipsVisible || props.isLevelComplete} placement = 'left'>
                        <p>
                        An IRS online services profile has been created per your request. <br/> <br/>
                        If you did not create this profile, please contact us at 888-841-4648. <br/> <br/>
                        This is an automated email. Please do not reply. <br/> <br/>
                        The IRS will never initiate contact through email asking taxpayers for personal or financial information. 
                        <br/>
                        </p>
                    </Tooltip>
                </div>
                <div className="message2">
                    <h1 className="emailName">User Profile Confirmation Code</h1>
                    <p className="sender"> <strong>From IRS Online Services</strong> (IRS.online.services@irs.gov) </p>
                    <p><strong> to me</strong> on Tuesday, Feb 2, 8:34 am</p>
                    <br />
                    <Tooltip title = {"As the first email indicates, these messages are in direct response to a request made by the email's recipient."} trigger = {[]} visible = {props.allTooltipsVisible || props.isLevelComplete} placement = 'right'>
                    <p>To set up your IRS account, verify your email address. Enter the following code on the IRS registration web page. <br/><br/>
                        Your confirmation code is: <br/>3398-9135 <br/> <br/>
                        About this message: <br/>We've sent you this automated email because you requested an IRS account. Only enter this 
                        code on IRS.gov. Don't share this code with anyone. For your security, the IRS will never contact you for 
                        personal or financial information in an email. Please do not reply because we are not able to respond to 
                        messages sent to this email address 
                    </p>
                    </Tooltip>
                </div>
            </div>
        </div>


    )
}

export default IRS_Email