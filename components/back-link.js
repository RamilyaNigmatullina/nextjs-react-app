import styles from "./back-link.module.css";
import Link from "next/link";

export default function BackLink({ home, path }) {
  const text = path ? 'Back' : 'Back to home';
  const defaultPath = '/';
  const href = path || defaultPath;

  return(
    <>
      {!home && (
        <div className={styles.backToHome}>
          <Link legacyBehavior href={href}>
            <a>← {text}</a>
          </Link>
        </div>
      )}
    </>
  )
}