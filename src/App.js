import React from 'react';
import Tictactoe from './Component/Tictectoe';
// import  { useState } from 'react';
import './App.css';

function App() {
  // const [count , setCount] = useState(0);
  // const user ={
  //   name :"virus",
  //   age : 2000,
  //   mood : "angry",
  // }
  // function handleclick(){
  //   alert("this is a handle click event")
  //   setCount(count + 1);
    
  // }
  // const products=[
  //   {title :'cabbage' , id:1 , isFruit:false },
  //   {title :'garlic' , id:2, isFruit:false},
  //   {title :'Apple' , id:3, isFruit:true},
  // ];
  // const listitems = products.map(products =>
  //    <li k key={products.id}  style={
  //    { color:products.isFruit?'magenta':'darkgreen' }
  //    }>
  //     {products.title}
  //    </li>
  //   )

  return (
    <div className="App">
      {/* <ul>{listitems}</ul> */}
      {/* <img className='avtaar' alt='img'   />
      <h2>this is a <br/> react component</h2>
     <h2>{user.name}</h2>
     <h2>{user.age}</h2>
     <h2>{user.mood}</h2>
     <button onClick= {handleclick}>click me </button>
     <button onClick= {handleclick}>click me{count} </button> */}
      <Tictactoe/>

     </div>
  );
}
export default App;
