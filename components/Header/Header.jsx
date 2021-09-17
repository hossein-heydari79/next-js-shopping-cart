import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.header_p}>React Shopping Cart</p>
    </div>
  );
};
