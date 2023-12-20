import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <p className={styles.logo}>Learnify</p>
      </Link>
    </nav>
  );
}
