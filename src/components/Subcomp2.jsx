import React from 'react';

function Subcomp2(props) {
  return (
    <ul className="skills">
    {props.skills.map((skill) =>{
        return(
            <li>{skill}</li>
        )
    })}   
</ul> 
  )
}

export default Subcomp2;
