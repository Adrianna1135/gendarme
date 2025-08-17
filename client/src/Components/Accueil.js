import styles from "./Accueil.module.css";

const Accueil = () => {
  return (
    <div className={styles.accueil}>
      {/* Section Hero */}
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.heroTitle}>Gendarmerie Nationale</h1>
          <p className={styles.heroSubtitle}>
            Protéger et servir la Nation avec honneur, discipline et intégrité.
          </p>
        </div>
      </section>

      {/* Services rapides */}
      <section className={styles.sectionAlt}>
        <h2>Services aux citoyens</h2>
        <div className={styles.services}>
          <div className={styles.serviceBox}>
            📞 <h3>Numéro d’urgence</h3>
            <p>Appelez le <strong>117</strong> pour toute urgence.</p>
          </div>
          <div className={styles.serviceBox}>
            📝 <h3>Dépôt de plainte</h3>
            <p>Effectuez vos signalements et démarches administratives.</p>
          </div>
          <div className={styles.serviceBox}>
            🚨 <h3>Alertes & Sécurité</h3>
            <p>Consultez nos avis de recherche et communiqués officiels.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
