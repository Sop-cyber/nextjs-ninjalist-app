import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas error accusamus accusantium, reiciendis vitae aspernatur molestiae itaque veniam dolor?
      </p>
        <p className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas error accusamus accusantium, reiciendis vitae aspernatur molestiae itaque veniam dolor?
      </p>
        <Link href="ninjas">
          <a className={styles.btn}>
            See Ninja Listing
        </a>
        </Link>
      </div>
    </>
  );
};