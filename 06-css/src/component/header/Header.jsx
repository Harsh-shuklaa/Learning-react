import React from 'react'
import styles from "../header/header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
 <h1>Harshify</h1>
 <button   className={styles.btn}>Login</button>
    </div>
  )
}

export default Header
