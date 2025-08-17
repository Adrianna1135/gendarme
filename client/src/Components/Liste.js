import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Liste.module.css";

const Liste = () => {
  const [agents, setAgents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgents = async () => {
      const response = await fetch("http://localhost:3001/agents");
      const result = await response.json();
      setAgents(result.results);
    };

    fetchAgents();
  }, []);

  const deleteAgent = async (agentId) => {
    const response = await fetch(`http://localhost:3001/agents/${agentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      alert("Erreur lors de la suppression de l'agent");
    }
  };

  return (
    <div className={styles.App}>
      <h1> Liste de tout les agents </h1>

      <table className={styles["table-employes"]} border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Contact</th>
            <th>Service</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {agents &&
            agents.map((agent, index) => {
              return (
                <tr key={index}>
                  <td>{agent.id}</td>
                  <td>{agent.nom}</td>
                  <td>{agent.prenom}</td>
                  <td>{agent.contact}</td>
                  <td>{agent.service}</td>
                  <td>{agent.grade}</td>
                  <td>
                    <button
                      onClick={() => {
                        navigate(`/modification/${agent.id}`);
                      }}
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => {
                        const isDeleted = window.confirm("Etes-vous sûr ?");

                        isDeleted && deleteAgent(agent.id);
                        window.location.reload();
                      }}
                    >
                      Supprimer{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Liste;
