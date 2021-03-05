import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/Post.module.css'

export default function PostContent({ post }) {

    const createdAt = typeof post?.createdAt === 'number' ? new Date(post.createdAt) : post.createdAt.toDate();
    const wordCount = post?.content.trim().split(/\s+/g).length
    const minutesToRead = (wordCount / 100 + 1).toFixed(0)
    const num = post?.number
    const monthName = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const year = createdAt.getFullYear()
    const date = createdAt.getDate()
    const month = monthName[createdAt.getMonth()]




    return (
        <main className={styles.main_area}>
            <h1>{post?.title}</h1>
            <div className={styles.meta}>
                <h6 className={styles.meta_info}>{month} {date} {year}</h6>
                <h6 className={styles.meta_info}>{minutesToRead} MIN</h6>
                <h6 className={styles.meta_info}><span className='green-dot'>#</span>
                    {num.toString().length == 1
                        ? "00000"
                        : num.toString().length == 2
                            ? "0000"
                            : num.toString().length == 3
                                ? "000"
                                : null}
                    {post?.number}</h6>

            </div>
                    <ReactMarkdown>{post?.content}</ReactMarkdown>
        </main>
    )
}