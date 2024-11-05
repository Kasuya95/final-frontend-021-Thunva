import React from "react";
import Logo from "../assets/img/Logo.png";

const AboutBox = () => {
  return <section className="section" id="about">
  <section className="section" >
    <div className="top-header">
      <h1>About me</h1>
      <div className="row">
      <div >
        <div className="image">
          <img src={Logo} alt="avatar" />
        </div>
      </div>
        {/** About me 1*/}
        <div className="col">
        <div className="about-info">
          <h3>คติร้านเรา</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nisi pariatur vero deserunt ex quaerat inventore, natus cupiditate dolor, mollitia non aperiam eius sequi. Dolorum doloribus rerum inventore hic ullam.</p>
          
        </div>
        </div>
       
      </div>
      <br />
      <div className="row">
        {/** About me 2*/}
        <div className="col">
        <div className="about-info">
          <h3>ทำไมต้องร้านเรา</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt quibusdam saepe adipisci. Quis sunt nostrum, dolor ut maiores sint, quibusdam neque consequatur ipsa, excepturi cum explicabo rerum enim praesentium!</p>
        </div>
        </div>
        <div >
        <div className="image">
          <img src={Logo} alt="avatar" />
        </div>
      </div>
       
      </div>
    </div>
  </section>

  </section>
};
export default AboutBox;
