import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div class="homeContainer">
        {" "}
        {/* Grid mantığıyla bir anasayfa tasarladık */}
        <div class="right_grid"></div>
        <div class="left_grid"></div>
        <div class="main_grid">
          {/* Esas içerikler burda */}
          <div class="a_grid main_element">
            {/* Main grid 3 adet gridten oluşuyor (a,b,c) */}
            <div class="a_grid_image">
              {/* Bu gridler kendi içinde img text ve button olmak üzere 3 gridden oluşuyor */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png"
                alt="C# image"
                width="70%"
              />
            </div>
            <div class="a_grid_text">
              {/* yazı kısmı  */}
              <h2>C#</h2>
              <p>
                C#, Microsoft tarafından.NET Teknolojisi için geliştirilmiş yeni
                nesil programlama dilidir.
              </p>
              <p>
                C# özellikle nesne yönelimli programlamakavramının gelişmesine
                katkıda bulunan en aktif programlama dillerinden biridir.
              </p>
              <p>Haydi sende derse katıl ve C# öğrenmeye başla.</p>
              <br />
            </div>
            <div className="a_grid_button">
              {/* katıl kısmı */}
              <Link to="/course/cs" className="katilbutonu">
                {/* Butonlarda yönlendirme yapıyoruz */}
                <span>Derse Başla</span>
              </Link>
            </div>
          </div>

          <div class="b_grid main_element">
            <div class="b_grid_image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                alt="C# image"
                width="70%"
              />
            </div>
            <div class="b_grid_text">
              <h2>JavaScript</h2>
              <p>
                JavaScript bir çok kullanım alanı olan çok yönlü bir dildir.
              </p>
              <p>
                Javascript dili, web sitelerinde dinamik içerik sağlamak ve
                kullanıcıyla iletişim kurmak için kullanılan, istemci tarafında
                çalışan bir dildir.
              </p>
              <p>
                Sende bu zengin dilin temellerini öğrenmek istiyorsan derslere
                başla.
              </p>
              <br />
            </div>
            <div className="b_grid_button">
              <Link to="/course/js" className="katilbutonu">
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
              <h2>Python</h2>
              <p>
                Python dili bir programlama dilidir. Python dili bir çok
                uygulama geliştirimek için kullanılabileceği gibi web
                uygulamaları oluşturmak ve geliştirmek için sunucuda
                kullanılabilir.
              </p>
              <p>
                Python diğer dillere göre insan diline yakın olmasından kaynaklı
                kolay öğrenilmesi ile de öne çıkar.
              </p>
              <p>Haydi sende derse başla ve Python dünyasına giriş yap.</p>
              <br />
            </div>
            <div className="c_grid_button">
              <Link to="/course/py" className="katilbutonu">
                <span>Derse Başla</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
