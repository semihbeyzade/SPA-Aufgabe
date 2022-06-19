import React from 'react'
import { useContext} from "react";
import { DataContext } from "./context/DataContext";

function UserInfo() {
    const {name, ort} = useContext(DataContext);
    console.log(name);
  return (
    <div>
      <p>Name: {name}</p>
      <p>Ort: {ort}</p>
    </div>
  )
}

export default UserInfo