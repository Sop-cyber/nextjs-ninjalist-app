import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <h1>Ninja List</h1>
                </Link>
            </div>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/ninjas'>Ninja List</Link>
        </nav>
    );
}

export default Navbar;