import { useRouter } from 'next/router'
import Link from 'next/link'

export default function PostPages({ }) {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <main>
         
            <h1>Hii <a  href="https://www.google.com" target="_blank">butt</a>  </h1>
        </main>
    )
}