import React from "react";
import styles from "./layout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div>Toolbar, SideDrawr, Backdrop</div>
      <main className={styles.content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
