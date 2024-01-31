import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeText}>
        <h2>Os intrumentos musicais e suas classificações</h2>
        <p>
        Um instrumento musical é um objeto, construído com o propósito de produzir música. 
        Os vários tipos de instrumentos podem ser classificados de diversas formas, sendo uma das mais comuns, 
        a divisão de acordo com a forma pela qual o som é produzido.
        </p>
        <p>Existem muitas formas de classificar os instrumentos musicais, cada uma delas se presta melhor para cada finalidade. 
        Existem classificações que levam em conta os conjuntos instrumentais tais como orquestras. Um exemplo é a 
        classificação dos instrumentos da orquestra sinfónica que divide os instrumentos em cordas, sopros 
        (subdivididos em madeiras e metais) e percussão.
        </p>
      </div>
    </div>
  );
}