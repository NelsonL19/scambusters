import '../styles/coupon.css'
import logo from '../assets/sals_pizza.png' 
import { Button, Tooltip, Row, Col } from 'antd';

const Coupon = (props) => {

    console.log(props.allTooltipsVisible)

    return (
        <div className="backgroundCoupon">
        <Row className="coupon">
            <Col span={12}>
            <div className="daily">
                <Tooltip title = {"Unlike in a scam, this coupon is NOT asking for any kind of information or money."} trigger = {[]} visible = {props.allTooltipsVisible || props.isLevelComplete} placement = 'left'>
                <img className="logo" src={logo} alt="AppleMusic" width="30%" height="30%"/>
                </Tooltip>

                <h3>Order Now! (262) 970-5701</h3>
                <h2>Sal's Daily Specials:</h2>
                <h3><strong>Everyday</strong></h3>
                <p>2 Large Cheese Pizzas ... $20.95 </p> 
                <h3><strong>Monday</strong></h3>
                <p>All Medium Pizzas ...	$14.00 </p> 
                <h3><strong>Sunday and Tuesday</strong></h3>
                <p>Large Cheese Pizza	... $19.99</p> 
                <h3><strong>Wednesday</strong></h3>
                <p>Buy any Sub or Stromboli and get a free Fountain Drink	 </p> 
                <h3><strong>Friday</strong></h3>
                <p>Beer and Glasses of Wine	... $3.00 </p> 

            </div>
            </Col>
            <Col span={12}>
            <div className="top"></div>
                <Row>
                    <Col className="coupons">
                     $5 off any 14" Pizza with 2 toppings
                    </Col>
                    <Col className="coupons">
                    FREE Cheesy Bread and 2 Liter Soda with purchase of 16" Pizza
                    </Col>
                </Row>
                <Row>
                    <Col className="coupons">
                    BOGO - Buy one pizza at regular price and get the second pizza half off
                    </Col>
                    <Col className="coupons">
                    $5 off any order of $30 or more
                    </Col>
                </Row>
                <Row>
                    <Col className="coupons"> 
                    Only $15.99 - 16" One Topping Pizza, 2 Liter Soda, and Breadsticks
                    </Col>
                    <Tooltip title = {"The worst case scenario is that this coupon is invalid. If so, one has the option to either pay full price or not place an order. "} trigger = {[]} visible = {props.allTooltipsVisible || props.isLevelComplete} placement = 'bottom'>
                    <Col className="coupons"> 
                    $10 off any order of $40 or more
                    </Col>
                    </Tooltip>
                </Row>
            </Col>
        </Row>
        </div>
    )

}

export default Coupon