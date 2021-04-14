
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

    const saveSettings = () => {
        return
    }

return (
    <>
      <h1 className = "gameSubtitle">Settings</h1>
      <h2>Sound settings</h2>
      <div className = "settings-grid">
        <span>Sound Effects:</span>
        <span style = {{width:'100%', textAlign:'center'}}>off <Switch defaultChecked></Switch> on</span>
        <span>Volume:<Slider className = "slider" defaultValue = "100"></Slider></span>

        <span>Music:</span>
        <span style = {{width:'100%', textAlign:'center'}}>off <Switch defaultChecked></Switch> on</span>
        <span>Volume:<Slider className = "slider" defaultValue = "100"></Slider></span>
      </div>
      <h2>Font Size</h2>
      <div className = "settings-grid">
          <Button style = {{fontSize:'10px'}} className = "font-select-button">Small</Button>
          <Button className = "font-select-button">Medium</Button>
          <Button className = "font-select-button" style = {{fontSize:'20px'}}>Large</Button>
      </div>
      <Button type="primary" size="large" onClick = {() => cancel()} className = "settings-button">Cancel</Button>
      <Button type="primary" size="large" onClick = {() => saveSettings()} className = "settings-button">Save Settings</Button>
    </>
  )
}

export default Settings