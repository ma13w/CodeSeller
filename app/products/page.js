"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
          <div className={styles.main_title}>Choose your plan</div>

          <div className={styles.main_container}>
            <div className={styles.plans}>
              <div className={styles.card}>
                <div className={styles.card_header}>
                  <h3>Free</h3>
                  <p>For personal use</p>
                  <div className={styles.price}>
                    <span className={styles.currency}>€</span>
                    <span className={styles.amount}>0</span>
                  </div>
                </div>
                <div className={styles.card_content}>
                  <button className={styles.btn}>Get started</button>
                  <ul className={styles.ul}>
                    <li className={styles.li}><span className={styles.check}>✔</span>5 exercise per week</li>
                    <li className={styles.li}><span className={styles.check}>✔</span>1 debug request</li>
                  </ul>
                </div>
              </div>

              <div className={`${styles.card} ${styles.popular}`}>
                <div className={styles.badge}>Popular</div>
                <div className={styles.card_header}>
                  <h3>Student Plan</h3>
                  <p>For school student use</p>
                  <div className={styles.price}>
                    <span className={styles.currency}>€</span>
                    <span className={styles.amount}>9.99</span>
                  </div>
                </div>
                <div className={styles.card_content}>
                  <button className={styles.btn}>Get started</button>
                  <ul className={styles.ul}>
                    <li className={styles.li}><span className={styles.check}>✔</span>10 exercise per week</li>
                    <li className={styles.li}><span className={styles.check}>✔</span>10 debug requests per week</li>
                    <li className={styles.li}><span className={styles.check}>✔</span>Unlimited AI Chatbot</li>
                  </ul>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.card_header}>
                  <h3>Classes Plan</h3>
                  <p>For an IT class use</p>
                  <div className={styles.price}>
                    <span className={styles.currency}>€</span>
                    <span className={styles.amount}>39.99</span>
                  </div>
                </div>
                <div className={styles.card_content}>
                  <button className={styles.btn}>Get started</button>
                  <ul className={styles.ul}>
                    <li className={styles.li}><span className={styles.check}>✔</span>50 exercise per week</li>
                    <li className={styles.li}><span className={styles.check}>✔</span>Unlimited debug requests</li>
                    <li className={styles.li}><span className={styles.check}>✔</span>Unlimited AI Chatbot</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
