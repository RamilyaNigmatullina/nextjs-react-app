import styles from './lesson-layout.module.css';
import Link from 'next/link';
import SharedHead from "./shared-head";
import BackLink from "./back-link";

export default function LessonLayout({ children, name, link, backLinkPath }) {
  return (
    <div className={styles.container}>
      <SharedHead/>
      <header>
        <h1 className={styles.heading}>
          {name}
        </h1>
        {link && (<Link href={link} target='_blank'>
          {link}
        </Link>)}
      </header>
      <main>{children}</main>
      <BackLink path={backLinkPath}/>
    </div>
  );
}