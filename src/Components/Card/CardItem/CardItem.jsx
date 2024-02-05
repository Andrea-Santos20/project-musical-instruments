/* eslint-disable react/prop-types */
import styles from "./CardItem.module.css";


export default function CardItem({nome, familia, origem, som, imagem}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h2>{nome}</h2>
        <div className={styles.cardElements}>
        <img  className={styles.img}
          src={imagem}
          alt=""
        ></img>
        <div className={styles.cardInformation}>
        <p>Família: <span>{familia}</span></p>
        <p>Som: <span>{som}</span></p>
        <p>Origem: <span>{origem}</span></p>
        </div>
        </div>
      </div>

  
    </div>
  );
}