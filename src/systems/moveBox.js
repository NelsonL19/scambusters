//this is a "system" function that will run every tick
const MoveBox = (entities, { input }) => {
   
    const { payload } = input.find(x => x.name === "onMouseDown") || {};
   
    if (payload) {
      const box1 = entities["box1"];
   
      box1.x = payload.pageX;
      box1.y = payload.pageY;
    }
   
    return entities;
  };
   
  export default MoveBox;