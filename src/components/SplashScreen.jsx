import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.css";
import logo from "../assets/logo.png";

export default function SplashScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 4000); // نفس مدة الأنيميشن

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className={styles.splash}>
      <img
        src={logo}
        alt="R&Y SHOP MIRROR"
        className={styles.splashLogo}
      />
    </div>
  );
}
