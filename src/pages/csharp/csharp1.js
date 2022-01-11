import React from "react";
import { Link } from "react-router-dom";

function Csharp() {
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
              <h1> C# Nedir?</h1>
              <p>
                <strong>C#,</strong>&nbsp;Microsoft tarafından
                <strong>
                  <span>.NET Teknolojisi</span>
                  &nbsp;
                </strong>
                için geliştirilmiş yeni nesil programlama dilidir.
              </p>
              <p>
                <strong>C# programlama dili</strong>, .NET teknolojisi
                tarafından gelişitirilmiş&nbsp;<strong>orta seviyeli</strong>
                &nbsp;programlama dillerinden biridir.. Yani bu programlama dili
                hem insan diline hem de makine diline eşit mesafede olan bir
                programlama dilidir.&nbsp;Progmralama dilindeki&nbsp;
                <strong>orta kelimesi </strong>programlama dilinin gücünü
                ,kalitesini değil programlama dilinin ile&nbsp;
                <strong>günlük konuşma diline</strong>&nbsp;olan mesafesini
                göstermek için kullanılmıştır.
              </p>
              <p>
                C# kelimesi ingilizce olarak <strong>C sharp </strong>olarak
                yazılır<strong>&nbsp;si şarp&nbsp;</strong>şeklinde
                okunmaktadır.
              </p>
              <p>
                C# programlama dili Microsoft tarafından geliştirilmiş olmasına
                rağmen&nbsp;<strong>ECMA&nbsp;</strong>ve&nbsp;
                <strong>ISO&nbsp;standartları</strong>&nbsp;altına alınmış bir
                programlama dilidir.
              </p>
              <p>
                C# programlama dilinin tasarlanmasına <strong>Pascal</strong>,
                <strong>Delphi derleyicileri</strong> ve <strong>J++</strong>
                programlama dilinin tasarlamasıyla&nbsp; bilinen&nbsp;
                <strong>Anders Hejlsberg</strong>&nbsp;liderlik etmiştir.
              </p>
              <p>
                C# Java'ya <strong>yakın </strong>bir dildir. Bu
                yöndende&nbsp;C# programlama dili birçok alanda&nbsp;Java‘yı
                kendisine örnek alır ve C# da java gibi C ve C++ kod söz
                dizimine benzer bir kod yapı vardır .
              </p>
              <p>
                C# özellikle <strong>nesne yönelimli programlama</strong>
                kavramının gelişmesine katkıda bulunan en aktif programlama
                dillerinden biridir.
              </p>
              <h2>Neden C# Öğrenmelisiniz?</h2>
              <ul>
                <li>İş bulması kolay</li>
                <li>Popüler bir dil</li>
                <li>Hızlı bir programlama dili</li>
                <li>Orta seviyeli günlük konuşmaya yakın bir dili var</li>
                <li>Form uygulamaları gerçekleştirebilirsiniz</li>
                <li>Otomasyon yazabilirsiniz</li>
                <li>Kodlaması kolaydır.</li>
                <li>Kaynak fazla</li>
                <li>
                  Buraya yüzlerce şey yazılabilir şimdilik bu kadar yeterli.
                </li>
              </ul>
              <p>
                <span>İlk dersimiz bitmiştir.</span>
                &nbsp;Bu dersimizde
                <strong>C# nedir</strong>, neden kullanmalıyız, hangi standart
                altına alınmış, hangi seviye programlama dili olduğu ve neden C#
                öğrenmemiz gerektiği&nbsp;gibi soruların cevabını vermiş olduk.
              </p>
              <p>&nbsp;</p>
              <table class="table">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span>Sonraki Ders:</span>
                      </strong>
                      <Link to="/csharp2">
                        <strong> C# Ekrana Yazdırma</strong>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            Bu dersin sahibi:{" "}
            <a href="https://www.azkod.com/csharp/c-nedir">azkod.com</a>
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
              <Link to="/csharp2" className="navigator-item-link">
                &gt;
              </Link>
            </span>
            <span className="navigator-item">
              <Link to="/csharp2" className="navigator-item-link">
                &gt; &gt;
              </Link>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Csharp;
