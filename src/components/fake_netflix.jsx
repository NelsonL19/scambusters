import '../styles/fake_netflix.css'
import { Button } from 'antd';

const Fake_Netflix = () => {

    return (
        <div className = "website">
            <h1 className = "title">NETFLIX</h1>
            <div className = "sign-in">
                <h2 className = "sign-in-header">Sign In</h2>
                <input placeholder = "Credit Card Number"></input>
                <p>Please enter the credit card number associated with your account</p>
                <input placeholder = "Password"></input>

                <Button block className = "sign-in-button">Sign In</Button>
                <h3 className = "new-acct-text">New to netflix? <b>Sign Up Now!</b></h3>


            </div>
        </div>
    )

}

export default Fake_Netflix