// import logo from './logo.svg';

import './App.css';
import Comp1 from './components/Comp1'
import Button from './components/Button'





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

      />


      <Comp1
        name="naim"
        b_date="23-08-2002"
        b_place="Mohishkhula , Narail"
        Age="20"
        university="BSC in Software Engineering ,
        Daffodil international university"


      />
      

      <Button />



    </div>
  );
}

export default App;
