import React from 'react';
import Subcontact from './Subcontact';
import Prccom from './Prccom';


function Comp1(props) {

   
    return (
        <div className="bio-data">
            <h1>Biodata of {props.name} </h1>
            <br/>
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
                   <Subcontact
                      personal_info={[
                      "ssc_result : GPA-5",
                      "ssc_ins : Daud public school,jashore",
                       "ssc year: 2017",
                      ]}
                   />
                </ul>
                <ul>HSC
                    <Subcontact
                    personal_info={[
                        "hsc_result : GPA-4.25",
                        "hsc_ins : Govt. BL Collage, khulna",
                        "hsc-year :2019",
                    ]}
                    
                    />
                </ul>
                <ul>Undergraduate
                    <li>
                        {props.university}
                    </li>
                </ul>
                
                

            </ul>
            
            <h5>Contacts</h5>
            <Subcontact 
               personal_info={["Email:rakibul35-549@diu.edu.bd",
               "facebook:Rakibul isalm/facebook.com",
               "github:naim549/github.com",
            ]}
            />
                    
            <h5>Favourite games</h5>
            <div>

            <Prccom
            
            />
               {/* <Subcontact 
                 personal_info={props.games}
               /> */}
              
               
            </div>
            <h5>Skills</h5>
            <div>
                <Subcontact
                 personal_info={["c progarming","java","javascrips","python"]}
                />
            </div>
            <hr />
            <br/>
            
        </div>
    )
}

export default Comp1;
