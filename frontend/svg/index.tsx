import styles from "./styles.module.scss";

export const TickIcon: React.FC = () => {
  return (
    <div className={styles.w4rAnimated_checkmark}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        <circle
          cx="65.1"
          cy="65.1"
          r="62.1"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          className={`${styles.path} ${styles.circle} stroke-green-500`}
        ></circle>
        <path
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M100.2 40.2L51.5 88.8 29.8 67.5"
          className={`${styles.path} ${styles.circle} stroke-green-500`}
        ></path>
      </svg>
    </div>
  );
};
