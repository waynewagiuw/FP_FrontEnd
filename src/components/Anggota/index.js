import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

const Index = () => {
  const [tim, setTim] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const featuresRef = ref(db, 'tim/');
    onValue(featuresRef, (snapshot) => {
      const data = snapshot.val();
      // Check if data is not null before setting the state
      if (data) {
        // Convert the object to an array before setting the state
        const dataArray = Object.values(data);
        setTim(dataArray);
      }
    });
  }, []);

  return (
    <section id="team___id" className="body-2">
      <h2 className="h__team">Tim Kami</h2>
      <br />
      <br />
      <div className="container___team">
        {tim.map((item) => {
          return (
            <div className="card__team" key={item.id}>
              <div className="content__team">
                <div className="profile">
                  <img src={item.image} alt="" width={150} />
                </div>
                <div className="detail">
                  <h2>{item.nama}</h2>
                  <h4 className="text___4">{item.jabatan}</h4>
                  <div className="social">
                    <a className="icon__team" href="/#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a className="icon__team" href="/#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a className="icon__team" href="/#">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Index;
