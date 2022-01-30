import React from 'react';
function Comp1(props) {


    return (
        <div className="bio-data">
            <h1>Biodata of {props.name} </h1>
            <br />
            <hr />
            <h5>Personal details :</h5>
            <ul className="personal-details">
                <li>Birth date : {props.b_date}</li>
                <li>Birth place : <i>{props.b_place}</i></li>
                <li>Age : {props.Age} </li>
            </ul>
            <h5>Educational qualifications :</h5>
            <ul className="edu-qualifications">
                <ul>SSC
                    {props.sscResult}
                    
                </ul>
                <ul>HSC
                {props.subContact}

                    <ul />
                    <ul>Undergraduate
                        <li>
                            {props.university}
                        </li>
                    </ul>
                </ul>

                <h5>Contacts</h5>
                   <ul>
                       {props.contact}
                   </ul>
                <h5>Favourite games</h5>
                <div>

                   <ul>
                       {props.games}
                   </ul>
                </div>
                <h5>Skills</h5>
                <div>
                    <ul>
                        {props.skills}
                    </ul>
                    
                </div>
                <hr />
                <hr />
                <br />

            </ul>

        </div>
    )
}

export default Comp1;
