import React from "react";
import { useContext } from "react";
import { DataContext } from "./context/DataContext";

function ChangeUserInfo() {
  const { setName, setOrt, name } = useContext(DataContext);
 
  return (
    <div>
      <h1>Change User Info</h1>

      <label>
        Name: <br/>
        <input onChange={(e) => setName(e.target.value)} type="text" name="name" />
      </label>
      <label> <br/>
        Ort: <br/>
        <input onChange={(e) => setOrt(e.target.value)} type="text" name="ort" />
      </label>
    </div>
  );
}

export default ChangeUserInfo;
