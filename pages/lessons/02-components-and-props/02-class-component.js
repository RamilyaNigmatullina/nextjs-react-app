import LessonLayout from '../../../components/lesson-layout';
import React from "react";

class ClassComponent extends React.Component {
  render() {
    const defaultName = 'Ramilya';
    const name = this.props.name || defaultName;

    return (
      <LessonLayout name='Class component' backLinkPath='/lessons/02-components-and-props'>
        <p>Hello, {name}!</p>
      </LessonLayout>
    )
  }
}

export default ClassComponent;