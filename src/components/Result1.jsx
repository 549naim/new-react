import React from 'react';

function Result1(props) {
    return (
        <div>
            {
                props.resultssc.map((point) =>{
                    return (
                        <li>{point}</li>
                    )
                })
            }
        </div>


    );
}

export default Result1;
