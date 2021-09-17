import React from "react";
import styles from "./Menubar.module.css";

export const Menubar = ({ cardlist }) => {
  return (
    <div className={styles.menu_bar}>
      {cardlist.length == 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <p>You have {cardlist.length} in the Cart</p>
      )}
    </div>
  );
};
