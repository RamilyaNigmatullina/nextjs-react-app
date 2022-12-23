import LessonLayout from '../../../components/lesson-layout';
import Comment from '../../../components/02_components_and_props/comment';

export default function Comments() {
  const johnSmith = { name: 'John Smith', avatarUrl: '/images/john_smith.jpeg' }
  const walterRaleigh = { name: 'Sir Walter Raleigh', avatarUrl: '/images/walter_raleigh.png' }

  return(
    <LessonLayout name='Extracting Components' backLinkPath='/lessons/02-components-and-props'>
      <h2>Comments</h2>
      <>
        <Comment
          author={johnSmith}
          date={'1584-12-25'}
          text={'I played an important role in the establishment of the colony at Jamestown, Virginia.'}
        />
        <Comment
          author={walterRaleigh}
          date={'1584-12-22'}
          text={
            'And I played a leading part in English colonisation of North America, suppressed rebellion in Ireland,' +
            'helped defend England against the Spanish Armada and held political positions under Elizabeth I.'
          }
        />
      </>
    </LessonLayout>
  );
}
