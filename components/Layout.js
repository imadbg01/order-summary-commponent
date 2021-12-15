import styles from "../styles/Layout.module.css";
import Image from "next/image";
import bg from "../img/pattern-background-desktop.svg";
const Layout = ({ children }) => {
  return (
    <main className={styles.mainBg}>
      <Image src={bg} className={styles.img} />
      {children}
    </main>
  );
};

export default Layout;
