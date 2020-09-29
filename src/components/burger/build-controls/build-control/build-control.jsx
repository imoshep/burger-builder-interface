import React from "react";
import styles from "./build-control.module.css";
const BuildControl = ({ label, type, addIng, remIng }) => {
  return (
    <div className={styles.buildControl}>
      <div className={styles.label}>{label}</div>
      <button onClick={() => remIng(type)} className={styles.less}>
        Less
      </button>
      <button onClick={() => addIng(type)} className={styles.more}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
