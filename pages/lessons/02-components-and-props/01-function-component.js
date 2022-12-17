import LessonLayout from '../../../components/lesson-layout';

function FunctionComponent(props) {
  const defaultName = 'Ramilya';
  const name = props.name || defaultName;

  return(
    <LessonLayout name='Function component' backLinkPath='/lessons/02-components-and-props'>
      <p>Hello, {name}!</p>
    </LessonLayout>
  )
}

export default FunctionComponent;