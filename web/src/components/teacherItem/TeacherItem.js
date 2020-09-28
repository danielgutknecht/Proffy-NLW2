import React from "react";
import WhatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
export default function TeacherItem() {
  return (
    <div>
      <article className="teacher-item">
        <div className="header">
          <img
            src="https://avatars2.githubusercontent.com/u/15870776?s=460&u=13f91b82f11913459d7f861d08aa984b71062cb4&v=4"
            alt="Daniel Gutknecht"
          />
          <div>
            <strong>Daniel Gutknecht</strong>
            <span>Programação I</span>
          </div>
        </div>
        <p>
          Entusiasta das melhores tecnologias de desenvolvimento de software.
        </p>
        <footer>
          <p>
            Preço/hora
            <strong>R$ 50,00</strong>
          </p>
          <button type="button">
            <img src={WhatsAppIcon} alt="WhatsApp" />
            Entrar em contato
          </button>
        </footer>
      </article>
    </div>
  );
}
