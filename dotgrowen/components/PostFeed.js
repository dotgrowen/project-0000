import Link from 'next/link'
import styles from '../styles/Writing.module.css'

export default function PostFeed({ posts, admin }) {
    return posts
        ? posts.map(post => <PostItem post={post} key={post.slug} admin={admin} />)
        : null
}

function PostItem({ post, admin = false }) {
    const wordCount = post?.content.trim().split(/\s+/g).length
    const minutesToRead = (wordCount / 100 + 1).toFixed(0)
    const num = post.number
    return (
        <div className={styles.content}>
            <div className={styles.content_box}>
                <Link href={`writings/${post.slug}`}>
                    <h3 className={styles.content_title}>{post.title}</h3>
                </Link>
                <h6 className={styles.content_subtitle}>
                    {post.description} <span className='green-dot'>/</span> {minutesToRead} min to read
        </h6>
            </div>
            <h6 className={styles.content_by}>
                <span className='green-dot'>#</span>
                {num.toString().length == 1
                    ? "000"
                    : num.toString().length == 2
                        ? "00"
                        : num.toString().length == 3
                            ? "0"
                            : null}
        {post.number}
            </h6>
        </div>
    )
}
