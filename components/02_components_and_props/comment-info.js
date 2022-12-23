import styles from './comment-info.module.css'
import Date from "../date";

export default function CommentInfo(props) {
  return (
    <div className={styles.info}>
      <div className={styles.name}>
        {props.author.name}
      </div>
      <div className={styles.date}>
        <Date dateString={props.date} />
      </div>
    </div>
  );
}
