import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
            alt="Picture of the author"
            priority={true}
          />
          <h2>Developer</h2>
          <a href="https://react-arcade.netlify.app/" target="_blank" className="work-link">Visit My Arcade<FontAwesomeIcon icon={faGamepad} className="icon" /></a>
          <a href="https://github.com/ericnatejones" target="_blank" className="work-link">Visit My Github<FontAwesomeIcon icon={faGithub} className="icon" /></a>
          <a href="https://www.linkedin.com/in/ericnatejones/" target="_blank" className="work-link">Visit My LinkedIn<FontAwesomeIcon icon={faLinkedin} className="icon" /></a>
        </div>
        
        <div style={{display:"none"}} className="feed-container right-feed">
          <h3>API Feed</h3>
          {/* API feed will go here */}
        </div>
      </div>
    </>
  );
}
