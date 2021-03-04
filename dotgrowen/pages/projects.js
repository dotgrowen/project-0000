import styles from '../styles/Project.module.css';


export default function ProjectPage() {
    return (
        <>

            <div className={styles.top_area}>
                <h1 className={styles.title}>. Projects <img className={styles.icon} src={"/icon-8.png"} /></h1>
                <span className={styles.subtitle}>Experiment w/ Dot's Projects </span>
            </div>

            <div className={styles.main_area}>

                <div className={styles.content}>
                    <h3 className={styles.content_title}>. Focus #0001</h3>
                    <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.content_title}>. wealth #0002</h3>
                    <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.content_title}>. offline #0001</h3>
                    <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.content_title}>. opposition #0002</h3>
                    <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.content_title}>. Focus #0001</h3>
                    <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.content_title}>. wealth #0002</h3>
                    <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.content_title}>. offline #0001</h3>
                    <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.content_title}>. opposition #0002</h3>
                    <small className={styles.content_subtitle}>WE ARE NOT THE SAME</small>
                </div>

            </div>

        </>
    )
}
