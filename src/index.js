import reactDOM from "react-dom";
import React from "react";
import HeaderComponent from "./components/HeaderComponent"; 
import FooterComponent from "./components/FooterComponent";

var x={
    UserName:"ravi",
    Age:"22"
}
var y={
    UserName:"Vishal",
    Age:"21"
}
var salary=[200,400,600,500,700];
var sum=0;
for(let i=0;i<salary.length;i++){
sum=sum+salary[i];
}

reactDOM.render((
    <div>
        <HeaderComponent salary={sum} employee={x} UserName="Vikalp" age='20'></HeaderComponent>
        <HeaderComponent salary={sum} employee={y} UserName="viku" age='20' ></HeaderComponent>
        <FooterComponent></FooterComponent>
      
    </div>
),document.getElementById("root"))
//    React.createElement("div", {},[
//     React.createElement("h1",{}, "hello from IMS"),
//     React.createElement("h2",{}, "hello from technofunnel")

//    ]),
//    document.getElementById("root"))



//<h1> hello from vicky</h1>,document.getElementbyId("root"))





