import { useSelector } from "react-redux";
import style from "./Contact.module.css";

export default function Contact() {
  let lenguage = useSelector((state) => state.lenguage);
  return (
    <div className={style.container__main}>
      <div className={style.container__content}>
        <h2>{lenguage === "english" ? "Contact me!" : "Contacta conmigo!"}</h2>
        <form
          action="https://formsubmit.co/elmacro11@gmail.com"
          method="POST"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="name"
            placeholder={
              lenguage === "english" ? "Enter your name" : "Ingresa tu nombre"
            }
          />
          <input
            type="email"
            name="email"
            placeholder={
              lenguage === "english" ? "Enter your email" : "Ingresa tu mail"
            }
          />
          <textarea
            name="mensaje"
            placeholder={
              lenguage === "english"
                ? "Write your message"
                : "Escribe tu mensaje"
            }
            rows="5"
            cols="10"
          ></textarea>
          <button type="submit">
            {lenguage === "english" ? "Send" : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
}
