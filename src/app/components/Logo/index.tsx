import styles from './index.module.scss';

function Logo() {
  return (
    <a href="/">
      <h3 className={styles.name}>
        Hyunmin
        <br />
        Jung
      </h3>
      <p className={styles.job}>front-end developer</p>
    </a>
  );
}

export default Logo;
