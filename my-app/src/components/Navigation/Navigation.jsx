import style from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  renderAbout,
  renderContact,
  renderHome,
  renderProjects,
  changeLenguage,
} from "../../actions/index";
export default function Navigation() {
  let dispatch = useDispatch();
  let componentRender = useSelector((state) => state.componentRender);
  let lenguage = useSelector((state) => state.lenguage);

  return (
    <nav className={style.nav__container__main}>
      <div className={style.container__changeLenguage}>
        <span
          onClick={() => dispatch(changeLenguage("spanish"))}
          className={`${style.spanishButton} ${
            lenguage === "spanish" && style.selected
          }`}
        >
          {lenguage === "english" ? "Spanish" : "Español"}
        </span>
        <span
          onClick={() => dispatch(changeLenguage("english"))}
          className={`${style.englishButton} ${
            lenguage === "english" && style.selected
          }`}
        >
          {lenguage === "english" ? "English" : "Ingles"}
        </span>
      </div>
      <ul className={style.nav__container__ul}>
        <li
          onClick={() => {
            dispatch(renderHome());
          }}
          className={
            componentRender === "home" && style.nav__container__ul_li_selected
          }
        >
          {lenguage === "english" ? "Home" : "Inicio"}
        </li>
        <li
          onClick={() => {
            dispatch(renderAbout());
          }}
          className={
            componentRender === "about" && style.nav__container__ul_li_selected
          }
        >
          {lenguage === "english" ? "About me" : "Sobre mí"}
        </li>

        <li
          onClick={() => {
            dispatch(renderProjects());
          }}
          className={
            componentRender === "projects" &&
            style.nav__container__ul_li_selected
          }
        >
          {lenguage === "english" ? "Projects" : "Proyectos"}
        </li>
        <li
          onClick={() => {
            dispatch(renderContact());
          }}
          className={
            componentRender === "contact" &&
            style.nav__container__ul_li_selected
          }
        >
          {lenguage === "english" ? "Contact" : "Contacto"}
        </li>
      </ul>
    </nav>
  );
}
