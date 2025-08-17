import styles from "./Apropos.module.css";

const Apropos = () => {
  return (
    <div className={styles.apropos}>
      {/* En-tête */}
      <header className={styles.header}>
        <h1 className={styles.title}>À propos de la Gendarmerie Nationale</h1>
        <p className={styles.subtitle}>
          Servir et protéger avec honneur, discipline et intégrité.
        </p>
      </header>

      {/* Contenu principal */}
      <section className={styles.content}>
        <div className={styles.card}>
          <h2>Notre Mission</h2>
          <p>
            La Gendarmerie Nationale a pour mission d’assurer la sécurité publique,
            de protéger les citoyens et de maintenir l’ordre dans le respect de la loi.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Nos Valeurs</h2>
          <ul>
            <li><strong>Discipline :</strong> garantir l’exemplarité dans nos actions.</li>
            <li><strong>Intégrité :</strong> agir avec honnêteté et transparence.</li>
            <li><strong>Respect :</strong> protéger la population et respecter les droits de chacun.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Contact</h2>
          <p>
            📍 Siège : Antananarivo, Madagascar <br />
            📞 Téléphone : +261 XX XXX XX XX <br />
            📧 Email : contact@gendarmerie.mg
          </p>
        </div>
      </section>
    </div>
  );
};

export default Apropos;
