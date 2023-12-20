import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddCourseModal from "./AddCourseModal";
import styles from "./AddCourse.module.scss";

export default function AddCourse() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button
        className={styles.addCourseBtn}
        onClick={() => setModalIsOpen(true)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      {modalIsOpen && <AddCourseModal setModalIsOpen={setModalIsOpen} />}
    </>
  );
}
