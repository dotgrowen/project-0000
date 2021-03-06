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

    return (
        <div className={styles.content}>
            <div className={styles.content_box}>
                <Link href={`/${post.username}/${post.slug}`}>
                    <a>
                        <h3 className={styles.content_title}>{post.title}</h3>
                    </a>
                </Link>
                <h6 className={styles.content_subtitle}>
                    {post.description} <span className='green-dot'>/</span> {minutesToRead} min to read
        </h6>
            </div>
            <h6 className={styles.content_by}>
                <Link href={`/${post.username}`}>
                    <a>
                        <strong>By <span className='green-dot'>@</span>{post.username}</strong>
                    </a>
                </Link>
                <span className="push-left">💗 {post.heartCount || 0} </span>
            </h6>
            {/* If admin view, show extra controls for user */}
            {admin && (
                <>
                    <Link href={`/admin/${post.slug}`}>
                        <h3>
                            <button className="btn-blue">Edit</button>
                        </h3>
                    </Link>

                    {post.published ? <p className="text-success">Live</p> : <p className="text-danger">Unpublished</p>}
                </>
            )}
        </div>
    )
}
