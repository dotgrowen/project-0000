import { useRouter } from 'next/router'
import Link from 'next/link'
import { postToJSON, firestore } from '../../lib/firebase'
import PostContent from '../../components/PostContent';
import { useDocumentData } from 'react-firebase-hooks/firestore';


export async function getStaticProps({ params }) {
    const { slug } = params;

    let post;
    let path;

    const postRef = firestore.collection('post').doc(slug);
    post = postToJSON(await postRef.get());

    path = postRef.path;

    return {
        props: { post, path },
        revalidate: 5000,
    };
}

export async function getStaticPaths() {
    // Improve my using Admin SDK to select empty docs
    const snapshot = await firestore.collectionGroup('post').get();

    const paths = snapshot.docs.map((doc) => {
        const { slug } = doc.data();
        return {
            params: { slug },
        };
    });

    return {
        // must be in this format:
        // paths: [
        //   { params: { username, slug }}
        // ],
        paths,
        fallback: 'blocking',
    };
}


export default function Post(props) {
    const postRef = firestore.doc(props.path);
    const [realtimePost] = useDocumentData(postRef);

    const post = realtimePost || props.post;

    return (
        <main>

            <section>
                <PostContent post={post} />
            </section>

        </main>
    )
}