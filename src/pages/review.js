import { Link, useHistory } from 'react-router-dom'
import { firebase } from '../firebase-config/config'
import { Button } from 'antd';
import '../styles/review.css';
import ReactAudioPlayer from 'react-audio-player';
import jazzMusic from '../assets/jazzBrunch.mp3'


const Review = (props) => {
    const history = useHistory();
    const returnToMain = () => { history.push({ pathname: "/" }) }


    return (
        <>
        <ReactAudioPlayer
        src={jazzMusic}
        autoPlay={true}
        loop={true}
        volume={0.5}
      />
                <br />
                <div className="info">
                    <h1 className="reviewTitle">Review of Each Level</h1>
                </div>

                <br/>
                <div className="info">
                    <h2 className="levelNum">Level 1: Netflix</h2>
                    <ol>
                        <li className="levelClues">Anyone can cut and paste logos. This example includes an improper logo (Netflix is not curved). Even inclusion of a 
                        correct logo is no guarantee of legitimacy.</li>
                        <li className="levelClues">Legitimate companies will not ask you to sign in to your account using your credit card number.</li>
                        <li className="levelClues">Rarely do legitimate companies include misspelled words on their websites or in emails. Since most scams originate 
                        in other countries where English is a second language, misspellings and grammatical errors are commonplace.</li>
                    </ol>
                </div>

                <br/>
                <div className="info">
                    <h2 className="levelNum">Level 2: Apple Music</h2>
                    <ol>
                        <li className="levelClues">Carefully check who is the sender of emails you receive. Scammers often pretend to be legitimate companies. Sometimes the 
                        email address of the sender is obviously not who they are pretending to be.</li>
                        <li className="levelClues">Other times, scammers can be extremely sneaky and create fake email accounts very closely simulating real ones.</li>
                        <li className="levelClues">Misspellings, typos and poor grammar are giveaways of scams.</li>
                    </ol>
                </div>
                <br/>

                <br/>
                <div className="info">
                    <h2 className="levelNum">Level 3: Amazon Voicemail</h2>
                    <ol>
                        <li className="levelClues">Amazon or other large, legitimate vendors do not call and leave voicemails asking whether you placed an order. 
                        If you are contacted and you are not sure if it is a scam or not, login to your account by the means you normally do.</li>
                        <li className="levelClues">Never give sensitive information if you are not certain of the legitimacy of the receiver.</li>
                    </ol>
                </div>
                <br/>

                <br/>
                <div className="info">
                    <h2 className="levelNum">Level 4: United States Postal Service Text Message</h2>
                    <ol>
                        <li className="levelClues">Be suspicious of texts from unknown phone numbers.</li>
                        <li className="levelClues">Scammers issue account or tracking numbers that are not even similar to real ones. 
                        Do not make it easy for them. At minimum check to see that the number you are sent is the correct format.</li>
                        <li className="levelClues">Do not login to suspicious URL addresses.</li>
                    </ol>
                </div>
                <br/>

                <br/>
                <div className="info">
                    <h2 className="levelNum">Level 5: Sal's Coupons</h2>
                    <ol>
                        <li className="levelClues">Scammers want to collect either money from you, or information which can be used for that purpose. 
                        This coupon requests neither information nor money. It simply offers discounts. The worst that can happen if the coupons are not accepted by the restaurant
                        is that you would have the option of paying full price or not ordering.</li>
                    </ol>
                </div>
                <br/>

                <br/>
                <div className="info">
                    <h2 className="levelNum">Level 6: Puppy Adoption</h2>
                    <ol>
                        <li className="levelClues">Scammers want to collect either money from you, or information which can be used for that purpose. 
                        This coupon requests neither information nor money. It simply offers discounts. The worst that can happen if the coupons are not accepted by the restaurant
                        is that you would have the option of paying full price or not ordering.</li>
                    </ol>
                </div>
                <br/>

                <br/>
                <div className="info">
                    <h2 className="levelNum">Level 7: IRS Emails</h2>
                    <ol>
                        <li className="levelClues">Scammers want to collect either money from you, or information which can be used for that purpose. 
                        This coupon requests neither information nor money. It simply offers discounts. The worst that can happen if the coupons are not accepted by the restaurant
                        is that you would have the option of paying full price or not ordering.</li>
                    </ol>
                </div>
                <br/>

                <br/>
                <div className="info">
                    <h2 className="levelNum">Level 8: Target Secret Shopper</h2>
                    <ol>
                        <li className="levelClues">Scammers want to collect either money from you, or information which can be used for that purpose. 
                        This coupon requests neither information nor money. It simply offers discounts. The worst that can happen if the coupons are not accepted by the restaurant
                        is that you would have the option of paying full price or not ordering.</li>
                    </ol>
                </div>
                <br/>

                <br/>
                <center>
                <Button type="danger" onClick={() => returnToMain()}>Return to Main Menu</Button>
                </center>
                <br/>
                <br/>
        </>
    )
}

export default Review