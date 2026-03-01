import React from "react";

const App = () => {
  const pageScrolling = function (elem) {
    if(elem>0){
      console.log("You are scrolling top to bottom");
      
    }
    else{
      console.log("you are scrolling bottom to top");
      
    }
  };

  return (
    <div
      onWheel={(elem) => {
        pageScrolling(elem.deltaY)
      }}
      className="h-screen"
    >
      <div className=" h-full bg-gray-900">page1</div>
      <div className=" h-full bg-gray-700">page2</div>
      <div className=" h-full bg-gray-500">page3</div>
    </div>
  );
};

export default App;
