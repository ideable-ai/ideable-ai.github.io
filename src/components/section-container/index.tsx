import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return <div className={styles.wrapper}>{children}</div>;
}
