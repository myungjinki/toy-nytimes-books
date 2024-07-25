import styles from "../styles/navigation.module.css";
import Link from "next/link";

export default function Nagivation() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
