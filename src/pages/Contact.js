import React from "react";

function Contact() {
  function MesajBasarili() {
    alert("Mesajınız başarıyla gönderilmiştir.");
  }
  return (
    <React.Fragment>
      <div class="homeContainer">
        {/* İletişim kısmı */}
        <div class="right_grid"></div>
        <div class="left_grid"></div>
        <div class="main_grid_lesson">
          <div className="lesson_text">
            <h2>Bizimle iletişime geç :)</h2>
            <form id="iletisim" onSubmit={MesajBasarili}>
              {/* Form elemanlarını kullanarak iletişim formu oluşturduk. */}
              <label for="ad" className="form_label">
                Adınızı Girin(*)
              </label>
              <input
                type="text"
                required
                id="ad"
                name="ad"
                className="inputs"
              />
              <label for="sad" className="form_label">
                Soyadınızı Girin(*)
              </label>
              <input
                type="text"
                required
                id="ad"
                name="sad"
                className="inputs"
              />
              <label for="mail" className="form_label">
                Mail Adresinizi Girin(*)
              </label>
              <input
                type="email"
                required
                name="mail"
                id="mail"
                className="inputs"
              />
              <label for="message" className="form_label">
                Bize Mesajınız:(*)
              </label>
              <textarea
                name="message"
                required
                id="message"
                className="inputs"
              ></textarea>
              <label>(*) işaretli alanlar zorunludur</label>
              <input type="submit" value="Gönder" id="submit" />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Contact;
