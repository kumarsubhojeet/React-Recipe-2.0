import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { BackTop } from "antd";

export default function Recipe() {
  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 50,
    backgroundColor: "#8d0801",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  };

  let history = useHistory();

  const { name } = useParams();
  console.log(name);

  const [datas, setdata] = useState([]);
  const [ing, seting] = useState([]);

  const Api = async () => {
    try {
      const res = await axios.get(
        `https://api.edamam.com/api/recipes/v2/${name}?type=public&app_id=9fb66256&app_key=5108d9c8b9c54cf8dbf31fee7adb293c`
      );

      setdata(res.data.recipe);
      seting(res.data.recipe.ingredients);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Api();
  }, [name]);

  const back = () => {
    history.push("/");
  };

  return (
    <div className="Recipe_main">
      <div className="back-btn" onClick={back}>
        <i class="far fa-hand-point-left back_btn"></i>
      </div>

      <section>
        <div className="recipies">
          <div className="recipies_img">
            <img src={datas.image} className="datas_image" alt="Error" />
          </div>

          <div className="recipies_details">
            <h1>{datas.label}</h1>
            <h4>
              Source:{" "}
              <span style={{ fontWeight: "300", color: "#641e16 " }}>
                {datas.source}
              </span>
            </h4>
            <h4>
              MealType:{" "}
              <span style={{ fontWeight: "300", color: "#641e16 " }}>
                {datas.mealType}
              </span>{" "}
            </h4>
            <h4>
              CuisineType:{" "}
              <span style={{ fontWeight: "300", color: "#641e16 " }}>
                {datas.cuisineType}
              </span>{" "}
            </h4>
            <h4>
              DishType:{" "}
              <span style={{ fontWeight: "300", color: "#641e16 " }}>
                {datas.dishType}
              </span>{" "}
            </h4>
          </div>
        </div>

        <div className="recipe_ingredientLines">
          <h2 style={{ margin: "5px auto", color: "#641e16" }}>
            Ingredients:{" "}
          </h2>
          {ing.map((ings) => (
            <>
              <div className="ing_main">
                <div className="ing-img">
                  <img
                    src={ings.image}
                    className="ings-image"
                    alt="Not Availabe"
                  />
                </div>

                <div className="ing-details">
                  <h5>{ings.text}</h5>
                  <h5>{ings.quantity}</h5>
                  <h5>{ings.measure}</h5>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>

        <BackTop>
          <div style={style}>
            <i class="fas fa-angle-up"></i>
          </div>
        </BackTop>
      </section>
    </div>
  );
}
