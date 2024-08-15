// pages/projects.js
import Head from 'next/head';

export default function Projects() {
  return (
   <div className="contact content">
        <header>
          <h1>My Projects</h1>
        </header>

        <section>
          <h2>React Arcade</h2>
          <p>
            Splash page: <a href='https://react-arcade.netlify.app/'>My Arcade</a> 
          </p>
          <p>
            These projects are where I solve some of my biggest code challenges in React. 
          </p>
        </section>
        <section>
          <h2>Terrain Builder</h2>
          <p>
            <a href='https://terrain-builder.netlify.app/'>My Terrain Builder</a> 
          </p>
          <p>
            I'm stoked on what I was able to do here. Take some time to figure out how it works! 
          </p>
        </section>

        <section>
          <h2>Dentist Registry</h2>
          <p>
            I'm working on a comprehensive dentist registry, similar to Zillow or Rentals.com, but specifically for dentists. 
            This platform will help users find and connect with dental professionals in their area, complete with reviews, 
            ratings, and detailed profiles.
          </p>
          <p>
            Stay tuned for more updates as I build out features and refine the user experience.
          </p>
        </section>

        <section>
          <h2>Form Filler for Lawyers</h2>
          <p>
            I've developed a form filler application designed specifically for my brother, who is a lawyer. This tool will 
            streamline the process of filling out legal forms, reducing repetitive tasks and improving efficiency.
          </p>
          <p>
            This project is tailored to meet the specific needs of legal professionals, ensuring accuracy and ease of use.
          </p>
        </section>

        <section>
          <h2>Code Pals Portfolio</h2>
          <p>
            Students can use this framework to demonstrate how we can funnel employers to Code Pals through our portfolios. 
          </p>
          <p>
            The theme is “Polished in the front, party in the back.” Users can toggle a button to reveal the Code Ony stuff. 
            Default elements will turn over to show how you can work with a developer for free to improve the site as practice.
            Useful users can hang out for free, while less useful ones will be encouraged to contribute financially.
          </p>
          
        </section>

        <section>
          <h2>Get Involved with Code Pals</h2>
          <p>
            Free tier users can contribute to their achievements database and add personal feeds to their profiles. 
            Sign up for mentorship for a low monthly fee and get involved in our community.
          </p>
          
        </section>
      </div>
  );
}
