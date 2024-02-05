import CardItem from "../CardItem/CardItem";
import styles from "./SectionCard.module.css";
import instruments from "../../../../data/instruments.json";
import { useState } from "react";
import { useEffect } from "react";

export default function SectionCard() {
  const [search, setSearch] = useState("");

  const [filterFamily, setFilterFamily] = useState("All");
  const [filterOrigin, setFilterOrigin] = useState("All");
  const [sort, setSort] = useState("Up");

  const [origin, setOrigin] = useState([]);

  function getOrigin() {

    const originList = [];

    instruments.forEach((instruments) => {

      if (Array.isArray(instruments.origem)) {
        instruments.origem.forEach((origem) => 
        {
          if (!originList.includes(origem)) {
            originList.push(origem);
          }
        });
      } else {
        if (!originList.includes(instruments.origem)) {
          originList.push(instruments.origem);
        }
      }
    });

    setOrigin(originList);
  }

  useEffect(() => {
    getOrigin();
  }, []);

  const clearFilters = () => {
    setSearch("");
    setFilterFamily("All");
    setFilterOrigin("All");
    setSort("Up");
  };

  return (

    <section id="instruments" className={styles.section}>
      <div className={styles.filterName}>
        <h2 className={styles.titleSection}>Buscar Instrumento:</h2>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Digite o nome do instrumento."
        />
        <div className={styles.filter}>
          <button className={styles.buttonClear} onClick={clearFilters}>
            Limpar
          </button>
        </div>
      </div>

      <div className={styles.cardFilter}>
        <div className={styles.filter}>
          <p className={styles.filterText}>Familia</p>
          <select
            value={filterFamily}
            onChange={(event) => setFilterFamily(event.target.value)}
          >
            <option value="All">Todos</option>
            <option value="Cordas">Corda</option>
            <option value="Sopro">Sopro</option>
            <option value="Percussao">Percussão</option>
          </select>
        </div>

        <div>
          <div className={styles.filter}>
            <p className={styles.filterText}>Origem</p>
            <select
              value={filterOrigin}
              onChange={(event) => setFilterOrigin(event.target.value)}
            >
              <option value="All">Todos</option>
              {origin.map((origem, index) => (
                <option key={index} value={origem}>
                  {" "}
                  {origem}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.filter}>
          <p className={styles.filterText}>Ordem alfabética</p>
          <div className={styles.filterButton}>
            <button
              className={`${styles.button} ${sort === "Up" ? styles.up : ""}`}
              onClick={() => setSort("Up")}
            >
              A a Z
            </button>
            <button
              className={`${styles.button} ${
                sort === "Down" ? styles.down : ""
              }`}
              onClick={() => setSort("Down")}
            >
              Z a A
            </button>
          </div>
        </div>
      </div>

      <div className={styles.sectionCard}>
        {instruments
          .filter((instrumento) =>
            filterFamily === "All"
              ? true
              : filterFamily === instrumento.familia
              ? true
              : false
          )
          .filter(
            (instrumento) =>
              filterOrigin === "All" ||
              instrumento.origem.includes(filterOrigin)
          )
          .filter((instrumento) =>
            instrumento.nome.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Up"
              ? a.nome.localeCompare(b.nome)
              : b.nome.localeCompare(a.nome)
          )
          .map((item, index) => (
            <CardItem key={index} {...item} />
          ))}

        {instruments
          .filter((instrumento) =>
            filterFamily === "All"
              ? true
              : filterFamily === instrumento.familia
              ? true
              : false
          )
          .filter(
            (instrumento) =>
              filterOrigin === "All" ||
              instrumento.origem.includes(filterOrigin)
          )
          .filter((instrumento) =>
            instrumento.nome.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Up"
              ? a.nome.localeCompare(b.nome)
              : b.nome.localeCompare(a.nome)
          )
          .map((item, index) => <CardItem key={index} {...item} />).length ===
          0 && <p className={styles.information}>Instrumento não encontrado</p>}
      </div>
    </section>
  );
}
