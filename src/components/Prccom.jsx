import React from 'react';

const games=["cricket","footbal"]
function Prccom() {
  return (
      <div>
          <ul>
              {games.map((gamer) =>{
                  return (
                      <li>{gamer}</li>
                  )
              })}
          </ul>

      </div>
  )
}

export default Prccom;
