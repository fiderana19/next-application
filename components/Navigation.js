import Link from "next/link"

export default function Navigation() {
    return(
        <div className="flex justify-between bg-blue-600 py-3 text-white px-5">
            <div className="text-xl font-bold"><Link href="/">App</Link></div>
            <ul className="flex gap-2 text-lg font-medium">
                <li className="hover:underline"><Link href="/">Accueil</Link></li>
                <li className="hover:underline"><Link href="/todo">To Do</Link></li>
                <li className="hover:underline"><Link href="/about">About</Link></li>
                <li className="hover:underline"><Link href="/form">Form</Link></li>
                <li className="hover:underline"><Link href="/blog">Blog</Link></li>
            </ul>
        </div>
    )
}