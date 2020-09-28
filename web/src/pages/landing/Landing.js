import React, { useEffect, useState } from "react";
import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import "./styles.css";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    const fethDataTransaction = async () => {
      const getTotalConnections = await api.get("connection");
      const data = getTotalConnections.data;

      setTotalConnections(data);
    };
    fethDataTransaction();
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua Plataforma de estudos online.</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar" />
            Dar Aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de {totalConnections} conexões realizadas{" "}
          <img src={purpleHeartIcon} alt="coração roxo" />
        </span>
      </div>
    </div>
  );
}
