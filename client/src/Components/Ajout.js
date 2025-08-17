import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import styles from "./Ajout.module.css";

const Ajout = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [localAgent, setLocalAgent] = useState({});

  useEffect(() => {
    const getAgent = async (agentId) => {
      const response = await fetch(`http://localhost:3001/agents/${agentId}`);
      const agent = await response.json();
      setLocalAgent(agent.results[0]);
    };
    params.id && getAgent(params.id);
  }, [params.id]);

  const addAgent = async (formData) => {
    const agent = Object.fromEntries(formData.entries());
    const response = await fetch("http://localhost:3001", {
      method: "POST",
      body: JSON.stringify(agent),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      alert("Echec de l'enregistrement");
    }
  };

  const updateAgent = async (agentId, formData) => {
    const agentData = Object.fromEntries(formData.entries());
    const response = await fetch(`http://localhost:3001/agents/${agentId}`, {
      method: "PUT",
      body: JSON.stringify(agentData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      alert("Echec de la mise à jour de l'agent");
    }
  };

  const handleChange = (e) => {
    setLocalAgent((prevAgent) => {
      return {
        ...prevAgent,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className={styles.App}>
      <h1> Ajout des agents </h1>
      <form
        action={(formData) => {
          params.id ? updateAgent(params.id, formData) : addAgent(formData);
          navigate("/liste");
        }}
      >
        <label htmlFor="nom">
          <span>Nom</span>
          <br />
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            id="nom"
            value={localAgent.nom || ""}
            onChange={handleChange}
          />
          <br />
        </label>
        <br />

        <label>
          <span>Prenom</span>
          <br />
          <input
            value={localAgent.prenom || ""}
            onChange={handleChange}
            type="text"
            name="prenom"
            placeholder="Prenom"
          />
        </label>
        <br />

        <label>
          <span>Contact</span>
          <br />
          <input
            value={localAgent.contact || ""}
            onChange={handleChange}
            type="text"
            name="contact"
            placeholder="Contact"
          />
        </label>
        <br />

        <label htmlFor="service">
          <span>Service</span>
          <br />
          <select
            value={localAgent.service || "IDH"}
            onChange={handleChange}
            name="service"
            id="service"
          >
            <option value="IDH">IDH</option>
            <option value="Protection">Protection des enfants</option>
            <option value="Anacryme">Anacryme</option>
            <option value="Cyber-criminalite">Cyber criminalite</option>
          </select>
        </label>
        <br />

        <label htmlFor="grade">
          <span>Grade</span>
          <br />
          <select
            value={localAgent.grade || "GHC"}
            onChange={handleChange}
            name="grade"
            id="grade"
          >
            <option value="GHC">GHC</option>
            <option value="Adjoint">Adjoint</option>
            <option value="GDC">GDC</option>
            <option value="GPC">GPC</option>
          </select>
        </label>
        <br />

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};
export default Ajout;
