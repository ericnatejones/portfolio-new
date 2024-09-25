'use client'

import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Contact from "../components/Contact"
import Projects from "../components/Projects";

export default function Home() {
  return (
    
        
       <>
      
      <div className="content-wrapper">
        {/* <div className="feed-container left-feed">
          <h3>Instagram Feed</h3>
          <iframe
        src="https://snapwidget.com/embed/your-instagram-feed-code"
        title="Instagram Feed"
        frameBorder="0"
        scrolling="no"
        style={{ width: '100%', height: '100%' }}
      ></iframe>
        </div> */}
        
        <div className="content">
          <h1 className="name">Eric Jones</h1>
          <Image
            src="/profile.jpg"
            width={200}
            height={200}
            style={{display: "inline-block"}}
            alt="Picture of the author"
            priority={true}
          />
          <div className="mb-8">
          <h2>Developer</h2>
          </div>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </>
  );
}
