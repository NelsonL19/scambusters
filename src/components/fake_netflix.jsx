import '../styles/fake_netflix.css'
import { Button, Tooltip } from 'antd';

//This file is how the fake Netflix signup page is being created. It features the HTML of the page along with exporting it to be used in a level.
const Fake_Netflix = (props) => {

    console.log(props.allTooltipsVisible)

    return (
        <div className = "website">
            <Tooltip title = {"Netflix's logo is curved!"} trigger = {[]} visible = {props.allTooltipsVisible} placement = 'bottom'>
                <h1 className = "title">NETFLIX</h1>
            </Tooltip>
            <div className = "sign-in">
                <h2 className = "sign-in-header">Sign In</h2>
                <Tooltip title = {"Netflix wouldn't ask for your credit card when you sign in"} trigger = {[]} visible = {props.allTooltipsVisible} placement = 'right'>
                    <input placeholder = "Credit Card Number"></input>
                </Tooltip>
                <p>Please enter the credit card number associated with your account</p>
                <Tooltip title = {"Password is misspelled"} trigger = {[]} visible = {props.allTooltipsVisible} placement = 'bottom'>
                    <input placeholder = "Pasword"></input>
                </Tooltip>

                <Button block className = "sign-in-button">Sign In</Button>
                <h3 className = "new-acct-text">New to netflix? <b>Sign Up Now!</b></h3>


            </div>
        </div>
    )

}

export default Fake_Netflix