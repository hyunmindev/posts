import styles from './index.module.scss';

function Logo() {
  return (
    <a href="/">
      <h1 className={styles.name}>
        Hyunmin
        <br />
        Jung
      </h1>
      <p className={styles.job}>front-end Developer</p>
    </a>
  );
}

export default Logo;
