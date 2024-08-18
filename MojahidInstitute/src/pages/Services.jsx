import { FaLaptopCode } from "react-icons/fa";
function Services() {
  return (
    <>
      <section className="section-service">
        <div className="container">
          <h2 className="common-heading">Explore Our Courses</h2>
          <p>Discover a variety of courses across different categories.</p>
        </div>
        <div className="container grid grid-four--cols">
          <div className="services-div">
            <div className="icon">
              <FaLaptopCode className="service-icon" />
            </div>
            <h3 className="title">JS Development</h3>
            <p>
              Creating dynamic. interactive wep applications for user
              engagement.
            </p>
          </div>
          <div className="services-div">
            <div className="icon">
              <FaLaptopCode className="service-icon" />
            </div>
            <h3 className="title">Python</h3>
            <p>
              Versatile language for problem-solving and application
              development.
            </p>
          </div>
          <div className="services-div">
            <div className="icon">
              <FaLaptopCode className="service-icon" />
            </div>
            <h3 className="title">C++ Development</h3>
            <p>Powerfull efficient coding language for software development.</p>
          </div>
          <div className="services-div">
            <div className="icon">
              <FaLaptopCode className="service-icon" />
            </div>
            <h3 className="title">Java Development</h3>
            <p>Cross-platform application development with java programing.</p>
          </div>
          <div className="services-div">
            <div className="icon">
              <FaLaptopCode className="service-icon" />
            </div>
            <h3 className="title">SQL Development</h3>
            <p>
              Effective and management and retrival using SQL database language.
            </p>
          </div>
          <div className="services-div">
            <div className="icon">
              <FaLaptopCode className="service-icon" />
            </div>
            <h3 className="title">HTML Development</h3>
            <p>Web content structure with essential markup language.</p>
          </div>
          <div className="services-div">
            <div className="icon">
              <FaLaptopCode className="service-icon" />
            </div>
            <h3 className="title">CSS Development</h3>
            <p>Styling web elements for visually appealing websites.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
