import React from 'react';
import Subcomp1 from './Subcomp1';
import Subcomp2 from './Subcomp2';
import Subcontact from './Subcontact';
import Result1 from './Result1';
import Result2 from './Result2';


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
                   <Result1
                      resultssc={[
                      "ssc_result : GPA-5",
                      "ssc_ins : Daud public school,jashore",
                       "ssc year: 2017",
                      ]}
                   />
                </ul>
                <ul>HSC
                    <Result2
                    resulthsc={[
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
               contact={["Email:rakibul35-549@diu.edu.bd",
               "facebook:Rakibul isalm/facebook.com",
               "github:naim549/github.com",
            ]}
            />
                    
            <h5>Favourite games</h5>
            <div>
               <Subcomp1 
               games={["footabl","cricket","batminton","hokky"]}
               />
            </div>
            <h5>Skills</h5>
            <div>
                <Subcomp2
                 skills={["c progarming","java","javascrips","python"]}
                />
            </div>
            <hr />
            <br/>
            
        </div>
    )
}

export default Comp1;
