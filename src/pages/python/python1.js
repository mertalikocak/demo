import React from "react";
import { Link } from "react-router-dom";

function Python() {
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
              <h1> Python Nedir?</h1>

              <p>
                Python dili&nbsp;bir programlama dilidir. Python dili bir çok
                uygulama geliştirimek için kullanılabileceği gibi&nbsp;&nbsp;web
                uygulamaları oluşturmak ve geliştirmek için sunucuda
                kullanılabilir.
              </p>

              <p>
                Python dili&nbsp;popüler bir programlama dilidir.&nbsp;
                <strong>1991</strong> yılında <strong>Guido van Rossum</strong>{" "}
                tarafından oluşturulmuş bir programlama dilidir.
              </p>

              <h2>Python ne için kullanılır?</h2>

              <ul>
                <li>Web geliştirme (sunucu tarafı)</li>
                <li>Yazılım geliştirme</li>
                <li>Matematiksel İşlemleri</li>
                <li>
                  Sistem komut dosyası gibi&nbsp;işlemleri için kullanılır.
                </li>
              </ul>

              <h2>Python ile ne yapılabilir?</h2>

              <ul>
                <li>Python, web siteleri oluşturmak için kullanılabilir.</li>
                <li>
                  Python, iş akışları oluşturmak için yazılımla birlikte
                  kullanılabilir.
                </li>
                <li>Python veritabanı işlemleri yapılabilir.</li>
                <li>Dosya okuma ve yazma işlemleri yapılabilir</li>
                <li>
                  Python, büyük verileri işlemek&nbsp;için kullanılabilir.
                </li>
                <li>
                  Python dili matematiksel işlemleri yapmak için kullanılır.
                </li>
                <li>
                  Python dili hızlı bir dil olduğu için, hazır yazılım
                  geliştirme sistemleri için kullanılabilir.
                </li>
                <li>Arama motoru yapılabilir.</li>
                <li>
                  RaspBerry Pi ile kullanılarak ev otomasyonu yapılabilir.
                </li>
                <li>Oyun geliştirilebilir.</li>
                <li>Mobil uygulamalar geliştirilebilir.</li>
                <li>Örümcek yapılabilir. Web sitelerini taramak için.</li>
              </ul>

              <p>
                <span>
                  <span>Neden Python Kullanmalıyız?</span>
                </span>
              </p>

              <ul>
                <li>
                  Python dili farklı işletim sistemlerinde çalışır (Windows,
                  Mac, Linux, Raspberry Pi vb.).
                </li>
                <li>
                  Python'un ingilizceye benzer basit bir yazımı&nbsp;vardır.
                </li>
                <li>
                  Python, geliştiricilerin, diğer bazı programlama dillerinden
                  daha az satırlı programlar yazmasına izin veren sözdizimine
                  sahiptir.
                </li>
                <li>
                  Python dilinde kod yazıldığı anda çalıştırılabilir.&nbsp;Bu,
                  işlemlerin&nbsp;çok hızlı bir şekilde çalıştırılabileceği
                  anlamına gelmektedir.
                </li>
                <li>
                  Python işlemsel, nesne yönelimli veya işlevsel bir şekilde
                  kullanılabilir
                </li>
              </ul>

              <p>
                <strong>
                  <span>
                    Python dilinde Python nedir? yani ilk dersimiz bitmiştir.{" "}
                  </span>
                </strong>
                Bu dersimizde python nedir, kaç yılında ve kim tarafından
                geliştirilmiştir, python ile ne yapılabilir ve neden python
                kullanmalıyız sorularını cevapladık.
              </p>

              <table class="table">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span>Sonraki Ders:</span>
                      </strong>
                      <Link to="/python2">
                        <strong> Python Kurulumu</strong>
                      </Link>
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
export default Python;
