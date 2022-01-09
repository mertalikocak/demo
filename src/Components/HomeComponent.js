import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div class="homeContainer">
        <div class="main_right"></div>
        <div class="left_grid"></div>
        <div class="main_grid"></div>

        <div class="a_grid main_element">
          <div class="a_grid_image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png"
              alt="C# image"
              width="70%"
            />
          </div>
          <div class="a_grid_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            iure voluptate maxime quos totam sapiente reiciendis animi autem
            exercitationem cum!
            <br />
          </div>
          <div className="a_grid_button">
            {" "}
            <Link to="/csharp" className="katilbutonu">
              <span>Derse Başla</span>
            </Link>
          </div>
        </div>

        <div class="b_grid main_element">
          <div class="b_grid_image">
            <img
              src="https://winxptalk.com/wp-content/uploads/2020/10/PROBLEME-AVEC-JAVA-SUR-WINDOWS-10.png"
              alt="C# image"
              width="70%"
            />
          </div>
          <div class="b_grid_text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            eum, nostrum doloribus a fuga eaque nesciunt dolores perferendis
            voluptatem sunt.
            <br />
          </div>
          <div className="b_grid_button">
            <Link to="/java" className="katilbutonu">
              <span>Derse Başla</span>
            </Link>
          </div>
        </div>
        <div class="c_grid main_element">
          <div class="c_grid_image">
            <img
              src="https://gunesyilmaz.com/wp-content/uploads/2020/03/python.png"
              alt="C# image"
              width="70%"
            />
          </div>
          <div class="c_grid_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            repellendus ad asperiores facilis odio ea velit nam illum.
            Reprehenderit, laborum?
            <br />
          </div>
          <div className="c_grid_button">
            <Link to="/python" className="katilbutonu">
              <span>Derse Başla</span>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
