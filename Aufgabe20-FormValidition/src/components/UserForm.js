import { useEffect, useState } from "react";

const UserForm = (props) => {
  const [formValid, setFormValid] = useState(false);

  const [userName, setUserName] = useState("");
  const [nameValid, setNameValid] = useState({});

  const [userAge, setUserAge] = useState("");
  const [ageValid, setAgeValid] = useState({});

  const [userPhone, setUserPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState({});

  const [userEmail, setUserEmail] = useState("");
  const [emailValid, setEmailValid] = useState({});

  const validateName = (name) => {
    if (name.length === 0) {
      return { valid: false, msg: "Bitte geben Sie Ihren Namen ein!" };
    } else if (name.length < 3) {
      return { valid: false, msg: "Der Name ist zu kurz" };
    } else {
      return { valid: true, msg: "" };
    }
  };

  const validateAge = (age) => {
    if (age === "") {
      return { valid: false, msg: "Bitte schreiben Sie wie alte Sie sind!" };
    } else if (age < 18) {
      return { valid: false, msg: "Hallo, Sie sind noch nicht alt genug!!!" };
    } else {
      return { valid: true, msg: "" };
    }
  };

  const validateEmail = (email) => {
    if (email === "") {
      return { valid: false, msg: "Bitte schreiben Sie gültige Email-Adresse!" };
    } else if (!email.includes('@')) {
      return { valid: false, msg: "Bitte schreiben Sie gültige Email-Adresse!" };
    } else {
      return { valid: true, msg: "" };
    }
  };

  const validatePhone = (phone) => {
     if (phone === "") {
      return { valid: false, msg: "Bitte schreiben Sie gültiges Phone" };
    } else if (phone.length < 11) {
      return { valid: false, msg: "Bitte schreiben Sie gültige Email-Adresse!" };
    } else {
      return { valid: true, msg: "" };
    } 
   }
  
  
 
  


  useEffect(() => {
    setNameValid(validateName(userName));
  }, [userName]);

  useEffect(() => {
    setAgeValid(validateAge(userAge));
  }, [userAge]);

  useEffect(() => {
    setEmailValid(validateEmail(userEmail));
  }, [userEmail]);

  useEffect(() => {
    setPhoneValid(validatePhone(userPhone));
  }, [userPhone]);

  useEffect(() => {
    if (nameValid.valid === true && ageValid.valid === true && emailValid.valid === true && phoneValid.valid === true) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [nameValid, ageValid, emailValid, phoneValid]);

  return (
    <div id="UserForm" className="step">
      <h1>Ihre Daten</h1>
      <div className="input-wrapper">
        <div className="top">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            value={userName}
            name="name"
            id="inputName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        {nameValid.valid === false ? (
          <div className={"msg"}>{nameValid.msg}</div>
        ) : null}
        </div>
        
         <div className="input-wrapper">
        <div className="top">
          <label htmlFor="inputAge">Age</label>
          <input
            type="number"
            value={userAge}
            name="age"
            id="inputAge"
            onChange={(e) => setUserAge(e.target.value)}
          />
        </div>
        {ageValid.valid === false ? (
          <div className={"msg"}>{ageValid.msg}</div>
        ) : null}
        </div>
      

        <div className="input-wrapper">
        <div className="top">
          <label htmlFor="inputPhone">Phone</label>
          <input
            type="number"
            value={userPhone}
            name="phone"
            id="inputPhone"
            onChange={(e) => setUserPhone(e.target.value)}
          />
        </div>
        {phoneValid.valid === false ? (
          <div className={"msg"}>{phoneValid.msg}</div>
        ) : null}
        </div>
        <div className="input-wrapper">
        <div className="top">
          <label htmlFor="inputEmail">Email</label>
          <input
            type="text"
            value={userEmail}
            name="email"
            id="inputEmail"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        {emailValid.valid === false ? (
          <div className={"msg"}>{emailValid.msg}</div>
        ) : null}
        </div>
      

      <div className="btn-list">
        <div
          className="btn"
          onClick={() => {
            props.setCurrentStep(1);
          }}
        >
          zurück
        </div>
        <div
          className={"btn " + (formValid ? "valid" : "invalid")}
          onClick={() => {
            if (formValid) {
              props.setCurrentStep(3);
              props.setUserData({
                name: userName,
                age: userAge,
                email: userEmail,
                phone: userPhone,
              });
            }
          }}
        >
          Bestellung abschließen
        </div>
      </div>
    </div>
  );
};

export default UserForm;
