// Initialisation des modules
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// Déclaration de l'app et du port
const app = express();
const port = 3001;

// Configuration de sécurité
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connexion MySQL
const connexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "Gendarme"
});

connexion.connect(function(err) {
  if (err) {
    console.log("Erreur de connexion MySQL :", err);
  } else {
    console.log("Connecté à MySQL !");
  }
});


// Récupérer la liste des agents
app.get("/agents", (req, res) => {
  const sql = "SELECT * FROM agents";
  connexion.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Erreur lors de la récupération");
    } else {
      res.json({
        sucess: true,
        nbItems: result.length,
        results: result,
      });
    }
  });
});

// Récupérer un agent
app.get("/agents/:id", (req, res) => {
  const id =  req.params.id;
  const sql = "SELECT * FROM agents WHERE id=?";
  connexion.query(sql,[id], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Erreur lors de la récupération");
    } else {
      res.json({
        sucess: true,
        results: result,
      });
    }
  });
});

// Ajouter un agent
app.post("/", (req, res) => {
  const { nom, prenom, contact, grade, service } = req.body;

  const sql = "INSERT INTO agents(nom, prenom, contact, grade, service) VALUES(?,?,?,?,?)";
  connexion.query(sql, [nom, prenom, contact, grade, service], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Erreur lors de l'enregistrement");
    } else {
      res.send("Agent enregistré avec succès !");
    }
  });
});

// Supprimer un agent
app.delete("/agents/:id", (req, res) => {
  const params = req.params.id;
  console.log(params);
  const sql = "DELETE FROM agents WHERE id = ? ";
  connexion.query(sql, [params], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Erreur lors de la suppression");
    } else {
      res.json({
        success: true,
        message: "Agent supprimé"
      });
    }
  })
});

// Mettre à jour un agent
app.put("/agents/:id", (req, res) => {
  const id = req.params.id;
  const { nom, prenom, contact, grade, service } = req.body;
  console.log(id);
  const sql = "UPDATE agents SET nom = ?, prenom = ?, contact = ?, service = ?, grade = ? WHERE id = ? ";
  connexion.query(sql, [nom,prenom,contact,service,grade,id], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Erreur lors de la modification");
    } else {
      res.json({
        success: true,
        message: "Agent modifié"
      });
    }
  })
}); 

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
