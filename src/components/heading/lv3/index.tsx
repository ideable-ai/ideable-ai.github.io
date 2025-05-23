import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function HeadingLv3({ children }: Props) {
  return <h2 className={styles.heading}>{children}</h2>;
}
