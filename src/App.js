import React from "react";
import HeaderComponent from "./components/header.js";
import FooterComponent from "./components/Footer.js";



var x={
  UserName:"x",
  Age:"22"
}

var y={
  UserName:"y",
  Age:"21"
}

var salary=[200,400,600,500,700];

var sum=0;

for(let i=0;i<salary.length;i++)
{
sum=sum+salary[i];
}

export default function App() {
  return (
    <div>
      <HeaderComponent 
      salary={sum}
      employee={y} 
      UserName="viku" 
      age='20' 
      />


      <FooterComponent/>
    </div>
  );
}
