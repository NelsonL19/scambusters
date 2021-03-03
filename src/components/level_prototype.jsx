import React, {Component, useEffect, useState, Suspense} from 'react';
import Browser_Bar from './browser_bar.jsx'
import UI_Overlay from './ui_overlay.jsx'

export default class Level_Prototype extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }

    loadLevel(number) {
        const Level = React.lazy(() =>
            import(`../pages/level_${number}.js`)
        );
        return Level;
    }

    render(){
        const Level = this.loadLevel(this.props.level.levelNum)
        return (
            <div>
                <Browser_Bar url = {this.props.level.url}/>
                <UI_Overlay level = {this.props.level}/>
                <Suspense fallback={<div>Loading Level...</div>}>
                    <Level />
                </Suspense>
            </div>
        )
    }
}