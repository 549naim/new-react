import React from 'react';

function Subcomp1(props) {
  return (
      <div className="subcomp1">
          <ul className="favourite_games">
                {props.games.map((game) =>{
                    return(
                        <li>{game}</li>
                    )
                })}
                     
            </ul>
      </div>
  )
}

export default Subcomp1;
