import Link from 'next/link'

export default function Lista() {
    return (
        <nav>
            <ul>                   
                <li>
                    <Link href='/about'>About</Link>
                </li>                   
            </ul>
        </nav>
    )
}

