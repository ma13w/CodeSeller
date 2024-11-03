import Image from "next/image";
import styles from "./Footer.module.css";
import logo_white from "../assets/CodeSeller_white.svg";
import insta from "../assets/insta_logo.svg";
import linkedin from "../assets/linkedin_logo.svg";
import github from "../assets/github_logo.svg";

export default function Footer() {
    return(
        <footer className={styles.footer_main}>
            <div className={styles.first_column}>
                <Image src={logo_white} alt="CodeSeller white logo" width={0} height={0} />
                <div className={styles.subtitle}>By developers for developers</div>
                <div className={styles.copyrigth}>Copyright © {new Date().getFullYear()}</div>
                </div>
            <div className={styles.second_column}>
                <div>Made by <strong>Matteo Calì</strong></div>
                <div className={styles.social}>
                    <Image src={insta} alt="Instagram white logo" width={0} height={0} />
                    <Image src={linkedin} alt="Linkedin white logo" width={0} height={0} />
                    <Image src={github} alt="Github white logo" width={0} height={0} />
                </div>
            </div>
            <div className={styles.third_column}>
                <div><a href="/">HOME</a></div>
                <div><a href="/about">ABOUT</a></div>
                <div><a href="/products">PRODUCTS</a></div>
            </div>
        </footer>
    )
}