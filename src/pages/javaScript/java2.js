import React from "react";
import { Link } from "react-router-dom";

function Java2() {
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
              <h1> JS Nasıl Kullanılır?</h1>

              <p>
                <strong>JavaScript kodları</strong>,&nbsp; kullanıcıyla
                etkileşim halinde olmak için kullanılmaktadır. JavaScript
                kodlarını kullanmak için belirli kurallar vardır. Javascript
                kodları belirli yöntemler ile çağırılmakta ve kullanılmaktadır.
              </p>

              <p>
                <u>
                  <strong>JavaScript kodları:</strong>
                </u>
              </p>

              <ul>
                <li>Dahili (Html kodları içinde)</li>
                <li>Harici</li>
              </ul>

              <p>
                olmak üzere <strong>iki</strong> şekilde kullanılabilir.
              </p>

              <h2>Dahili olarak JavaScript Kullanımı</h2>

              <p>
                Dahili olarak ise HTML etiketleri&nbsp;içinde kullanılmaktadır.
                JavaScript kodlarının{" "}
                <strong>&lt;head&gt;… &lt;/head&gt;</strong> etiketleri arasında
                kullanılması önerilir. JavaScript kodları sayfanın herhangi bir
                yerinde kullanılsa bile herhangi bir&nbsp;sorun
                çıkartmamaktadır.
              </p>

              <h3>
                <strong>
                  <u>Dahili JavaScript Kullanımı :</u>
                </strong>
              </h3>

              <pre>
                <code class="language-javascript hljs ">
                  &lt;script type=
                  <span class="hljs-string">"text/javascript"</span> &gt;
                  <span class="hljs-comment">// kodlar bu araya yazılır</span>
                  &lt;<span class="hljs-regexp">/script&gt;</span>
                </code>
              </pre>

              <p>
                <strong>
                  <span>***Not:</span>
                </strong>{" "}
                Eskiden harici ve dahili JavaScript kodlarında&nbsp;
                <strong>
                  <span>type="text/javascript"</span>
                  &nbsp;
                </strong>
                kullanılmaktaydı. Şuan <strong>type </strong>komutunun
                kullanılmasına gerek yoktur.Kullanılsa da herhangi bir sorun
                çıkarmaz.
              </p>

              <pre>
                <code class="language-javascript hljs ">
                  &lt;script&gt;
                  <span class="hljs-comment">// kodlar bu alana yazılır</span>
                  &lt;<span class="hljs-regexp">/script&gt;</span>
                </code>
              </pre>

              <h2>&nbsp;</h2>

              <h2>Harici olarak JavaScript kullanımı :</h2>

              <p>
                JavaScript kodlarını dışardan çağırdığımızda kullandığımız
                yöntem harici olarak JavaScript kullanma yöntemidir. Harici
                olarak kullandığımız JavaScript kodlarımızın uzantısı&nbsp;
                <strong>
                  <span>.js</span>
                </strong>
                &nbsp;olması gerekmektedir.
              </p>

              <h3>
                <strong>
                  <u>Harici JavaScript Kullanımı :</u>
                </strong>
              </h3>

              <pre>
                <code class="language-javascript hljs ">
                  &lt;script src=
                  <span class="hljs-string">"kod_adresi.js"</span> &nbsp;type=
                  <span class="hljs-string">"text/javascript"</span> &gt;{" "}
                  <span class="xml">
                    <span class="hljs-tag">
                      &lt;/<span class="hljs-title">script</span>&gt;
                    </span>
                  </span>
                </code>
              </pre>

              <p>veya</p>

              <pre>
                <code class="language-javascript hljs ">
                  &lt;script src=
                  <span class="hljs-string">"kod_adresi.js"</span>&gt;{" "}
                  <span class="xml">
                    <span class="hljs-tag">
                      &lt;/<span class="hljs-title">script</span>&gt;
                    </span>
                  </span>
                </code>
              </pre>

              <p>
                <strong>
                  <span>
                    JavaScript kodları nasıl kullanılır? dersimiz bitmiştir.
                  </span>
                </strong>{" "}
                Bu dersimizde JavaScript kodlarının nasıl kullanıldığı,hangi
                yöntemler ile kullanıldığı, harici kullanımı, dahili
                kullanımı&nbsp;hakkında bilgi verdik. Diğer JS derslerimiz
                hakkında bilgi almak için{" "}
                <a href="https://www.azkod.com/javascript">
                  <strong>JavaScript Dersleri</strong>
                </a>{" "}
                sayfasına bakabilirsiniz.
              </p>

              <table class="table">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span>Önceki Ders:</span>
                      </strong>
                      <Link to="/java1">
                        <strong>JavaScript Nedir?</strong>
                      </Link>
                    </td>

                    <td>
                      <strong>
                        <span>Sonraki Ders:</span>
                      </strong>
                      <strong>JS Yazım Kuralları(Yakında)</strong>
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
export default Java2;
