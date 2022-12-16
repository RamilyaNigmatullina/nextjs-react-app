import Head from 'next/head'
import Link from "next/link";
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { loadLessons } from "../lib/lessons";

export default function Home({ lessons }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Ramilya and I'm learning React and NextJS.</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Lessons</h2>
        <ul className={utilStyles.list}>
          {lessons.map(({ id, name, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/lessons/${name}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  const lessons = loadLessons();

  return {
    props: {
      lessons,
    }
  }
};