import styles from "../../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About us</h1>
      <main>
        <p>
          Welcome to the official explorer for The New York Times Best Seller
          list explorer.
        </p>
        <p>We hope you enjoy your stay!</p>
      </main>
    </div>
  );
}
