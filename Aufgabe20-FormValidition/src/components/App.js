import '../css/App.scss';
import UserForm from "./UserForm";
import OrderForm from "./OrderForm"
import Result from './Result';
import {useState} from "react";


function App() {
  const [userData, setUserData] = useState({})
  const [orderData, setOrderData] = useState({})
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="App" id="App">
      {
        (currentStep===1)? <OrderForm setOrderData={setOrderData} setCurrentStep={setCurrentStep}/>
          :
          null
      }
      {
        (currentStep===2)?<UserForm setUserData={setUserData} setCurrentStep={setCurrentStep}/>
          :
          null
      }
       {/*  {
        (currentStep==3)?<div>Hier deine neue Komponente mit: 'Danke für deine Bestellung' Hamburger: {orderData.hamburger}, Cola: {orderData.cola}, Eis: {orderData.eis}, Preis: {orderData.price}€ Name: {userData.name} Age : {userData.age} Email: {userData.email} Phone: {userData.phone}</div>
          :
          null
         }  */}

        {
          (currentStep===3)?<Result Hamburger = {orderData.hamburger}
          Cola= {orderData.cola}
          Eis= {orderData.eis}
          Preis= {orderData.price}
          Name= {userData.name}
          Email= {userData.email} 
          Phone= {userData.phone}
          />
          :
          null
        } 
 
    </div>
  );
}

export default App;
