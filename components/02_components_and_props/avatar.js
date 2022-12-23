import Image from 'next/image';
import styles from './avatar.module.css';

export default function Avatar(props) {
  return (
    <Image
      priority
      src={props.user.avatarUrl}
      className={styles.borderRadius}
      height={60}
      width={60}
      alt={props.user.name}
    />
  );
}
