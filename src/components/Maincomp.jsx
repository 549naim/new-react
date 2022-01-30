import React from 'react';

import Comp1 from './Comp1';
import Button from './Button';
import Subcontact from './Subcontact';
import Prccom from './Prccom';

function Maincomp() {
    return (
        <div className="App">

            <Comp1
                name="Rakibul Islam Naim"
                b_date="23-08-2002"
                b_place="Mohishkhula , Narail"
                Age="20"
                university="BSC in Software Engineering ,
      Daffodil international university"
                // game={["footabl","cricket","batminton","hokky"]}
                subContact={<Subcontact
                    personal_info={[
                        "hsc_result : GPA-4.25",
                        "hsc_ins : Govt. BL Collage, khulna",
                        "hsc-year :2019",
                    ]}

                />}

                sscResult={<Subcontact
                    personal_info={[
                        "ssc_result : GPA-5.00",
                        "ssc_ins : Daud Public school and collage",
                        "ssc-year :2017",
                    ]}

                />}
                contact={<Subcontact
                    personal_info={[
                        "Facebook: Rakibul islam/Facebook.com",
                        "github: 549naim/github.com",
                        "Email: rakibul35-549@diu.edu.bd",
                    ]}

                />}
                games={<Prccom />}
                skills={ <Subcontact
                    personal_info={["c progarming", "java", "javascrips", "python"]}
                /> }


            />



             <Comp1
                name="Rakibul Islam Naim"
                b_date="23-08-2002"
                b_place="Mohishkhula , Narail"
                Age="20"
                university="BSC in Software Engineering ,
      Daffodil international university"
                // game={["footabl","cricket","batminton","hokky"]}
                subContact={<Subcontact
                    personal_info={[
                        "hsc_result : GPA-4.25",
                        "hsc_ins : Govt. BL Collage, khulna",
                        "hsc-year :2019",
                    ]}

                />}

                sscResult={<Subcontact
                    personal_info={[
                        "ssc_result : GPA-5.00",
                        "ssc_ins : Daud Public school and collage",
                        "ssc-year :2017",
                    ]}

                />}
                contact={<Subcontact
                    personal_info={[
                        "Facebook: Rakibul islam/Facebook.com",
                        "github: 549naim/github.com",
                        "Email: rakibul35-549@diu.edu.bd",
                    ]}

                />}
                games={<Prccom />}
                skills={ <Subcontact
                    personal_info={["c progarming", "java", "javascrips", "python"]}
                /> }


            />
            <Button />



        </div>
    )
}

export default Maincomp;
