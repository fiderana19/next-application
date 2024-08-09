import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import General from '../../styles/General.module.css'

export default function Blog() {
    const [articles, setArticles] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        getArticles()
    },[])

    const getArticles = async () => {
        const res = await fetch('/api/blog/posts')
        const posts = await res.json()
        setArticles(posts)
        setLoad(true)
        console.log(posts)
    }

    return(
        <div>
            <Navigation />
            <div className={`${General.page} text-center`}>
                <div className="text-xl font-bold mt-10 mb-2">Blog</div>
                <ul>
                    {articles && articles.map((article, index) => {
                        return <li key={index} className="underline"><Link href={`/blog/${article.slug}`} > {article.title} </Link> </li>
                    })}
                </ul>
            </div>
        </div>
    )
}