import React from "react";
import Card from "../components/Card";
import styles from "./Likes.module.css";

const Likes = ({ labs, technologies }) => {
  return (
    <div className={styles.content}>
      {labs.map((l) => (
        <Card
          outline
          imgUrl={l.url}
          name={l.name}
          technologies={technologies}
        />
      ))}
    </div>
  );
};

export default Likes;
