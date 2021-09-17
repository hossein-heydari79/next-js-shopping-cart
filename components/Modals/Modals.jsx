import React from "react";
import styles from "./Modals.module.css";

export const Modals = ({ show, hide, datamodal, cardlist, setCardlist }) => {
  function added() {
    let item = cardlist.find((i) => i.id === datamodal.id);
    if (item) {
      let arr = [...cardlist];
      let index = arr.findIndex((i) => i.id === datamodal.id);
      arr[index].count++;
      setCardlist(arr);
      hide();
    } else {
      setCardlist([
        ...cardlist,
        {
          id: datamodal.id,
          url: datamodal.url,
          description: datamodal.title,
          price: datamodal.price,
          count: 1,
        },
      ]);
      hide();
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.mains}>
        <div className={styles.section_left}>
          <img src={datamodal.url} alt="" />
        </div>
        <div className={styles.section_right}>
          <div className={styles.title}>
            <p>{datamodal.title}</p>
            <button onClick={hide}>x</button>
          </div>

          <div className={styles.des}>
            <p>{datamodal.des}</p>
          </div>

          <div className={styles.addto}>
            <p>Price : ${datamodal.price}</p>
            <button onClick={added}>Add To Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};
