import LessonLayout from '../../components/lesson-layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export const name = '4. Components and Props';
export const link = 'https://reactjs.org/docs/components-and-props.html';

export default function ComponentsAndProps() {
  return(
    <LessonLayout name={name} link={link}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Pages</h2>
        <ul>
          <li key='1'>
            <Link href={`/lessons/02-components-and-props/01-function-component`}>Function component</Link>
          </li>
          <li key='2'>
            <Link href={`/lessons/02-components-and-props/02-class-component`}>Class component</Link>
          </li>
          <li key='3'>
            <Link href={`/lessons/02-components-and-props/03-comments`}>Extracting Components</Link>
          </li>
        </ul>
      </section>
    </LessonLayout>
  )
}
