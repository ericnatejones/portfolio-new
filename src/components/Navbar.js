import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-links">
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </div>
    <div className="navbar-links"><Link href="/">Profile Home</Link></div>
    

  </nav>
);

export default Navbar;


