import styles from "./back-to-home.module.css";
import Link from "next/link";

export default function BackToHome({ home }) {
  return(
    <>
      {!home && (
        <div className={styles.backToHome}>
          <Link legacyBehavior href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </>
  )
}