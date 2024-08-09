import Navigation from '@/components/Navigation'
import General from '../../styles/General.module.css'

export default function Slug({ title, content }) {
    return(
        <div>
            <Navigation />
            <div className={`${General.page}`}>
                <div className="text-center">
                    <div className="text-xl font-bold mt-10 ">{ title }</div>
                    <div className="text-lg mb-2">{ content }</div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const res = await fetch(`http://localhost:3000/api/blog/post?slug=${ slug }`)
    const post = await res.json()

    return {
        props: {
            title: post[0].title,
            content: post[0].content
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:3000/api/blog/posts")
    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: {slug: post.slug}
    }))

    return { paths, fallback: false }
}