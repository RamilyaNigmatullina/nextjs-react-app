import SharedHead from './shared-head.js';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import BackLink from "./back-link";

const name = 'Ramilya';
export const siteTitle = 'Ramilya\'s Blog';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <SharedHead/>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link legacyBehavior href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link legacyBehavior href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      <BackLink home={home} />
    </div>
  );
}