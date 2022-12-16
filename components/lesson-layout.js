import styles from './lesson-layout.module.css';
import Link from 'next/link';
import SharedHead from "./shared-head";
import BackToHome from "./back-to-home";

export default function LessonLayout({ children, name, link }) {
  return (
    <div className={styles.container}>
      <SharedHead/>
      <header>
        <h1 className={styles.heading}>
          {name}
        </h1>
        <Link href={link} target='_blank'>
          {link}
        </Link>
      </header>
      <main>{children}</main>
      <BackToHome />
    </div>
  );
}