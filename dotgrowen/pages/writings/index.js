import styles from '../Writing.module.css';


export default function WritingPage() {
    return (
        <>

            <div className={styles.top_area}>
                <h1 className={styles.title}>. Writings <img className={styles.icon} src={"/icon-7.png"} /></h1>
                <span className={styles.subtitle}>Explore Dot's Writings </span>
            </div>

            <div className={styles.main_area}>

                <div className={styles.content}>
                    <div className={styles.content_box}>
                        <h3 className={styles.content_title}>. Focus</h3>
                        <h6 className={styles.content_subtitle}>WE ARE NOT THE SAME</h6>
                    </div>
                    <h6 className={styles.content_by}><span className="green-dot">@</span>dotgrowen #0001</h6>
                </div>

                <div className={styles.content}>
                    <div className={styles.content_box}>
                        <h3 className={styles.content_title}>. wealth</h3>
                        <h6 className={styles.content_subtitle}>WE ARE NOT THE SAME</h6>
                    </div>
                    <h6 className={styles.content_by}><span className="green-dot">@</span>dotgrowen</h6>
                </div>

                <div className={styles.content}>
                    <div className={styles.content_box}>
                        <h3 className={styles.content_title}>. offline</h3>
                        <h6 className={styles.content_subtitle}>WE ARE NOT THE SAME</h6>
                    </div>
                    <h6 className={styles.content_by}><span className="green-dot">@</span>dotgrowen</h6>
                </div>

                <div className={styles.content}>
                    <div className={styles.content_box}>
                        <h3 className={styles.content_title}>. opposition</h3>
                        <h6 className={styles.content_subtitle}>WE ARE NOT THE SAME</h6>
                    </div>
                    <h6 className={styles.content_by}><span className="green-dot">@</span>dotgrowen</h6>
                </div>
            </div>
        </>
    )
}
