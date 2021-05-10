import '../styles/target_letter.css'
import logo from '../assets/targetlogo.png'
import { Clickable_Region } from '../components'
import { Tooltip } from 'antd';

//This file creates the Target HTML Page by emulating a mailed letter and asking players to find out why it's fake
const Target_Letter = (props) => {

    //This renders the HTML and puts it on screen for the user can see. 
    return (
        <div className="flex-container"  >

            <div className="message">
                <div style = {{display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'20px'}}>
                <img className="logo" src={logo} alt="Target" height="80" />
                    <h1 className="targetHead">TARGET CAREERS</h1>

                </div>

                <h2 className = "targetSubhead">Congratulations on being selected for the Target shopper review team!</h2>
                <br />
                <p>Dear xxxxx,
                <br />
                    <br />
                 <Tooltip title={"Unexpected check in the mail"} trigger={[]} visible={props.evidenceFound.includes(0) || props.isLevelComplete} placement='top'>
                        <Clickable_Region isLevelComplete={props.isLevelComplete} handleCRClick={props.handleCRClick} evID={0} found={props.evidenceFound.includes(0)} content="The check included in this letter represents $2800, " />
                    </Tooltip>which covers the assignment bills, evaluation costs, and your survey commission payment of $400. Below are instructions for your first assignment
                </p>
                <ul>
                    <li>Confirm the receipt of package by email at richardfels@gmail.com or (702) 632-2078</li>
                    <li>Deposit the check with any option your bank offers: ATM deposit, mobile deposit, or bank deposit</li>
                    <li>Your first assignment, <b>EBAY GIFT CARD</b>
                        <ul>
                            <li>                 
                                <Tooltip title={"Call to action of purchasing a gift card"} trigger={[]} visible={props.evidenceFound.includes(1) || props.isLevelComplete} placement='right'>
                                    <Clickable_Region isLevelComplete={props.isLevelComplete} handleCRClick={props.handleCRClick} evID={1} found={props.evidenceFound.includes(1)} content="Visit the nearest target store and purchase EBAY GIFT CARDS of any denominations ($50, $100, etc.) totaling $2400" />
                                </Tooltip>
                            </li>
                            <li>After purchase, please email Richard Fels (richardfels@gmail.com) with the following:
                                <ul>
                                    <li>Store name, address, date, and time of visit</li>
                                    <li>Name of cashier (if visible on tag)</li>
                                    <li>
                                        <Tooltip title={"Asking you to send money/information worth money"} trigger={[]} visible={props.evidenceFound.includes(2) || props.isLevelComplete} placement='left'>
                                            <Clickable_Region isLevelComplete={props.isLevelComplete} handleCRClick={props.handleCRClick} evID={2} found={props.evidenceFound.includes(2)} content="Images of the gift cards (open package, remove silver scratch-off area, and capture image of front and back of card)" />
                                        </Tooltip>
                                    </li>
                                    <li>Did the store clerk thank you for your purchase?</li>
                                    <li>How long did it take you to check out</li>
                                    <li>What was your overall experience with the store's staff?</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p><b>Reminder:</b> At any store chosen for your EBAY GIFT CARDs, 
                    <Tooltip title={"Asks you to be secretive"} trigger={[]} visible={props.evidenceFound.includes(3) || props.isLevelComplete} placement='left'>
                        <Clickable_Region isLevelComplete={props.isLevelComplete} handleCRClick={props.handleCRClick} evID={3} found={props.evidenceFound.includes(3)} content="under no circumstances should you acknowledge that you are evaluating their services, " />
                    </Tooltip>
                    as that will defeat the purpose of the whole program.
                    <br/>
                    <br/>
                    Sincerely,
                    <br/>
                    <br/>
                    Richard Fels
                    <br/>
                    Manager, Business Development Team 
                    (702) 632-2078</p>
            </div>
        </div>


    )
}
export default Target_Letter