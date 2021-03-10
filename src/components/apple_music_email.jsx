import '../styles/apple_music.css'
import { Button } from 'antd';

const apple_music_email = () => {

    return (
        <div class="flex-container">
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
            <img class="logo" src="../assets/appleMusicLogo.png" alt="AppleMusic" width="128" height="32"></img>
        </div>
    </div>

        
        )
}
export default apple_music_email