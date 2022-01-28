import React from 'react';

function Subcontact(props) {
  return (
      <div>
          <ul className="favourite_games">
                {props.personal_info.map((item) =>{
                    return(
                        <li>{item}</li>
                    )
                })}
                     
            </ul>
      </div>
  );
}

export default Subcontact;
