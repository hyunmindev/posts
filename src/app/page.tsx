import ClientComponent from '@/app/components/ClientComponent';

import styles from './page.module.scss';

function Index() {
  return (
    <>
      <header className={styles.header}>nextjs boilerplate</header>
      <main className="container">
        <h1>Nextjs Boilerplate</h1>
        <ClientComponent />
        <ul>
          <li>Next.js</li>
          <li>Typescript</li>
        </ul>
      </main>
    </>
  );
}

export default Index;
