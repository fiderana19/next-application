import Navigation from '@/components/Navigation'
import General from '../styles/General.module.css'

export default function About() {

    return(
        <div>
            <Navigation />
            <div className={`${General.page}`}>
                <div className="text-xl font-bold mt-10 mb-2">About</div>
            </div>
        </div>
    )
}