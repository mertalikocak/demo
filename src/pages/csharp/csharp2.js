import React from "react";
import { Link } from "react-router-dom";

function Csharp2() {
  return (
    <React.Fragment>
      <div class="languageContainer">
        <div class="left_grid"></div>
        <div class="right_grid"></div>
        <div class="main_grid_lesson">
          <div class="lesson_image">
            <img
              src="https://www.yazilimsinifi.com/wp-content/uploads/2019/01/c-sharp-gorsel-2.jpg"
              alt="csharp"
              width="90%"
              className="lesson_png"
            />
          </div>
          <div class="lesson_text">
            <div class="col-lg-8">
              <h1> C# Ekrana Yazdırma</h1>
              <p>
                Programlamada yaptığımız işlerin kullanıcı tarafından
                görüntülenmesini isteriz. Bu işlem için ise
                <strong> ekrana yazdırma</strong> komutları kullanmamız
                gerekmektedir.
              </p>
              <p>
                C# programlama dilinde ekrana yazdırma işlemi yapmak için iki
                yöntem&nbsp;bulunmaktadır. Bu yöntemler:
              </p>
              <ol>
                <li>
                  <strong>Console.WriteLine();</strong>
                </li>
                <li>
                  <strong>Console.Write();&nbsp;</strong>
                </li>
              </ol>
              <h2>Ekrana Yazdırma Komutları</h2>
              <h3>1-) Console.WriteLine();</h3>
              <p>
                Yazdıracağımız değişkenleri veya yazıları alt alta yazdırmak
                istediğimiz zaman kullandığımız komut Console.WriteLine();
                komutudur.. Ekrana yazdırma işleminden sonra imleç yazdırılan
                ifadenin alt satırında bekleme işlemi yapar.
              </p>
              <p>
                <u>
                  <strong>Console.WriteLine() Komutu Kullanımı:</strong>
                </u>
              </p>
              <pre>
                <code class="language-cs hljs ">
                  <p>
                    Console.WriteLine(<span class="hljs-string">"Merhaba"</span>
                    );
                  </p>
                  <p>
                    Console.WriteLine(<span class="hljs-string">"AZKOD"</span>);
                  </p>
                  Ekrana Yazdırılan: <p>Merhaba</p> <p>AZKOD</p>
                </code>
              </pre>
              <h3>2-) Console.Write();</h3>
              <p>
                Yazdıracağımız değişkenleri veya yazıları yan yana yazdırmak
                istediğimiz zaman kullandığımız komut Console.Write();
                komutudur.. Ekrana yazdırma işleminden sonra imleç yazdırılan
                ifadenin hemen yanında bekleme işlemi yapar.
              </p>
              <p>
                <u>
                  <strong>Console.Write() Komutu Kullanımı:</strong>
                </u>
              </p>
              <pre>
                <code class="language-cs hljs ">
                  <p>
                    Console.Write(<span class="hljs-string">"Merhaba "</span>);
                  </p>
                  <p>
                    Console.Write(<span class="hljs-string">"AZKOD"</span>);
                  </p>
                  Ekrana Yazdırılan: Merhaba AZKOD
                </code>
              </pre>
              <p>
                <strong>
                  <span>&nbsp;C# Ekrana yazdırma dersimizde bitmiştir.</span>
                </strong>
                İlk örneğimizi yapmak için adım adım ilerliyoruz. Bu dersimizde
                C# programlama dilinde ekrana nasıl yazdırma işlemleri yapıldığı
                ve kaç türlü yazdırma komutu olduğunu anlatmaya çalıştık.
              </p>
              <div className="space"></div>
              <table class="table">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span>Önceki Ders:</span>
                      </strong>
                      <Link to="/csharp1">
                        <strong>C# Nedir?</strong>
                      </Link>
                    </td>

                    <td>
                      <strong>
                        <span>Sonraki Ders:</span>
                      </strong>

                      <strong>C# Ekranda Durdurma(Yakında)</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              Bu dersin sahibi:
              <a href="https://www.azkod.com/csharp/c-nedir">azkod.com</a>
            </div>
          </div>

          <div class="navigator">
            <span className="navigator-item">
              <Link to="/csharp1" className="navigator-item-link">
                &lt; &lt;
              </Link>
            </span>
            <span className="navigator-item">
              <Link to="/csharp1" className="navigator-item-link">
                &lt;
              </Link>
            </span>

            <span className="navigator-item">
              <Link to="/csharp1" className="navigator-item-link">
                1
              </Link>
            </span>
            <span className="navigator-item">
              <Link to="/csharp2" className="navigator-item-link">
                2
              </Link>
            </span>
            <span className="navigator-item">
              <Link to="/csharp1" className="navigator-item-link">
                &gt;
              </Link>
            </span>
            <span className="navigator-item">
              <Link to="/csharp1" className="navigator-item-link">
                &gt; &gt;
              </Link>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Csharp2;
