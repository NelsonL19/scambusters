import React, { PureComponent } from "react";
 
//this is a "renderer" that tells the game what to render (i.e. a game component)
class Box extends PureComponent {
  render() {
    const size = 100;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    return (
      <div style={{ position: "absolute", width: size, height: size, backgroundColor: "aliceblue", left: x, top: y, textAlign:'center'}}>
          Scambusters
      </div> 
    );
  }
}
 
export default Box;