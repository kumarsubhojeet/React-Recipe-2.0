import React, { useState , useEffect } from "react";
import axios from "axios";
import { Link , useHistory ,useParams } from "react-router-dom";
import { BackTop } from "antd";
import mobile from "../Svg/mobile.svg";

export default function Home() {

  let {name} = useParams();


  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 50,
    backgroundColor: " #2471a3 ",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  };

  const [recipes, recipeUpdate] = useState([]);

 const apiid = process.env.REACT_APP_AID
 const appkey = process.env.REACT_APP_AK

  const btnclick = async () => {
    try {
      const res = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${name}&app_id=${apiid}&app_key=${appkey}`
      );
      recipeUpdate(res.data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    btnclick();
  }, [name])


  return (
    <div className="home_main">
    
    <h2 style={{textAlign:'center'}}>{name}</h2>
      <section>
        <div className="row">
          {recipes.map((rec) => (
            <div className="col-md-3 col-12">
              <div class="card">
                <img class="card-img" src={rec.recipe.image} alt="Error" />

                <div class="card-body">
                  <h4 style={{ fontWeight: "700" }}>{rec.recipe.label}</h4>

                  <div className="mdet">
                    <h5 className="first">{rec.recipe.dietLabels}</h5>
                    <h5 className="Secound">{rec.recipe.cuisineType}</h5>
                  </div>

                  <h5>
                    By-{" "}
                    <span style={{ fontWeight: "300" }}>
                      {rec.recipe.source}
                    </span>
                  </h5>

                  <div className="btnn">
                    <Link
                      to={`/Recipe/${rec.recipe.uri.split("#").slice(-1)}`}
                      className="More-btn"
                    >
                      More
                    </Link>
                    {/* <p>{rec.recipe.uri.split('#').slice(-1)}</p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <BackTop>
        <div style={style}>
          <i class="fas fa-angle-up"></i>
        </div>
      </BackTop>
    </div>
  );
}
