import React from 'react'

export default function Crousal() {
    return (
        <div>
          <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="Crousal_img" src={`https://source.unsplash.com/1600x900/?food,Pizza`} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="Crousal_img" src={`https://source.unsplash.com/1600x900/?Drink,fruits`} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="Crousal_img" src={`https://source.unsplash.com/1600x900/?beverages,food`} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="Crousal_img" src={`https://source.unsplash.com/1600x900/?noodles,bread`} alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="Crousal_img" src={`https://source.unsplash.com/1600x900/?burger,fries`} alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        </div>
    )
}
