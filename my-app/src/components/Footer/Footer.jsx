import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useSelector } from "react-redux";
import style from "./Footer.module.css";

const Footer = () => {
  let lenguage = useSelector((state) => state.lenguage);

  return (
    <div className={style.container__main}>
      <div className={style.container__content}>
        <div className={style.container__derechos}>
          <span>
            {lenguage === "english"
              ? "©Developed by Marco Galván"
              : "©Desarrollado por Marco Galván"}
          </span>
        </div>
        <div className={style.mideline}></div>
        <div className={style.container__redes}>
          <div className={style.container__redes_content}>
            <a
              className={style.container_icon}
              href="https://wa.me/+543855205726"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon sx={{ color: "#3d4490" }} fontSize="large" />
            </a>

            <a
              className={style.container_icon}
              href="https://www.facebook.com/MarcoA.GalvanF/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon sx={{ color: "#3d4490" }} fontSize="large" />
            </a>
            <a
              className={style.container_icon}
              href="https://www.instagram.com/marcogalvan98/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon sx={{ color: "#3d4490" }} fontSize="large" />
            </a>
            <a
              className={style.container_icon}
              href="https://www.linkedin.com/in/marco-galv%C3%A1n-fullstackdev/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ color: "#3d4490" }} fontSize="large" />
            </a>
            <a
              className={style.container_icon}
              href="https://github.com/elmacro1"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon sx={{ color: "#3d4490" }} fontSize="large" />
            </a>
            <a
              className={style.container_icon}
              href="https://t.me/MarcoDevFullStack"
              target="_blank"
              rel="noreferrer"
            >
              <TelegramIcon sx={{ color: "#3d4490" }} fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
