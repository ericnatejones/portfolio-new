import Link from 'next/link';
export default function Navbar() {
  return <header className="site-header"><nav className="shell navigation" aria-label="Main navigation"><Link className="brand" href="/">ERIC JONES<span>COMPUTER & WEB HELP</span></Link><div className="nav-links"><Link href="/#services">Services</Link><Link href="/projects">Selected work</Link><Link href="/about">About Eric</Link><Link className="nav-contact" href="/contact">Let’s talk <span aria-hidden="true">↗</span></Link></div></nav></header>;
}
