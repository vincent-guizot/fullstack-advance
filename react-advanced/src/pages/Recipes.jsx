import React, { useState, useEffect } from "react";
import axios from "axios";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const results = await axios({
        method: "GET",
        url: "http://localhost:3000/recipes",
      });
      // console.log(results.data)
      setRecipes(results.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="container">
      <div className="row text-center my-2">
        <h1>Recipe List</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non eos tempore cupiditate id voluptate! Veritatis, delectus, dolore fugiat quod nulla deserunt sed qui pariatur, libero unde aut suscipit iste?</p>
      </div>
      <div className="row">
        {
          <table className="table table-bordered my-2">
            <thead>
              <tr className="my-2">
                <th>No</th>
                <th>Image</th>
                <th>Description</th>

                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe) => {
                const {
                  id,
                  name,
                  image,
                  caloriesPerServing,
                  prepTimeMinutes,
                  cookTimeMinutes,
                  servings,
                  difficulty,
                  cuisine,
                  mealType,
                  rating,
                } = recipe;
                return (
                  <tr key={id} className="my-2">
                    <td>{id}</td>
                    <td>
                      <img src={image} alt="" className="recipe-img" />
                    </td>
                    <td>
                      <div className="d-flex flex-row mb-2">
                        <span className="badge bg-primary me-2">
                          {difficulty}
                        </span>
                        <span className="badge bg-info me-2">{mealType}</span>
                        <span className="badge bg-primary me-2">{cuisine}</span>
                      </div>
                      <h3>{name}</h3>
                      <hr />
                      <div className="row recipe-details">
                        <div className="col-3">
                          <div className="d-flex flex-column">
                            <div>
                              <small>Calories</small>
                              <h3>{caloriesPerServing}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="d-flex flex-column">
                            <div>
                              <small>Prep Time</small>
                              <h3>{prepTimeMinutes}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="d-flex flex-column">
                            <div>
                              <small>Cook Time</small>
                              <h3>{cookTimeMinutes}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="d-flex flex-column">
                            <div>
                              <small>Servings</small>
                              <h5>{servings}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="">
                        <h3>{rating}</h3>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
}

export default Recipes;
