import LessonLayout from '../../components/lesson-layout';
import { useEffect, useState } from 'react';

export const name = '3. Rendering Elements';
export const link = 'https://ru.reactjs.org/docs/rendering-elements.html';

export default function RenderingElements() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const localeTime = () => new Date().toLocaleTimeString();

    setInterval(() => setTime(localeTime()), 1000);
  })

  return(
    <LessonLayout name={name} link={link} >
      <h2>Timer</h2>
      <h3>It is {time}.</h3>
    </LessonLayout>
  )
}
