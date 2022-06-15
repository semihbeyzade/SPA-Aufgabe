import React from "react";
import axios from "axios";
import Liked from "./Liked";
import Cooked from "./Cooked";
import Menu from "./Menu";
import { FcLike } from "react-icons/fc";
import { GiCookingPot } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Container() {
  const [data, setData] = useState({});

  useEffect(() => {
    const axiosMenus = async () => {
      const { data: response } = await axios.get(
        " https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
      );
      setData(response);
      console.log(response);
    };
    axiosMenus();
  }, []); 


  const [liked, setLiked] = useState([]);
  const [cooked, setCooked] = useState([]);

  const addToLike = (product) => {
    let likedArr = liked;
    likedArr.push(product);
    setLiked([...likedArr]);
  };

  const addToCook = (product) => {
    let cookedArr = cooked;
    cookedArr.push(product);
    setCooked([...cookedArr]);
  };

  const handleRemove = (id) => {

    let kopie =  data.meals.filter(meal => meal.idMeal !== id)
    setData(kopie)
    
  
  };

  return (
    <Router>
    

      <nav className="nav d-flex justify-content-end bg-warning">
        <Link className="nav-link active" to="/" aria-current="page">
          <MdRestaurantMenu className="text-danger display-5" />
          <span className="text-dark me-5">Menu</span>
        </Link>
        <Link className="nav-link" to="liked">
          <FcLike className="display-5" />
          <span className="text-dark me-5">Likes</span>
        </Link>
        <Link className="nav-link" to="cooked">
          <GiCookingPot className="text-danger display-5" />
          <span className="text-dark me-5">Cooked</span>
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Menu
              data={data}
              addToLike={addToLike}
              addToCook={addToCook}
              handleRemove={handleRemove}
            />
          }
        />
        <Route path="/liked" element={<Liked liked={liked} />} />
        <Route path="/cooked" element={<Cooked cooked={cooked} />} />
      </Routes>
    </Router>
  );
}

export default Container;
