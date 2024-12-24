import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskItem({ name, count, deleteTask, i }) {
  const [done, setDone] = useState(false);

  const navigate=useNavigate()
  const onEdit=()=>{

    navigate(`/edit/${i}`)
  }
  return (
    <div onClick={() => setDone(!done)} style={styles.container}>
      <div>
        <p style={done ? styles.taskNameDone : styles.taskName}>
          <strong>{name} </strong>
        </p>
        <p style={done ? styles.taskCountDone : styles.taskCount}>
          amount: {count}
        </p>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.editButton} onClick={(e) => {
          e.stopPropagation(); 
          onEdit();
        }}>
          Edit
        </button>
        <button style={styles.deleteButton} onClick={(e) => {
          e.stopPropagation(); 
          deleteTask(i);
        }}>
          Delete
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "10px",
    backgroundColor: "gray",
    width: "300px",
    cursor: "pointer",
  },
  taskName: {
    fontWeight: "bold",
    fontSize: "16px",
    margin: 0,
  },
  taskNameDone: {
    color: "red",
    fontWeight: "bold",
    fontSize: "16px",
    margin: 0,
    textDecoration: "line-through",
  },
  taskCount: {
    color: "white",
    fontSize: "14px",
    margin: 0,
  },
  taskCountDone: {
    color: "white",
    fontSize: "14px",
    margin: 0,
    textDecoration: "line-through",
  },
  buttonContainer: {
    display: "flex",
    gap: "5px",
  },
  editButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
