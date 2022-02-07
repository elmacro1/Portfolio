import style from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={style.container__main}>
      <div className={style.container__content}>
        <h2>Contacta conmigo!</h2>
        <form
          // onSubmit={(e) => e.preventDefault()}
          action="https://formsubmit.co/elmacro11@gmail.com"
          method="POST"
        >
          <input type="text" name="name" placeholder="Ingresa tu nombre" />
          <input type="email" name="email" placeholder="Ingresa tu email" />
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje"
            rows="5"
            cols="10"
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
