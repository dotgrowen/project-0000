import styles from '../styles/Media.module.css';


export default function MediaPage() {
    return (
        <>

            <div className={styles.top_area}>
                <h1 className={styles.title}>. Media<img className={styles.icon} src={"/icon-9.png"} /></h1>
                <span className={styles.subtitle}>Experience Dot's Content </span>
            </div>

            <div className={styles.main_area}>

                <div className={styles.content}>
                    <div className={styles.content_box}>
                        <h3 className={styles.content_title}>. Focus #0001</h3>
                        <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.content_box}>
                        <h3 className={styles.content_title}>. wealth #0002</h3>
                        <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.content_box}>
                        <h3 className={styles.content_title}>. offline #0001</h3>
                        <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.content_box}>
                        <h3 className={styles.content_title}>. opposition #0002</h3>
                        <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
                    </div>
                </div>
            </div>

        </>
    )
}