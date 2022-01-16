import React from "react";

function About() {
  return (
    <div class="aboutContainer">
      <div class="main_grid_about">
        <div class="about_text">
          <h1>Biz Kimiz? :)</h1>
          <p id="about">
            Mert Ali Koçak Savaş Soğancı Umut Demiray ve Mustafa Ege Alanya
            olmak üzere dört arkadaş sizlere kodlama öğretmek amacıyla bir site
            tasarladık. Alt kısımda websitesini tasarlarken ki anlarımızı
            görebilirsiniz.
          </p>
        </div>
        <div class="about_image">
          <img src={require("../img/2.jpg")} alt="foto" className="album" />
          <img src={require("../img/3.jpg")} alt="foto" className="album" />
          <img src={require("../img/6.jpg")} alt="foto" className="album" />
          <img src={require("../img/4.jpg")} alt="foto" className="album" />
          <img src={require("../img/5.jpg")} alt="foto" className="album" />
          <img src={require("../img/1.jpg")} alt="foto" className="album" />
        </div>
      </div>
      <div class="left_grid"></div>
      <div class="right_grid"></div>
    </div>
  );
}

export default About;
