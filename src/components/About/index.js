import React from "react";
import about from "../../assets/img/nasi.png";

const index = () => {
  return (
    <section id="about">
      <div className="about-wrapper container">
        <div className="about-text">
          <p className="small">Tentang Kami</p>
          <h2>Eat Well</h2>
          <p>
          Eat Well adalah restoran yang mengusung konsep makanan sehat dan lezat. Dengan keahlian kami dalam memadukan bahan-bahan berkualitas tinggi, kami berkomitmen untuk menyajikan hidangan lezat yang tidak hanya memanjakan lidah Anda tetapi juga baik untuk kesehatan Anda.
          </p>
        </div>
        <div className="about-img">
          <img src={about} alt="food"/>
        </div>
      </div>
    </section>
  );
};

export default index;
