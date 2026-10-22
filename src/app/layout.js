import Navbar from '../components/Navbar';
import Link from 'next/link';
import './globals.css';
export const metadata = {
  metadataBase: new URL('https://ericnatejones.com'),
  title: { default: 'Eric Jones | Computer & Web Help in Carson, WA', template: '%s | Eric Jones' },
  description: 'Websites, custom tools, and patient technology guidance for small businesses in Carson, WA and surrounding areas. First hour free.',
};
export default function RootLayout({ children }) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main">{children}</main><footer className="site-footer shell"><Link className="brand" href="/">ERIC JONES<span>COMPUTER & WEB HELP</span></Link><p>Carson, WA + surrounding areas</p><a href="tel:+18019970379">801.997.0379 ↗</a></footer></body></html>;
}
