import ReactAudioPlayer from 'react-audio-player'
import '../styles/amazon_voicemail.css'
import voicemail from '../assets/Amazon_scam.mp3'
import { Button, Tooltip, Collapse } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'

const { Panel } = Collapse;
const text = `This call is in regard to your purchase on Amazon.com.
You have been charged $349.99 on your Visa card.
If you have made this purchase on Amazon.com and recognize 
it, then simply hang up and your order will be delivered to you.
However, if you have not made any such transaction you can call
Amazon support right away on 669-247-0906.
Again the number is 669-247-0906. Thank you.`;

const Amazon_Voicemail = (props) => {

    return (
        <div className = "website">
            <Tooltip title = {"Amazon would never inform you of frauduelant charges over the phone."} trigger = {[]} visible = {props.allTooltipsVisible} placement = 'right'>
            <Tooltip title = {"Amazon will never ask you to disclose or verify sensitive personal information over the phone."} trigger = {[]} visible = {props.allTooltipsVisible} placement = 'left'>            
            <div className = "audio">
                <div className = "player">
                    <ReactAudioPlayer
                    src={voicemail}
                    autoPlay={false}
                    controls={true}
                    loop={false}
                    />
                </div>
                <br/>
                <div className = "transcript">
                    <Collapse 
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        className="site-collapse-custom-collapse">
                    <Panel header="View Audio Transcript"><p>{text}</p></Panel>
                    </Collapse>
                </div>
            </div>
            </Tooltip>
            </Tooltip>

        </div>
    )

}

export default Amazon_Voicemail