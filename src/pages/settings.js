
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Button, Switch, Slider} from 'antd';
import "../styles/settings.css"

const Settings = (props) => {
    const history = useHistory();
    const [tempSettings, setTempSettings] = useState(props.settings)


    const cancel = () => {
        history.push({pathname: "/"})
    }

    const updateTempSettings = (setting, value) => {
        setTempSettings({...tempSettings, [setting]:value})
    }

    useEffect(()=>{
        console.log(tempSettings)
    }, [tempSettings])

    const saveSettings = () => {
        props.setSettings(tempSettings)
        history.push({pathname:"/"})
    }

return (
    <>
      <h1 className = "gameSubtitle">Settings</h1>
      <h2>Sound settings</h2>
      <div className = "settings-grid">
        <span>Sound Effects:</span>
        <span style = {{width:'100%', textAlign:'center'}}>
            off 
                <Switch 
                    defaultChecked = {tempSettings.soundToggle} 
                    onChange = {() => updateTempSettings("soundToggle", !tempSettings.soundToggle)}>
                </Switch> 
            on
        </span>
        <span>
            Volume:
            <Slider 
                className = "slider" 
                defaultValue = {tempSettings.soundVolume}
                disabled = {!tempSettings.soundToggle}
                onChange = {(value)=> updateTempSettings("soundVolume", value)}>
            </Slider>
        </span>

        <span>Music:</span>
        <span style = {{width:'100%', textAlign:'center'}}>
            off 
            <Switch 
                defaultChecked = {tempSettings.musicToggle} 
                onChange = {() => updateTempSettings("musicToggle", !tempSettings.musicToggle)}>
            </Switch>
             on
        </span>
        <span>
            Volume:
            <Slider 
                className = "slider" 
                defaultValue = {tempSettings.musicVolume}
                disabled = {!tempSettings.musicToggle}
                onChange = {(value)=> updateTempSettings("musicVolume", value)}>
            </Slider>
        </span>
      </div>
      <h2>Font Size</h2>
      <div className = "settings-grid">
          <Button 
            className = {`font-select-button ${tempSettings.fontSize === "sm" ? "selected" : ""}`} 
            onClick = {() => updateTempSettings("fontSize", "sm")}>
                Small
          </Button>
          <Button 
            className = {`font-select-button ${tempSettings.fontSize === "md" ? "selected" : ""}`}
            onClick = {() => updateTempSettings("fontSize", "md")}>
                Medium
          </Button>
          <Button 
            className = {`font-select-button ${tempSettings.fontSize === "lg" ? "selected" : ""}`} 
            onClick = {() => updateTempSettings("fontSize", "lg")}
            style = {{fontSize:'20px'}}>
                Large
          </Button>
      </div>
      <Button type="primary" size="large" onClick = {() => cancel()} className = "settings-button">Cancel</Button>
      <Button type="primary" size="large" onClick = {() => saveSettings()} className = "settings-button">Save Settings</Button>
    </>
  )
}

export default Settings