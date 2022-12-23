import CommentInfo from './comment-info';
import Date from './../date';
import styles from './comment.module.css';
import Avatar from "./avatar";

export default function Comment(props) {
  return (
    <div className={styles.comment}>
      <Avatar user={props.author} />
      <div className={styles.content}>
        <CommentInfo {...props} />
        <div className="Comment-text">
          {props.text}
        </div>
      </div>
    </div>
  );
}
