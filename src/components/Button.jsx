import React from 'react';
import {useState} from 'react'

function Button() {

const [count,setCount]=useState(0)
  
  
  function plus(value){
       setCount(count+value);
      console.log(count);

  }

  function minus(value){
    setCount(count-value);
    console.log(count);

}
      
  return(
      <div className="counter">
          <h1>This is a click counter</h1>
          <div>
              <h3>Total click count is : {count}</h3>
          </div>
          <div>
              <button onClick={() =>plus(10)}> plus 10</button>
              <button onClick={() =>plus(20)}> plus 20</button>
              <button onClick={() =>plus(50)}> plus 50</button>

              <button onClick={()=>minus(10)}> minus 10</button>
              <button onClick={()=>minus(20)}> minus 10</button>
              <button onClick={()=>minus(50)}> minus 50</button>
          </div>
      </div>
  ) ;
}

export default Button;
