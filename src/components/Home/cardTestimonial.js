import React from 'react'
import style from "../Home/cardTestimonial.module.css"
import imageSuvidh26 from "../media/106.jpg";
import imageSuvidh27 from "../media/15.jpg"
import imageSuvidh28 from "../media/28.jpg";
import imageSuvidh29 from "../media/3.jpg";
import imageSuvidh30 from "../media/5 (1).jpg";
import imageSuvidh31 from "../media/84.jpg";
import imageSuvidh32 from "../media/89.jpg";
import imageSuvidh33 from "../media/92.jpg";
import imageSuvidh34 from "../media/94.jpg";

export default function cardTestimonial() {
  return (
    <div className={style["cardTestimonialbody"]}>
      <div className={style["background"]}></div>
    <div className={style["background-texture"]}></div>

    <section className={style["carousel"]}>
      <h2 className={style["categories__title"]}>Testimonial</h2>
      <div className={style["carousel__container"]}>
        <div className={style["carousel-item"]}>
          <img
            className={style["carousel-item__img"]}
            src={imageSuvidh26}
            alt="people"
          />
          <div className={style["carousel-item__details"]}>
            <div className={style["controls"]}>
              <span className={style["fas fa-play-circle"]}></span>
              <span className={style["fas fa-plus-circle"]}></span>
            </div>
            {/* <h5 className={style["carousel-item__details--title"]}>Descriptive Title</h5> */}
            {/* <h6 className={style["carousel-item__details--subtitle"]}>Date and Duration</h6> */}
          </div>
        </div>
        <div className={style["carousel-item"]}>
          <img
            className={style["carousel-item__img"]}
            src={imageSuvidh27}
            alt="people"
          />
          <div className={style["carousel-item__details"]}>
            <div className={style["controls"]}>
              <span className={style["fas fa-play-circle"]}></span>
              <span className={style["fas fa-plus-circle"]}></span>
            </div>
            {/* <h5 className={style["carousel-item__details--title"]}>Descriptive Title</h5> */}
            {/* <h6 className={style["carousel-item__details--subtitle"]}>Date and Duration</h6> */}
          </div>
        </div>
        <div className={style["carousel-item"]}>
          <img
            className={style["carousel-item__img"]}
            src={imageSuvidh28}
            alt="people"
          />
          <div className="carousel-item__details">
            <div className={style["controls"]}>
              <span className={style["fas fa-play-circle"]}></span>
              <span className={style["fas fa-plus-circle"]}></span>
            </div>
            {/* <h5 className={style["carousel-item__details--title"]}>Descriptive Title</h5> */}
            {/* <h6 className={style["carousel-item__details--subtitle"]}>Date and Duration</h6> */}
          </div>
        </div>
        <div className={style["carousel-item"]}>
          <img
            className={style["carousel-item__img"]}
            src={imageSuvidh29}
            alt="people"
          />
          <div className="carousel-item__details">
            <div className={style["controls"]}>
              <span className={style["fas fa-play-circle"]}></span>
              <span className={style["fas fa-plus-circle"]}></span>
            </div>
            {/* <h5 className={style["carousel-item__details--title"]}>Descriptive Title</h5> */}
            {/* <h6 className={style["carousel-item__details--subtitle"]}>Date and Duration</h6> */}
          </div>
        </div>
        <div className={style["carousel-item"]}>
          <img
            className={style["carousel-item__img"]}
            src={imageSuvidh30}
            alt="people"
          />
          <div className="carousel-item__details">
            <div className={style["controls"]}>
              <span className={style["fas fa-play-circle"]}></span>
              <span className={style["fas fa-plus-circle"]}></span>
            </div>
            {/* <h5 className={style["carousel-item__details--title"]}>Descriptive Title</h5> */}
            {/* <h6 className={style["carousel-item__details--subtitle"]}>Date and Duration</h6> */}
          </div>
        </div>
        <div className={style["carousel-item"]}>
          <img
            className={style["carousel-item__img"]}
            src={imageSuvidh31}
            alt="people"
          />
          <div className="carousel-item__details">
            <div className={style["controls"]}>
              <span className={style["fas fa-play-circle"]}></span>
              <span className={style["fas fa-plus-circle"]}></span>
            </div>
            {/* <h5 className={style["carousel-item__details--title"]}>Descriptive Title</h5> */}
            {/* <h6 className={style["carousel-item__details--subtitle"]}>Date and Duration</h6> */}
          </div>
        </div>
        <div className={style["carousel-item"]}>
          <img
            className={style["carousel-item__img"]}
            src={imageSuvidh32}
            alt="people"
          />
          <div className="carousel-item__details">
            <div className={style["controls"]}>
              <span className={style["fas fa-play-circle"]}></span>
              <span className={style["fas fa-plus-circle"]}></span>
            </div>
            {/* <h5 className={style["carousel-item__details--title"]}>Descriptive Title</h5> */}
            {/* <h6 className={style["carousel-item__details--subtitle"]}>Date and Duration</h6> */}
          </div>
        </div>

        <div className={style["carousel-item"]}>
          <img
            className={style["carousel-item__img"]}
            src={imageSuvidh33}
            alt="people"
          />
          <div className="carousel-item__details">
            <div className={style["controls"]}>
              <span className={style["fas fa-play-circle"]}></span>
              <span className={style["fas fa-plus-circle"]}></span>
            </div>
            {/* <h5 className={style["carousel-item__details--title"]}>Descriptive Title</h5> */}
            {/* <h6 className={style["carousel-item__details--subtitle"]}>Date and Duration</h6> */}
          </div>
        </div>
        <div className={style["carousel-item"]}>
          <img
            className={style["carousel-item__img"]}
            src={imageSuvidh34}
            alt="people"
          />
          <div className="carousel-item__details">
            <div className={style["controls"]}>
              <span className={style["fas fa-play-circle"]}></span>
              <span className={style["fas fa-plus-circle"]}></span>
            </div>
            {/* <h5 className={style["carousel-item__details--title"]}>Descriptive Title</h5> */}
            {/* <h6 className={style["carousel-item__details--subtitle"]}>Date and Duration</h6> */}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
