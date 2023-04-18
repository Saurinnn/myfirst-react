import React from "react";
const style = {
  height: "50px",
  backgroundColor: "lightgray",
};

export const Child2 = React.memo(() =>{
  console.log("Child2レンダリング");

  return(
    <div style={style}>
    <p>Child2</p>
    </div>
  );
});