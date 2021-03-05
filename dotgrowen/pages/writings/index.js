import styles from '../../styles/Writing.module.css';
import PostFeed from '../../components/PostFeed'
import { postToJSON, firestore, fromMillis } from '../../lib/firebase'
import { useState } from 'react'

const LIMIT = 1;

export async function getServerSideProps(context) {
    const postsQuery = firestore
        .collection('post')
        .where('published', "==", true)
        .orderBy('createdAt', 'desc')
        .limit(5);

    const posts = (await postsQuery.get()).docs.map(postToJSON)

    return {
        props: { posts },
    };

}

export default function WritingPage(props) {
    const [posts, setPosts] = useState(props.posts);
    const [loading, setLoading] = useState(false);
    const [postsEnd, setPostsEnd] = useState(false);

    const getMorePosts = async () => {
        setLoading(true);
        const last = posts[posts.length - 1];

        const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;

        const query = firestore
            .collectionGroup('posts')
            .where('published', '==', true)
            .orderBy('createdAt', 'desc')
            .startAfter(cursor)
            .limit(LIMIT);

        const newPosts = (await query.get()).docs.map((doc) => doc.data());

        setPosts(posts.concat(newPosts));
        setLoading(false);


    };

    return (
        <>

            <div className={styles.top_area}>
                <h1 className={styles.title}>. Writings <img className={styles.icon} src={"/icon-7.png"} /></h1>
                <span className={styles.subtitle}>Explore Dot's Writings </span>
            </div>

            <div className={styles.main_area}>
                <PostFeed posts={posts} />

                {!loading && !postsEnd && <button onClick={getMorePosts}>Load more</button>}

                {postsEnd && 'You have reached the end!'}

                {/* <div className={styles.content}>
                    <div className={styles.content_box}>
                        <h3 className={styles.content_title}>. Focus</h3>
                        <h6 className={styles.content_subtitle}>WE ARE NOT THE SAME / 7 min</h6>
                    </div>
                    <h6 className={styles.content_by}><span className="green-dot">#</span>0001</h6>
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
                </div> */}
            </div>
        </>
    )
}
