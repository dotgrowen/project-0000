import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Loader from '../components/Loader';


export default function Home() {
  return (
    <>

      <div className={styles.top_area}>
          <span className={styles.typist}>Digital Creator — Conquering the Mind </span>
        <h1 className={styles.title}>Dot Growen</h1>
        <div className={styles.line}></div>
      </div>

      <div className={styles.main_area}>

        <div className={styles.content}>
          <img className={styles.icon} src={"/icon-1.png"} />
          <h3 className={styles.content_title}>. Focus #0001</h3>
          <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
        </div>

        <div className={styles.content}>
          <img className={styles.icon} src={"/icon-2.png"} />
          <h3 className={styles.content_title}>. wealth #0002</h3>
          <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
        </div>

        <div className={styles.content}>
          <img className={styles.icon2} src={"/icon-3.png"} />
          <h3 className={styles.content_title}>. offline #0001</h3>
          <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
        </div>

        <div className={styles.content}>
          <img className={styles.icon2} src={"/icon-4.png"} />
          <h3 className={styles.content_title}>. opposition #0002</h3>
          <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
        </div>



      </div>

      {/**********************  BOTTOM SECTION  **********************/}


      <div className={styles.test}></div>

      <div className={styles.footer}>
      
        <small className={styles.footer1}>Copyright © 2050 teamgrowen LLC </small>
        
      </div> 

    </>
  )
}
