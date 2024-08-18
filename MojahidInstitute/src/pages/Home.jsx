import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import WhyChooseDiv from "./WhyChooseDiv";

function Home() {
  return (
    <>
      <main className="section-hero">
        <div className="container grid grid-two--cols">
          <div className="hero-content">
            <p className="common-subheading">Empowering Life Long Learning</p>
            <h1>Unlock Your Potential with Md Mojahid EduHub</h1>
            <p className="para">
              Welcome to Md Mojahid EduHub. your gateway to knowledge and skills
              development We are decided to provideing high-quality, accessbile
              education for learners of all ages and backgrounds.
            </p>
            <div className="btn-div">
              <button className="btn">Learn With Us</button>
            </div>
          </div>
          <div className="hero-img">
            <img src="./images/hero3.jpg" alt="hero-image-loading" />
          </div>
        </div>
      </main>
      <About />
      <Services />
      <WhyChooseDiv />
      <Contact />
    </>
  );
}

export default Home;
