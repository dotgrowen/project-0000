import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Loader from '../components/Loader';
import Typist from "react-typist";

export default function Home() {
  return (
    <>

      <div className={styles.top_area}>
        <Typist className={styles.typist} cursor={{ show: false, element: '  →', }} avgTypingDelay={150} >
          <span className={styles.title}>They said it couldn't be done </span>
        </Typist>
        <div className={styles.line}></div>
      </div>

      <div className={styles.main_area}>

        <div className={styles.content}>
          <img className={styles.icon} src={"/icon-1.png"} />
          <h3 className={styles.content_title}>. Writing #0001</h3>
          <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
        </div>

        <div className={styles.content}>
          <img className={styles.icon} src={"/icon-2.png"} />
          <h3 className={styles.content_title}>. Writing #0002</h3>
          <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
        </div>

        <div className={styles.content}>
          <img className={styles.icon2} src={"/icon-3.png"} />
          <h3 className={styles.content_title}>. Project #0001</h3>
          <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
        </div>

        <div className={styles.content}>
          <img className={styles.icon2} src={"/icon-4.png"} />
          <h3 className={styles.content_title}>. Project #0002</h3>
          <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
        </div>



      </div>

      {/**********************  BOTTOM SECTION  **********************/}


      <div className={styles.test}></div>
      <div className={styles.bottom_area}>

        <div className={styles.bottom_content}>
          <div className={styles.bottom_box}>
            <div className={styles.bottom_innerbox}></div>
          </div>

          <p className={styles.bottom_p}> <span className={styles.green_dot}>.</span> Conquering The Mind</p>
        </div>


        <div className={styles.bottom_content}>
          <div className={styles.bottom_box}>
            <div className={styles.bottom_innerbox}></div>
          </div>

          <p className={styles.bottom_p}> <span className={styles.green_dot}>.</span> Building Worlds ( virtually )</p>
        </div>

      </div>
      <div className={styles.footer}>\
      <small className={styles.footer1}>Created with  . 
          <span>
            <img className={styles.icon3} src={"/icon-5.png"} /><img className={styles.icon3} src={"/icon-6.png"} />
          </span>
      . by <span className={styles.green_dot}>@</span>dotgrowen
      </small>
        <small className={styles.footer2}>Copyright © 2021 teamgrowen LLC </small>
        
      </div>

    </>
  )
}
