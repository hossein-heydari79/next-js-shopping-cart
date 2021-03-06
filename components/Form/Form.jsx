import React from "react";
import styles from "./Form.module.css";

export const Form = () => {
  function submit(e) {
    e.preventDefault();
    alert("Will be sent!");
  }

  return (
    <form className={styles.form}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" />

      <label htmlFor="name">Name</label>
      <input type="text" id="name" />

      <label htmlFor="Address">Address</label>
      <input type="text" id="Address" />

      <input
        type="button"
        className={styles.btn}
        onClick={submit}
        value="Checkout"
      />
    </form>
  );
};
