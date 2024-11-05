import styles from "./styles.module.scss";
import ModalContent from "./content";

interface Props {
  caseNumber: string;
  imgUrl: string;
  children: React.ReactNode;
  onCloseClick: () => void;
}

export default function Modal({
  caseNumber,
  imgUrl,
  children,
  onCloseClick,
}: Props) {
  return (
    <div className={styles.wrapper} data-theme={`case-${caseNumber}`}>
      <div className={styles.container}>
        <button onClick={onCloseClick} className={styles.close_button}>
          <span></span>
          <span></span>
        </button>

        <div className={styles.case}>
          <img src={`/images/solution/fig_case-${caseNumber}.svg`} alt="" />
          <span>
            CASE <br />
            {caseNumber}
          </span>
        </div>

        <div className={styles.visual}>
          <img src={imgUrl} alt="" />
        </div>

        {children}

        <div className={styles.circle}></div>
      </div>
    </div>
  );
}

Modal.Content = ModalContent;
