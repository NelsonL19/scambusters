import '../styles/apple_music.css'
import { Button } from 'antd';

const Apple_music_email = () => {

    return (
        <div class="flex-container" id ="flexApple">
        <div class="mailBox">
            <button id="compose">Compose</button>
            <button>Inbox</button>
            <button>Starred</button>
            <button>Sent</button>
            <button>Drafts</button>
            <button>Junk</button>
        </div>
    
        <div class="message">
            <h1 class="emailName">Update Your Account Information</h1>
            <p class="sender">apple.Inc - Update.account.confirmed@altervista.org </p>
            <p>to me</p>
            <img class="logo" src="../assets/appleMusicLogo.png" alt="AppleMusic" width="128" height="32"/>
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

            <p class="legaltext">Please do not reply to this email. We are unable to respond to inquiries sent to this address. For immedicate answers
                to your questions, visit our Help left by clikcing “Help” at the top of any Apple page. 
                <br/><br/>
                Copyright 2021 Apple Inc. All rights reserved. Apple is located at 2211 N. First St, San Jose, CA 95131</p>
        </div>
    </div>

        
        )
}
export default Apple_music_email