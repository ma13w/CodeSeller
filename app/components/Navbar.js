"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import search_black from "../assets/search_icon.png";
import search_white from "../assets/search_white.png";

export default function Navbar() {
  const [searchIcon, setSearchIcon] = useState(search_black);

  useEffect(() => {
    const navLinks = document.querySelectorAll(`.${styles.navbar_link}`);
    navLinks.forEach(link => {
      if(window.location.pathname == link.pathname) {
        link.classList.add(styles.navbar_link_active);    
      }else{
        link.classList.remove(styles.navbar_link_active);
      }      
    });
    
    const navbarLinks = document.querySelector(`.${styles.navbar_links}`);
    if (navbarLinks) {
      navbarLinks.style.top = "32px";
    }
    }, []);

  useEffect(() => {
    const navbar = document.querySelector(`.${styles.navbar_links}`);
    if (window.scrollY > navbar.offsetHeight) {
      navbar.classList.add(styles.scrolled);
      setSearchIcon(search_white);
    } else {
      navbar.classList.remove(styles.scrolled);
      setSearchIcon(search_black);
    }
    
    const handleScroll = () => {
      if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add(styles.scrolled);
        setSearchIcon(search_white);
      } else {
        navbar.classList.remove(styles.scrolled);
        setSearchIcon(search_black);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar_conteiner}>
        <div className={styles.navbar_title}></div>
        <div className={styles.navbar_links}>
            <a href="/" className={`${styles.navbar_link} ${styles.navbar_link_active}`}>HOME</a>
            <a href="/about" className={styles.navbar_link}>ABOUT</a>
            <a href="/products" className={styles.navbar_link}>PRODUCTS</a>
            <a href="#search" className={styles.navbar_link_search}>
              <Image
                className={styles.navbar_link_search_icon}
                src={searchIcon}
                alt="Search icon"
                priority
              />
            </a>
        </div>
    </nav>
  );
}
