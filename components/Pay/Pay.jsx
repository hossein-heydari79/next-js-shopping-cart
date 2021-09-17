import React from "react";
import styles from "./Pay.module.css";

export const Pay = ({ cardlist, mode, setmode }) => {
  function change() {
    setmode({
      show: true,
    });
  }

  let total = 0;
  cardlist.forEach((element) => {
    total += element.price * element.count;
  });

  return (
    <div className={styles.pay}>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={change}>Proceed</button>
    </div>
  );
};
