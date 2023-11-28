import React from 'react'
import Mitch from "../../../src/assets/img/mitch.jpeg";
import Wyn from "../../../src/assets/img/wyn.jpg";
import stelly from "../../../src/assets/img/stelly.jpeg";
import bev from "../../../src/assets/img/bev.jpeg";
import intan from "../../../src/assets/img/intan.jpeg";

const index = () => {
    return (
        <section id="team___id" className="body-2">
            <h2 className="h__team">Tim Kami</h2>
            <br />
            <br />
            <div className="container___team">
                <div className="card__team">
                <div className="content__team">
                    <div className="profile">
                    <img src={Mitch} alt="mitch" width={130}  />
                    </div>
                    <div className="detail">
                    <h2>Syaloom Mumbunan</h2> 
                    <h4 className="text___4">MEMBER</h4>
                    <div className="social">
                        <a className="icon__team" href="/#"><i className="fa fa-facebook" /></a>
                        <a className="icon__team" href="/#"><i className="fa fa-instagram" /></a>
                        <a className="icon__team" href="/#"><i className="fa fa-twitter" /></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card__team">
                <div className="content__team">
                    <div className="profile">
                    <img src={Wyn} alt="wyn" width={150}  />
                    </div>
                    <div className="detail">
                        <h2>Wayne Wagiuw</h2>
                        <h4 className="text___4">LEADER</h4>
                        <div className="social">
                            <a className="icon__team" href="/#"><i className="fa fa-facebook" /></a>
                            <a className="icon__team" href="/#"><i className="fa fa-instagram" /></a>
                            <a className="icon__team" href="/#"><i className="fa fa-twitter" /></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card__team">
                <div className="content__team">
                    <div className="profile">
                    <img src={intan} alt="intan" width={150}  />
                    </div>
                    <div className="detail">
                    <h2>Intan Kamuh</h2>
                    <h4 className="text___4">MEMBER</h4>
                    <div className="social">
                        <a className="icon__team" href="/#"><i className="fa fa-facebook" /></a>
                        <a className="icon__team" href="/#"><i className="fa fa-instagram" /></a>
                        <a className="icon__team" href="/#"><i className="fa fa-twitter" /></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card__team">
                <div className="content__team">
                    <div className="profile">
                    <img src={stelly} alt="stelly" width={130}  />
                    </div>
                    <div className="detail">
                    <h2>Wayne Lamansiang</h2>
                    <h4 className="text___4">MEMBER</h4>
                    <div className="social">
                        <a className="icon__team" href="https://www.facebook.com/skyway.j"><i className="fa fa-facebook" /></a>
                        <a className="icon__team" href="https://www.instagram.com/kjoell_/"><i className="fa fa-instagram" /></a>
                        <a className="icon__team" href="/#"><i className="fa fa-twitter" /></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="card__team">
                <div className="content__team">
                    <div className="profile">
                    <img src={bev} alt="bev" width={150}  />
                    </div>
                    <div className="detail">
                    <h2>Beverly Lukas</h2>
                    <h4 className="text___4">MEMBER</h4>
                    <div className="social">
                        <a className="icon__team" href="/#"><i className="fa fa-facebook" /></a>
                        <a className="icon__team" href="/#"><i className="fa fa-instagram" /></a>
                        <a className="icon__team" href="/#"><i className="fa fa-twitter" /></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default index