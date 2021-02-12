import React from "react";

function App(){
    let curDate = new Date(2021,2,9,14);
curDate = curDate.getHours();
let greet = "";
const cssStyle = {};

if(curDate >=1 && curDate <12){
    greet ="Good Morning"
    cssStyle.color = "green";
}else if(curDate>=12 && curDate <19){
  greet ="Good Afternoon"
  cssStyle.color = "yellow";
}else{
  greet ="Good Night"
  cssStyle.color = "black";
}

return(

    <>
    <div>
    <h1>
       Hello Sir, 
       <span style={cssStyle}> {greet} </span>
    </h1>
    </div>
    </>
);
}
export default App;