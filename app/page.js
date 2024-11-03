"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Rate from "./components/Rate";
import Footer from "./components/Footer";
import Image from "next/image";
import SponsorBar from "./components/SponsorBar"
import codeSample from './assets/code_sample.png';
import arrow from './assets/arrow.svg';

export default function Home() {
  useEffect(() => {
    const image = document.querySelector(`.${styles.main_image}`);
    if (image) {
      setTimeout(() => {
        image.style.marginRight = "0";
        image.style.filter = "drop-shadow(10px 10px 100px rgba(0, 0, 0, 1))";
      }, 300);
    }

    const cta = document.querySelector(`.${styles.main_cta}`);
    if (cta) {
      setTimeout(() => {
        cta.style.marginLeft = "0";
      }, 300);
    }

    const title = document.querySelector(`.${styles.main_title}`);
    if (title) {
      setTimeout(() => {
        title.style.opacity = "1";
      }, 300);
    }
  }, []);

  return (
    <div>
        <main className={styles.main}>
        <Navbar />
        <div className={styles.bg_image}></div>
        <div className={styles.main_container}>
          <div className={styles.main_title}>Code to extreme.</div>
          <div className={styles.main_subcontainer}>
            <div className={styles.main_cta}>
              <div className={styles.cta_header}>INCREASE<br></br>YOUR GRADES</div>
              <div className={styles.cta_text}>
                <div className={styles.cta_text_strong}>Receive Compliments Effortlessly</div>
                <div className={styles.cta_text}>Take a call with our team to understand if this service can help you and your class, our goal is to increase your grade and your school life.</div>
              </div>
              <a className={styles.custom_button} href="/products">
                VIEW PRODUCTS 
                <svg
                  className=""
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className=""
                  ></path>
                </svg>
              </a>
            </div>

            <Image
              className={styles.main_image}
              src={codeSample}
              alt="Code example"
              priority
            />
          </div>
        </div>
      </main>
      <div><SponsorBar /></div>
      <div><Rate /></div>
      <div><Footer /></div>
    </div>
  );
}
