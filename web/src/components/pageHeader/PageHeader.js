import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";
import "./styles.css";

export default function PageHeader({ title, description }) {
  return (
    <Fragment>
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <img src={logoImg} alt="Proffy" />
        </div>
        <div className="header-content">
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
      </header>
    </Fragment>
  );
}
