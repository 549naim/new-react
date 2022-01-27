import React from 'react';

function Subcontact(props) {
  return (
      <div>
          <ul className="favourite_games">
                {props.contact.map((item) =>{
                    return(
                        <li>{item}</li>
                    )
                })}
                     
            </ul>
      </div>
  );
}

export default Subcontact;
