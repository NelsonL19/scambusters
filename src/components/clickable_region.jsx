
import '../styles/clickable_region.css'

const Clickable_Region = (props) => (

    <div className = "clickable-region" onClick = {props.handleClick}>
        {props.content}
    </div>


)

export default Clickable_Region