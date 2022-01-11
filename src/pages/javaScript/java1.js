import React from "react";
import { Link } from "react-router-dom";

function Java() {
  return (
    <React.Fragment>
      <div class="languageContainer">
        <div class="left_grid"></div>
        <div class="right_grid"></div>
        <div class="main_grid_lesson">
          <div class="lesson_image">
            <img
              src="https://huseyinyaman.com/wp-content/uploads/2019/12/java-script1.jpg"
              alt="java"
              width="90%"
              className="lesson_png"
            />
          </div>
          <div class="lesson_text">
            <div class="col-lg-8">
              <h1> JavaScript Nedir?</h1>

              <p>
                JavaScript kısaca kullanıcıyla <strong>etkileşim </strong>
                halinde olunması için kullanılan bir dildir.
              </p>

              <p>
                Javascript dili, web sitelerinde{" "}
                <strong>dinamik içerik sağlamak</strong> ve{" "}
                <strong>kullanıcıyla iletişim kurmak</strong> için kullanılan,{" "}
                <strong>istemci </strong>tarafında çalışan bir dildir.
              </p>

              <p>
                <strong>İstemci tarafında</strong>&nbsp;çalışan demek
                kullanıcının bilgisayarında çalışması demektir.
              </p>

              <h2>Neden JavaScript'i Öğrenmeliyiz?</h2>

              <p>
                JavaScript,&nbsp;tüm web site
                geliştiricilerinin&nbsp;öğrenmesi&nbsp;gereken&nbsp;
                <span>3 dilden</span>
                &nbsp;biridir&nbsp;:
              </p>

              <p>
                &nbsp;&nbsp; 1.&nbsp;<strong>HTML</strong>, web sitelerinin
                içeriğini tanımlamak için kullanılır.
              </p>

              <p>
                &nbsp;&nbsp; 2.&nbsp;<strong>CSS</strong>, Web sitelerinin
                düzenini tasarımını belirlemek için&nbsp;kullanılır.
              </p>

              <p>
                &nbsp;&nbsp; 3.&nbsp;<strong>JavaScript</strong>, Web
                sayfalarının davranışını programlamak ve kullanıcıyla iletişim
                sağlamak için&nbsp;kullanılır.
              </p>

              <h3>
                <strong>
                  JavaScript Öğrenirken Başka Dilleri Bilmemize Gerek Var mı?
                </strong>
              </h3>

              <p>
                JavaScript dilini öğrenmek için Html dilinde temel düzeyde bilgi
                sahibi olmanız gerekmektedir.
              </p>

              <p>
                <strong>
                  <u>*** Not:</u>
                </strong>
              </p>

              <p>
                <strong>JavaScript </strong>ve <strong>Java</strong>, hem
                konsept hem de tasarım açısından tamamen farklı dillerdir.{" "}
                <strong>ECMAScript</strong>, dilin resmi adıdır.
              </p>

              <h3>
                <strong>
                  <u>JavaScript ile neler yapılabilir ?</u>
                </strong>
              </h3>

              <ul>
                <li>HTML İçeriğini Değiştirebiliriz</li>
                <li>HTML Özellik Değerlerini Değiştirebiliriz</li>
                <li>HTML Stillerini(CSS) Değiştirebiliriz</li>
                <li>HTML Ögelerini Gizleyebiliriz</li>
                <li>HTML Ögelerini Gösterebiliriz</li>
              </ul>

              <p>
                <span>
                  İlk dersimiz olan JavaScript nedir konulu dersimiz bitmiştir.
                </span>{" "}
                Bu dersimizde JavaScript nedir, neden JavaScript kullanmalıyız,
                JavaScript öğrenirken başka dilleri bilmemize gerek varmıdır,
                JavaScript ile neler yapılabilir gibi soruların cevabını vermeye
                çalıştık.
              </p>

              <table class="table">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span>Sonraki Ders:</span>
                      </strong>
                      <Link to="/java2">
                        <strong>JS Nasıl Kullanılır?</strong>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              Bu dersin sahibi:
              <a href="https://www.azkod.com/javascript/javascript-nedir">
                azkod.com
              </a>
            </div>
          </div>

          <div class="navigator">
            <span className="navigator-item">
              <Link to="/java1" className="navigator-item-link">
                &lt; &lt;
              </Link>
            </span>
            <span className="navigator-item">
              <Link to="/java1" className="navigator-item-link">
                &lt;
              </Link>
            </span>

            <span className="navigator-item">
              <Link to="/java1" className="navigator-item-link">
                1
              </Link>
            </span>
            <span className="navigator-item">
              <Link to="/java2" className="navigator-item-link">
                2
              </Link>
            </span>
            <span className="navigator-item">
              <Link to="/java2" className="navigator-item-link">
                &gt;
              </Link>
            </span>
            <span className="navigator-item">
              <Link to="/java2" className="navigator-item-link">
                &gt; &gt;
              </Link>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Java;
