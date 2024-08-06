import Image from "next/image";

export default function Home() {
  return (

    <div class="container">
        <div class="content">
            <h1 class="name">Eric Jones</h1>
            <Image
              src="/profile.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
            />
            <h2>Developer</h2>
            <a href="https://react-arcade.netlify.app/" target="_blank" class="work-link">Visit My Arcade</a>
            <a href="https://github.com/ericnatejones" target="_blank" class="work-link">Visit My Github</a>
            <a href="https://www.linkedin.com/in/ericnatejones/" target="_blank" class="work-link">Visit My LinkedIn</a>
        </div>

    </div>


  );
}
