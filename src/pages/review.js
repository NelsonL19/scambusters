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
        {props.settings.musicToggle && 
        <ReactAudioPlayer
            src={jazzMusic}
            autoPlay={true}
            loop={true}
            volume={0.5 * (props.settings.musicVolume/100)}
        />}
      <nav className="navigation" aria-label="dropdown navigation">
      <Button type="danger" onClick={() => returnToMain()}>Return to Main Menu</Button>
      </nav>
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
                        <li className="levelClues">People have fallen prey to the puppy scam for years.
                        Do not be swayed by a picture of a dog, no matter how cute it might be.</li>
                        <li className="levelClues">Scammers often cut and paste pictures from other (legitimate) websites.
                        It is always safest when buying a dog if the transaction is in person.</li>
                        <li className="levelClues">Sending payment before receiving the pet puts you at risk.  Puppy scammers create very real looking websites,
                         complete with pictures, instructions on how to complete the transfer, and reviews.</li>
                    </ol>
                </div>
                <br/>

                <br/>
                <div className="info">
                    <h2 className="levelNum">Level 7: IRS Emails</h2>
                    <ol>
                        <li className="levelClues">The IRS will never <strong>initiate</strong> contact with taxpayers through emails asking for personal or financial information.</li>
                        <li className="levelClues">However, if you reach out to the IRS requesting an account, they will supply you by email a confirmation code as part of the setup process.</li>
                        <li className="levelClues">As stated in the email shown on Level 7, only enter this code on IRS.gov and do not share it with anyone.</li>
                    </ol>
                </div>
                <br/>

                <br/>
                <div className="info">
                    <h2 className="levelNum">Level 8: Target Secret Shopper</h2>
                    <ol>
                        <li className="levelClues">The employment scam regularly falls at or near the top of the list of scams to which the most people lose money.  Beware of unsolicited job offers.  Sometimes scammers ask you to send payment when first “hired” for supplies such as business cards, things like insurance, or other start-up costs. You should not have to spend money to begin a new job.  </li>
                        <li className="levelClues">Probably the most common employment scam resembles the example in Level 8.  In it, you are sent a check as your initial payment, but most of that money is to be spent purchasing gift cards as a secret shopper.  Once you cash the check from your employer, what could go wrong?  The check could – and likely would – bounce!  Remember, although you received cash or a deposit into your account for the check, it is still a pending transaction until it clears the bank of the check writer.  Once your bank determines there are insufficient funds to cover the check, if it cannot recover the funds from the check writer it will hold you responsible to refund the money.</li>
                        <li className="levelClues">If you did as your “employer” requested by purchasing gift cards and sending him the gift card numbers, he will have immediately spent those cards and there will not be a way for you to get the money back.</li>
                        <li className="levelClues">Scammers like to be paid in ways that are not recoverable such as gift cards, wiring funds directly into an account, or cash.  Be on the lookout for these red flags.</li>
                    </ol>
                </div>
                <br/>

                <br/>
                <center>
                </center>
        </>
    )
}

export default Review