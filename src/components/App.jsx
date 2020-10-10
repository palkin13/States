import React from "react";

var isDone = false;

function strike() {
  isDone = true;
}
function unStrike() {
  isDone = false;
}

//    IMPERATIVE  function strike() {
//   document.getElementById("root").style.textDecoration = "underline";
// }
// function unStrike() {
//   document.getElementById("root").style.textDecoration = "null";
// }



function App() {
  
  
  //DECLARATIVE PROGRAMMING
  //  var isDone = true;
  // const strikeThrough = { textDecoration : "line-through"};
  // return     <p style = { isDone ? strikeThrough : null }> Buy Milk </p>

  // IMPERATIVE PROGRAMMING
//   return (
//     <div>
//   <p>Buy Milk </p>
//   <button onClick = {strike} >Change to strike through </button>
//   <button onClick = {unStrike} >Change to strike through back </button>
//    </div> 
  
//   );  
// }
  return (
       <div>
        <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
       <button onClick={strike}>Change to strike through</button>
       <button onClick={unStrike}>Change back </button>  
      </div> 
  );
}

export default App;
