import React, {Component, useEffect, useState} from 'react';
import '../styles/browser_bar.css'
import { ArrowLeftOutlined, ArrowRightOutlined, CloseCircleTwoTone, MinusCircleTwoTone, UpCircleTwoTone } from '@ant-design/icons'
import { Input } from 'antd';

export default class Browser_Bar extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }
    //The Render Function allows the browserbar to display on each level, using the classes and elements below.
    render(){
        return (
        <div className="totalBar">
            <div className="buttonsParent">
                <CloseCircleTwoTone className="barCircle" twoToneColor="#eb2f38" style={{fontSize: '20px'}}/>
                <MinusCircleTwoTone className="barCircle" twoToneColor="#f5cd00" style={{fontSize: '20px'}} />
                <UpCircleTwoTone className="barCircle" twoToneColor="#00d435" style={{fontSize: '20px'}} />
            </div>
            <div className="barParent">
                <div className="arrowIcons">
                    <ArrowLeftOutlined className="arrow" style={{fontSize: '20px', fontWeight: 'bolder'}}/>
                    <ArrowRightOutlined className="arrow" style={{fontSize: '20px', fontWeight: 'bolder'}}/>
                </div>
                <Input className="urlBar" defaultValue={this.props.url} disabled="true" style={{borderRadius: '10px'}}/>
            </div>
        </div>
        )
    }
}