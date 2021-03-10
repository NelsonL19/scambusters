import React, { Component, useEffect, useState, Suspense } from 'react';
import Browser_Bar from './browser_bar.jsx'
import UI_Overlay from './ui_overlay.jsx'
import './level_prototype.css'

export default class Level_Prototype extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }
    //This function is responsible for taking in the level number, and rendering the level content that is being used for each level.
    loadLevel (number) {
        const Level = React.lazy(() =>
            import(`../pages/level_${number}.js`)
        );
        return Level;
    }


    render () {
        //Calls the load level function with the level that is being selected.

        const Level = this.loadLevel(this.props.level.levelNum)
            return (
                <div>
                    <div className="minification">
                        <Browser_Bar url={this.props.level.url} />
                        <Suspense fallback={<div>Loading Level...</div>}>
                            <Level />
                        </Suspense>
                    </div>
                    <UI_Overlay level={this.props.level} />
                </div>
            )

        
    }
}