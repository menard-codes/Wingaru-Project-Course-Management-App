import Navbar from "../../components/Navbar/Navbar";

import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className={styles.error}>
        <h1>404 Not Found</h1>
        <p>Nothing else here</p>
      </div>
    </div>
  );
}
