import js from "../../images/logo-javascript.svg";
import css from "../../images/css-3.svg";
import html from "../../images/html-1.svg";
import react from "../../images/react-2.svg";
import mui from "../../images/material-ui-1.svg";
import bootstrap from "../../images/bootstrap-4.svg";
import jquery from "../../images/jquery-1.svg";
import redux from "../../images/redux.svg";
import nodejs from "../../images/nodejs-1.svg";
import express from "../../images/express-109.svg";
import postgresql from "../../images/postgresql.svg";
import sequelize from "../../images/sequelize.png";
import firebase from "../../images/firebase-1.svg";
import styledComponents from "../../images/styled-components-1.svg";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style.container__main}>
      <div className={style.container__content}>
        <span className={style.text}>Marco Galván. Full stack developer!</span>
        <div className={style.container__logos}>
          <img src={html} alt="html" className={style.logos__lenguajes} />
          <img src={css} alt="css" className={style.logos__lenguajes} />
          <img src={js} alt="js" className={style.logos__lenguajes} />
          <img src={react} alt="react" className={style.logos__lenguajes} />
          <img src={mui} alt="mui" className={style.logos__lenguajes} />
          <img
            src={bootstrap}
            alt="bootstrap"
            className={style.logos__lenguajes}
          />
          <img src={jquery} alt="jquery" className={style.logos__lenguajes} />
          <img src={redux} alt="redux" className={style.logos__lenguajes} />
          <img src={nodejs} alt="nodejs" className={style.logos__lenguajes} />
          <img src={express} alt="express" className={style.logos__lenguajes} />
          <img
            src={postgresql}
            alt="postgresql"
            className={style.logos__lenguajes}
          />
          <img
            src={sequelize}
            alt="sequelize"
            className={style.logos__lenguajes}
          />
          <img
            src={firebase}
            alt="firebase"
            className={style.logos__lenguajes}
          />
          <img
            src={styledComponents}
            alt="styledComponents"
            className={style.logos__lenguajes}
          />
        </div>
      </div>
    </div>
  );
}
