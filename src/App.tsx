import React from 'react';
import './App.css';

// primtive 
let age:number = 24;
let name:string = "Shamim";
let isBolean:boolean = true;

// ___________ 
let num:number[] = [1,2,3,4,5];
let person:string[] = ["shamim", "safi", "sakib"];


interface Students {
  name:string,
  roll:number,
  id:number | string,
  sem?:string
}

let students:Students= {name:"shamim", roll: 30, id:"100"};


// ___________function___________



function App() {
  return (
    <div className="App">
        <p>{age}</p>
    </div>
  );
}

export default App;
