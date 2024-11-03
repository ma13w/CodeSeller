"use client";

import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import logo from "../assets/CodeSeller.svg"

export default function Home() {

  return (
    <div>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.bg_image}></div>
        <div className={styles.main_container}>
            <div className={styles.main_title}>
                <Image
                    src={logo}
                    alt="logo"
                    width={0}
                    height={0}
                />
            </div>
            <div className={styles.main_subtitle}>
                <h2>We will talk about us later.</h2>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
