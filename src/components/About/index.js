import React from "react";
import about from "../../assets/img/nasi.png";

const index = () => {
  return (
    <section id="about">
      <div className="about-wrapper container">
        <div className="about-text">
          <p className="small">Tentang Kami</p>
          <h2>Mi Gori</h2>
          <p>
            Mi Gori, Airmadidi merupakan sebuah tempat makan yang berada di Tomohon. Rumah makan ini menyajikan nasi gori ori/sosis/tuna/telur/sosis&telur dan juga mi gori telur/sosis/telur&sosis yang dibanderol dengan harga yang murah dan bersahabat dengan kantong Anda. Jika Anda mencari daftar
            harga menu Mie Gori, Airmadidi, Anda berada di tempat yang tepat. Di bawah ini menu Mi Gori yang dijual beserta Harganya.
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
