import { useSelector } from "react-redux";
import style from "./About.module.css";

export default function About() {
  let lenguage = useSelector((state) => state.lenguage);
  return (
    <div className={style.about__container__main}>
      <div className={style.about__container__texto}>
        <span className={style.about__texto}>
          {lenguage === "english"
            ? "I am a Full Stack developer without role preference, with a great enthusiasm to continue learning new technologies and reinforcing them. I consider myself very competent with the rest of the community, but I stand out in my desire to learn and always put 100% of myself into the work I am developing."
            : "Soy un desarrollador Full Stack sin preferencia de rol, con un granentusiasmo de seguir aprendiendo nuevas tecnologias y reforzarlas. Me considero muy competente con el resto de la comunidad, pero me destacoen las ganas de aprender y siempre poner el 100% de mi en el trabajo que este desarrollando."}
        </span>
      </div>
    </div>
  );
}
