import React from 'react';

function Result2(props) {
  return (
      <div>
          {
          props.resulthsc.map((point) =>{
              return (
                  <li>{point}</li>
              )
          })
      }
      </div>
      
  );
}

export default Result2;
