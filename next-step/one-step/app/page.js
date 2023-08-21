import Link from 'next/link';
import Image from 'next/image';
import heroPic from "../public/images/index-hero.jpg"
import profilePic from "../public/images/profile.jpg"

export const metadata = {
  title: "Yamasaki",
  description: "Yamasakiの模写コーディングサイトです",
}

const Index = () => {
  return (
    <>
      <div className="hero">
        <Image src={heroPic} alt="hero" />
        <div className="textContainer">
          <h1>I'm Yuta Yamasaki!</h1>
          <h3>JavaScript Beginer</h3>
        </div>
      </div>
      <div className="container">
        <div className="profile">
          <div>
            <h2>About</h2>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' s standard dummy text ever since the 1500 s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960 s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div>
            <Image src={profilePic} alt="hero" />
          </div>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skillsContainer">
            <div>
              <img src="/images/javascript.svg" alt="javascript" />
              <span>JavaScript / Studying </span>
            </div>

            <div>
              <img src="/images/react-1.svg" alt="react" />
              <span>React / Studying </span>
            </div>

            <div>
              <img src="/images/typescript.svg" alt="typescript" />
              <span>TypeScript / Studying </span>
            </div>

            <div>
              <img src="/images/next.svg" alt="next" />
              <span>Next.JS / Studying </span>
            </div>

          </div>
        </div>


        <div className="ctaButton">
          <Link href="/contact">Make It Happen!</Link>
        </div>
      </div>
    </>
  )
}

export default Index