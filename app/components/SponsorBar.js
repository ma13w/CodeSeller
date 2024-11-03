import styles from "./SponsorBar.module.css";
import chatgpt from "../assets/chatgpt.png";
import vscode from "../assets/vs_code_logo.png";
import aws from "../assets/aws_logo.png";
import dropbox from "../assets/dropbox_logo.png";
import itsos from "../assets/itsos_logo.png";
import Image from "next/image";

export default function SponsorBar() {
    const images = [chatgpt, vscode, itsos, aws, dropbox];


    return (
        <div className={styles.sponsor_bar}>
            {images.map((img, index) => (
                <Image
                    key={index}
                    className={styles.main_image}
                    src={img}
                    alt="Sponsor logo"
                    priority
                />
            ))}
        </div>
      );
    
}
