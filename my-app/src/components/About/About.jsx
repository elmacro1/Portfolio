import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.about__container__main}>
      <div className={style.about__container__texto}>
        <span className={style.about__texto}>
          Soy un desarrollador Full Stack sin preferencia de rol, con un gran
          entusiasmo de seguir aprendiendo nuevas tecnologias y reforzarlas. Me
          considero muy competente con el resto de la comunidad, pero me destaco
          en las ganas de aprender y siempre poner el 100% de mi en el trabajo
          que este desarrollando.
        </span>
      </div>
    </div>
  );
}
