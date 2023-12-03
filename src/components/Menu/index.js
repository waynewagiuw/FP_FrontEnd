import React from "react";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Index = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const featuresRef = ref(db, "menu/");
    onValue(featuresRef, (snapshot) => {
      const data = snapshot.val();
      // if (data) {
        setMenu(data);
      // }
    });
    // axios
    //   .get("http://localhost:3000/profile")
    //   .then((res) => setFeatures(res.data));
  }, []);

  // eslint-disable-next-line no-lone-blocks
  return (
    <section id="food">
      <h2>Menu Eat Well</h2>
        <div class="food-container container">
          {menu.map((item) => {
            return ( 

              <div class="food-type fruite" key={item.id}>
              <div class="img-container">
                <img
                  src={item.gambar}
                  alt=""
                />
                <div class="img-content">
                  <h3>{item.makanan}</h3>
                  <a href="#food-menu" class="btn btn-primary" target="blank">
                    Pesan
                  </a>
                </div>
              </div>
            </div>


            );
          })}
        </div>    
    </section>
  )

};

export default Index;
