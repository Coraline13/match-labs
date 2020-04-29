import React from "react";
import styles from "./Tags.module.css";

const Tags = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map((t) => (
        <span key={t.id} className={styles.tag}>
          {t.name}
        </span>
      ))}
    </div>
  );
};

export default Tags;
