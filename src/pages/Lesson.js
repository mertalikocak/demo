import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Lesson() {
  const { course, lessonNo } = useParams();
  let imglink = "";
  let content = "";
  let first_lesson = "";
  let last_lesson = "";
  let previous_lesson = "";
  let next_lesson = "";
  let first_number = "";
  let mid_number = "";
  let last_number = "";

  const cs_lessons = [];
  const js_lessons = [];
  const py_lessons = [];

  cs_lessons[0] = `<h1> C# Nedir?</h1>
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
       
            <strong> C# Ekrana Yazdırma</strong>

        </td>
      </tr>
    </tbody>
  </table>
  Bu dersin sahibi:
              <a href="https://www.azkod.com/csharp/c-nedir"> azkod.com</a>`;
  cs_lessons[1] = `<h1> C# Ekrana Yazdırma</h1>
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
  </table>Bu dersin sahibi:
  <a href="https://www.azkod.com/csharp/c-nedir"> azkod.com</a>`;

  js_lessons[0] = `<h1> JavaScript Nedir?</h1>

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
Bu dersin sahibi:
<a href="https://www.azkod.com/javascript/javascript-nedir">
  azkod.com
</a>`;
  js_lessons[1] = `<h1> JS Nasıl Kullanılır?</h1>

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
  </strong>
  Bu dersimizde JavaScript kodlarının nasıl kullanıldığı,hangi
  yöntemler ile kullanıldığı, harici kullanımı, dahili
  kullanımı&nbsp;hakkında bilgi verdik.
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
<a href="https://www.azkod.com/javascript/javascript-nedir">
  azkod.com
</a>`;

  py_lessons[0] = `<h1> Python Nedir?</h1>
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
  Bu dersin sahibi:
  <a href="https://www.azkod.com/python/python-nedir"> azkod.com </a>`;

  py_lessons[1] = `<h1> Python Kurulumu</h1>
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
  Bu dersin sahibi:
  <a href="https://www.azkod.com/python/python-nedir">azkod.com</a>`;

  for (let i = 2; i < 5; i++) {
    cs_lessons[
      i
    ] = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti porro fuga officia illo sint, harum mollitia iste asperiores dolorum alias, doloribus fugiat architecto sequi. Numquam sit unde quae placeat laborum!
Debitis, natus, nemo alias rerum similique eum facilis at, optio maiores enim dicta veniam nam suscipit tenetur illo odio porro et officiis accusantium! Vero nemo provident nostrum fugiat corporis? Vel.
Sit sunt quam nemo corporis! Incidunt at fuga itaque eius, dolore asperiores corporis! Repellat nisi ratione, harum in quibusdam incidunt officiis alias saepe iure assumenda nobis consequatur atque quia aut.
Saepe esse minima eveniet iure? Laborum et illo cupiditate quis, quidem temporibus facilis praesentium? Voluptas perferendis hic veniam odit ipsa magnam voluptate facere quasi delectus, ducimus in aut ipsum laudantium?
Aut explicabo minima rem praesentium adipisci nulla, nobis, facilis expedita ducimus quasi ipsam! Ab repudiandae fuga nesciunt praesentium architecto deserunt, pariatur vero atque voluptatibus sed non eligendi illo, voluptatem exercitationem.
Sunt perspiciatis vitae animi quod repudiandae voluptatem optio earum nisi assumenda impedit sit, voluptates eum molestiae consequuntur neque itaque. Reiciendis dolorum quisquam odio officiis porro distinctio dignissimos necessitatibus? Commodi, eveniet.
Nam quae repellendus, velit dolorum minus pariatur cumque. Nobis eos fugiat dolores ea illum molestiae doloremque quae at maxime aspernatur in neque iste laudantium nisi provident, itaque ab possimus suscipit?
Dolorum quia velit quidem ullam, sequi deserunt modi expedita recusandae at hic quaerat architecto commodi! Deserunt eos illum est ullam laudantium quidem autem nobis labore ex. Doloribus non nemo blanditiis.
Praesentium, dicta cum ipsam unde asperiores, soluta qui sunt consequuntur, a porro illo? Vitae rem nisi rerum fuga reprehenderit optio delectus officiis, quod minima quasi, asperiores ea maiores, quam magni!
Ut, illo adipisci soluta numquam placeat excepturi eos repudiandae aut debitis. Recusandae, hic quo vel id, iste soluta expedita sequi voluptatem architecto alias unde dolorem. Officia fugit suscipit architecto facere!`;
    js_lessons[i] = cs_lessons[i];
    py_lessons[i] = cs_lessons[i];
  }

  if (course == "cs") {
    if (parseInt(lessonNo) > cs_lessons.length || parseInt(lessonNo) == 0) {
      console.log("wrong");
      window.location.href = "/404";
    } else {
      imglink = require("../img/cs_lesson.jpg");
      first_lesson = "/course/cs/1";
      last_lesson = "/course/cs/" + cs_lessons.length;

      if (parseInt(lessonNo) == cs_lessons.length) {
        previous_lesson = "/course/cs/" + (parseInt(lessonNo) - 1);
        next_lesson = "/course/cs/" + parseInt(lessonNo);
        first_number = parseInt(lessonNo) - 2;
        mid_number = parseInt(lessonNo) - 1;
        last_number = parseInt(lessonNo);
      } else if (parseInt(lessonNo) == 1) {
        previous_lesson = "/course/cs/" + parseInt(lessonNo);
        next_lesson = "/course/cs/" + (parseInt(lessonNo) + 1);
        first_number = parseInt(lessonNo);
        mid_number = parseInt(lessonNo) + 1;
        last_number = parseInt(lessonNo) + 2;
      } else {
        previous_lesson = "/course/cs/" + (parseInt(lessonNo) - 1);
        next_lesson = "/course/cs/" + (parseInt(lessonNo) + 1);
        first_number = parseInt(lessonNo) - 1;
        mid_number = parseInt(lessonNo);
        last_number = parseInt(lessonNo) + 1;
      }
      console.log(last_lesson);

      content = cs_lessons[parseInt(lessonNo) - 1];
    }
  } else if (course == "js") {
    if (parseInt(lessonNo) > js_lessons.length || parseInt(lessonNo) == 0) {
      console.log("wrong");
      window.location.href = "/404";
    } else {
      imglink = require("../img/js_lesson.jpg");
      first_lesson = "/course/js/1";
      last_lesson = "/course/js/" + js_lessons.length;

      if (parseInt(lessonNo) == js_lessons.length) {
        previous_lesson = "/course/js/" + (parseInt(lessonNo) - 1);
        next_lesson = "/course/js/" + parseInt(lessonNo);
        first_number = parseInt(lessonNo) - 2;
        mid_number = parseInt(lessonNo) - 1;
        last_number = parseInt(lessonNo);
      } else if (parseInt(lessonNo) == 1) {
        previous_lesson = "/course/js/" + parseInt(lessonNo);
        next_lesson = "/course/js/" + (parseInt(lessonNo) + 1);
        first_number = parseInt(lessonNo);
        mid_number = parseInt(lessonNo) + 1;
        last_number = parseInt(lessonNo) + 2;
      } else {
        previous_lesson = "/course/js/" + (parseInt(lessonNo) - 1);
        next_lesson = "/course/js/" + (parseInt(lessonNo) + 1);
        first_number = parseInt(lessonNo) - 1;
        mid_number = parseInt(lessonNo);
        last_number = parseInt(lessonNo) + 1;
      }
      console.log(last_lesson);

      content = js_lessons[parseInt(lessonNo) - 1];
    }
  } else if (course == "py") {
    if (parseInt(lessonNo) > py_lessons.length || parseInt(lessonNo) == 0) {
      console.log("wrong");
      window.location.href = "/404";
    } else {
      imglink = require("../img/py_lesson.png");
      first_lesson = "/course/py/1";
      last_lesson = "/course/py/" + py_lessons.length;

      if (parseInt(lessonNo) == py_lessons.length) {
        previous_lesson = "/course/py/" + (parseInt(lessonNo) - 1);
        next_lesson = "/course/py/" + parseInt(lessonNo);
        first_number = parseInt(lessonNo) - 2;
        mid_number = parseInt(lessonNo) - 1;
        last_number = parseInt(lessonNo);
      } else if (parseInt(lessonNo) == 1) {
        previous_lesson = "/course/py/" + parseInt(lessonNo);
        next_lesson = "/course/py/" + (parseInt(lessonNo) + 1);
        first_number = parseInt(lessonNo);
        mid_number = parseInt(lessonNo) + 1;
        last_number = parseInt(lessonNo) + 2;
      } else {
        previous_lesson = "/course/py/" + (parseInt(lessonNo) - 1);
        next_lesson = "/course/py/" + (parseInt(lessonNo) + 1);
        first_number = parseInt(lessonNo) - 1;
        mid_number = parseInt(lessonNo);
        last_number = parseInt(lessonNo) + 1;
      }
      console.log(last_lesson);

      content = py_lessons[parseInt(lessonNo) - 1];
    }
  } else {
    window.location.href = "/404";
  }
  return (
    <React.Fragment>
      <div class="languageContainer">
        <div class="left_grid"></div>
        <div class="right_grid"></div>
        <div class="main_grid_lesson">
          <div class="lesson_image">
            <img
              src={imglink}
              alt="csharp"
              width="90%"
              className="lesson_png"
            />
          </div>
          <div class="lesson_text">
            <div
              class="col-lg-8"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>

          <div class="navigator">
            <span className="navigator-item">
              <Link to={first_lesson} className="navigator-item-link">
                &lt; &lt;
              </Link>
            </span>
            <span className="navigator-item">
              <Link to={previous_lesson} className="navigator-item-link">
                &lt;
              </Link>
            </span>

            <span className="navigator-item">
              <Link
                to={"/course/" + course + "/" + first_number}
                className="navigator-item-link"
              >
                {first_number}
              </Link>
            </span>
            <span className="navigator-item">
              <Link
                to={"/course/" + course + "/" + mid_number}
                className="navigator-item-link"
              >
                {mid_number}
              </Link>
            </span>
            <span className="navigator-item">
              <Link
                to={"/course/" + course + "/" + last_number}
                className="navigator-item-link"
              >
                {last_number}
              </Link>
            </span>
            <span className="navigator-item">
              <Link to={next_lesson} className="navigator-item-link">
                &gt;
              </Link>
            </span>
            <span className="navigator-item">
              <Link to={last_lesson} className="navigator-item-link">
                &gt; &gt;
              </Link>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Lesson;
