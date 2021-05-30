import React, { FC } from "react";
import styles from "./Layout.module.scss";
import Header from "./header/Header.component";
import Footer from "./footer/Footer.component";

export const Layout: FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
