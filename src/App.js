// import logo from './logo.svg';

import './App.css';
import Comp1 from './components/Comp1'
import Button from './components/Button'
import Subcontact from './Subcontact';


 

function App() {

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

      />
      <Comp1
        name="Rakibul Islam Naim"
        b_date="23-08-2002"
        b_place="Mohishkhula , Narail"
        Age="20"
        university="BSC in Software Engineering ,
        Daffodil international university"
        // game={["footabl","cricket","batminton","hokky"]}

      >
        <Subcontact
                    personal_info={[
                        "hsc_result : GPA-4.25",
                        "hsc_ins : Govt. BL Collage, khulna",
                        "hsc-year :2019",
                    ]}
                    />
      </Comp1>
      <Button />
      


    </div>
  );
}

export default App;
