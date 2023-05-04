/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipeData }) => {
  const {
    recipe_image,
    rating,
    cooking_method,
    ingredients,
    recipe_name,
    chef_id,
  } = recipeData;
  const addFavorite = () => {
    toast("Add To Favorite");
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={recipe_image} alt="recipe img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Recipe Name: {recipe_name}</h2>
        <p>
          <span className="font-bold text-lg">Cooking Method: </span>
          {cooking_method}
        </p>
        <p className="font-bold text-lg">Ingredients: </p>
        {ingredients.map((ingra, i) => (
          <p key={i}>{ingra}</p>
        ))}
        <div className="flex justify-between">
          <div>
            <Rating
              readonly
              placeholderRating={rating}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-yellow-500" />}
              fullSymbol={<FaRegStar />}
            />
            <span className="ms-2 ">{rating}</span>
          </div>
          <div onClick={addFavorite}>
            <FiHeart />
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Recipe;