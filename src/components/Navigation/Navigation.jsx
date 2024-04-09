import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
    return (
        <nav className="Navigation">
            <ul>
                <li>
                    <Link to={'/'} className='nav-link'>
                        Home
                    </Link>
                </li>
                <li>Rules</li>
            </ul>
        </nav>
    )
}