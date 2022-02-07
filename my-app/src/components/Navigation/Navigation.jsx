import style from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  renderAbout,
  renderContact,
  renderHome,
  renderProjects,
} from "../../actions/index";
export default function Navigation() {
  let dispatch = useDispatch();
  let componentRender = useSelector((state) => state.componentRender);

  return (
    <nav className={style.nav__container__main}>
      <ul className={style.nav__container__ul}>
        <li
          onClick={() => {
            dispatch(renderHome());
          }}
          className={
            componentRender === "home" && style.nav__container__ul_li_selected
          }
        >
          Home
        </li>
        <li
          onClick={() => {
            dispatch(renderAbout());
          }}
          className={
            componentRender === "about" && style.nav__container__ul_li_selected
          }
        >
          About
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
          Projects
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
          Contact
        </li>
      </ul>
    </nav>
  );
}
