import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Loader from '../components/Loader';


export default function Home() {
  return (
    <>
      <div className={styles.top_area}>
        <h1 className={styles.title}>Dot Growen</h1>
        <small className={styles.subtitle}>Projects for the playful - Systems for the Serious</small>
      </div>

      <div className={styles.main_area}>

        <div className={styles.content}>
          <img className={styles.icon} src={"/icon-1.png"} />
          <h3>. Project #0001</h3>
          <small>WE ARE NOT THE SAME</small>
        </div>

        <div className={styles.content}>
          <img className={styles.icon} src={"/icon-2.png"} />
          <h3>. Project #0001</h3>
          <small>WE ARE NOT THE SAME</small>
        </div>

        <div className={styles.content}>
          <img className={styles.icon} src={"/icon-3.png"} />
          <h3>. Project #0001</h3>
          <small>WE ARE NOT THE SAME</small>
        </div>

        <div className={styles.content}>
          <img className={styles.icon} src={"/icon-4.png"} />
          <h3>. Project #0001</h3>
          <small>WE ARE NOT THE SAME</small>
        </div>

      </div>
    </>
  )
}
