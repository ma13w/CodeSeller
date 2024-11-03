import styles from "./Rate.module.css";
import Image from "next/image";
import Giulio_Cesare from "../assets/Giulio_Cesare.png";
import Elon_Musk from "../assets/Elon_Musk.png";
import Bentivoglio from "../assets/Bentivoglio.png";
import fivestars from "../assets/fivestarts.png";

export default function Rate() {
    const reviews = [
        {"Name": "Giulio Cesare", "Title": "Servizio eccellente", "Review": "''Ho trovato il servizio incredibilmente utile! Poter richiedere esercizi su misura in qualsiasi linguaggio è stato un grande aiuto per migliorare le mie abilità di programmazione. Le spiegazioni sono chiare e facili da seguire, il che mi ha permesso di imparare velocemente. Consiglio questo sito a chiunque voglia imparare o approfondire il coding!''"},
        {"Name": "Elon Musk", "Title": "The Best Platform to Improve Coding", "Review": "''Ho provato vari siti di esercizi di programmazione, ma questo è decisamente il migliore. Non solo ricevi codice funzionante e ben spiegato, ma puoi anche mandare il tuo codice per ottenere un feedback dettagliato. Questo servizio ha davvero migliorato il mio modo di scrivere e ottimizzare codice. Assolutamente consigliato per chi vuole crescere come programmatore!''"},
        {"Name": "Bentivoglio", "Title": "Strumento indispensabile", "Review": "''Come insegnante, questo sito è stato una risorsa preziosa per la mia classe. Gli studenti hanno avuto accesso a esercizi mirati, e la funzionalità di debug ha permesso loro di capire dove migliorare il loro codice. È un ottimo strumento di supporto per la didattica dell'informatica!''"}
    ];

    const images = [Giulio_Cesare, Elon_Musk, Bentivoglio];

    return (
        <div className={styles.rate_container}>
            <div className={styles.rate_bg}></div>
            <div className={styles.main_rate}>
                {reviews.map((review, index) => (
                    <div key={index} className={styles.review} id={styles[`review_${index}`]}>
                        <div className={styles.review_name}>
                            <Image
                                className={styles.main_image}
                                src={images[index]}
                                alt={"User " + review.Name}
                                height={0}
                                width={0}
                                priority
                            />
                            {review.Name}
                        </div>
                        <div className={styles.review_stars}>
                            <Image
                                src={fivestars}
                                alt="Star"
                                height={0}
                                width={0}
                                priority
                            />
                        </div>
                        <div className={styles.review_title}>{review.Title}</div>
                        <div className={styles.review_text}>{review.Review}</div>
                    </div>
                ))}
            </div>
            <div><a className={styles.review_cta} href="/products">TRY OUR PRODUCTS</a></div>
        </div>
    );
    
}
