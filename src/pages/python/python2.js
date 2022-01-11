import React from "react";
import { Link } from "react-router-dom";

function Python2() {
  return (
    <React.Fragment>
      <div class="languageContainer">
        <div class="left_grid"></div>
        <div class="right_grid"></div>
        <div class="main_grid_lesson">
          <div class="lesson_image">
            <img
              src="https://opencampus.com.tr/wp-content/uploads/2020/07/python-logo-master-v3-TM-flattened.png"
              alt="python"
              width="90%"
              className="lesson_png"
            />
          </div>
          <div class="lesson_text">
            <div class="col-lg-8">
              <h1> Python Kurulumu</h1>

              <p>
                Python programının kurulumunu yapmak için kendi sayfasından
                indirmenizi ve kurulum yapmanızı tavsiye ederim. Python
                programının kurulumunun nasıl yapıldığını adım adım sizlere
                anlatalım.&nbsp;
              </p>

              <p>
                İlk olarak python programının kendi sayfası olan&nbsp;
                <a href="https://www.python.org/downloads/">
                  https://www.python.org/downloads
                </a>
                &nbsp;bölümünden kendi işletim sistemimize uygun olan versiyonu
                seçelim.
              </p>

              <p>
                İşletim sistemimize uygun olan versiyon üzerine tıkladıktan
                sonra indirme işlemi başlayacaktır.&nbsp;
              </p>

              <p>Kurulum işlemini adım adım anlatalım:</p>

              <ul>
                <li>
                  İndirdiğimiz kurulum dosyasına çift tıklayarak çalıştıralım.
                </li>
                <li>
                  Karşımıza gelen ekranda{" "}
                  <strong>Customize installation</strong> seçeneğini seçelim.
                </li>
                <li>
                  Kurulum ekranında karşımıza gelen seçenekleri{" "}
                  <strong>değiştirmemeye </strong>dikkat edelim. Özellikle{" "}
                  <strong>pip </strong>seçeneğinin <strong>seçili </strong>
                  olmasına dikkat edelim. Bu seçenek ile ilerleyen zamanlarda
                  yeni kütüphaneler ekleyebiliriz.
                </li>
                <li>
                  <strong>Next </strong>diyerek kurulum dosyalarımızın hangi{" "}
                  <strong>konuma </strong>ekleneceğini seçebiliriz.
                  Değiştirmesenizde herhangi bir sorun çıkarmayacaktır.
                </li>
                <li>
                  <strong>Install </strong>butonuna tıkladığımızda kurulumumuz
                  tamamlanacaktır.
                </li>
                <li>
                  Kurulum tamamlandığında <strong>Başlat </strong>menüsüne{" "}
                  <strong>python </strong>yazarak veya{" "}
                  <strong>Tüm programlar</strong> bölümünden{" "}
                  <strong>python </strong>programımızı bulun{" "}
                  <strong>IDLE </strong>(Python) yazan uygulamaya tıklayarak
                  program <strong>editörümüzü </strong>açabiliriz.
                </li>
                <li>
                  Kodlarımızı yazdıktan sonra <strong>kaydetmemiz </strong>
                  gerekmekte ve <strong>Run </strong>menüsünden{" "}
                  <strong>Run Module</strong> seçeneğine tıklayarak yazdığımız
                  kodları çalıştırabiliriz.&nbsp;
                </li>
              </ul>

              <p>
                Python programının kurulumunu bu şekildedir. Yukarıdaki adımları
                takip ettiğinizde sorunsuz bir şekilde kurulumu
                tamamlayabilirsiniz.&nbsp;
              </p>

              <table class="table space">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span>Önceki Ders:</span>
                      </strong>
                      <Link to="/python1">
                        <strong>Python Nedir?</strong>
                      </Link>
                    </td>

                    <td>
                      <strong>
                        <span>Sonraki Ders:</span>
                      </strong>
                      <strong>Python Yorum(Yakında)</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            Bu dersin sahibi:{" "}
            <a href="https://www.azkod.com/python/python-nedir">azkod.com</a>
          </div>

          <div class="navigator">
            <span className="navigator-item">
              <Link to="/python1" className="navigator-item-link">
                &lt; &lt;
              </Link>
            </span>
            <span className="navigator-item">
              <Link to="/python1" className="navigator-item-link">
                &lt;
              </Link>
            </span>

            <span className="navigator-item">
              <Link to="/python1" className="navigator-item-link">
                1
              </Link>
            </span>
            <span className="navigator-item">
              <Link to="/python2" className="navigator-item-link">
                2
              </Link>
            </span>
            <span className="navigator-item">
              <Link to="/python2" className="navigator-item-link">
                &gt;
              </Link>
            </span>
            <span className="navigator-item">
              <Link to="/python2" className="navigator-item-link">
                &gt; &gt;
              </Link>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Python2;
