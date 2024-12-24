import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}> <Link style={{ color: 'white' }} to={'/'}>Tasks</Link> </li>
        <li style={styles.navItem}><Link style={{ color: 'white' }} to={'/add'}>Add Task</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#333",
    color: "#fff",
    width: "100vw",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
  },
  navList: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    padding: "0 50px",
    listStyle: "none",
    margin: 0,
  },
  navItem: {
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};


