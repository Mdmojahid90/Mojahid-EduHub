import { MdDateRange } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
function Blog() {
  return (
    <>
      <section className="section-blog">
        <div className="container">
          <h3 className="common-heading">Explore Our Blog</h3>
          <p>
            Exploreing our blog insightgul articles, tips. and update on the
            worldof education. skills development. and personal growth
          </p>
        </div>
        <div className="container grid grid-three--cols main-blog">
          <div className="blog-div">
            <div className="blog-img">
              <img src="./images/clients/a.jpg" alt="" />
            </div>
            <div className="blog-content">
              <div className="blog-date">
                <p>
                  <MdDateRange className="blog-icon" />
                </p>
                <p>
                  <FaArrowRight className="blog-icon" />
                </p>
              </div>
              <p>Sept 22 2024</p>
              <h3 className="title">Code your first react with us</h3>
            </div>
          </div>
          <div className="blog-div">
            <div className="blog-img">
              <img src="./images/clients/b.jpg" alt="" />
            </div>
            <div className="blog-content">
              <div className="blog-date">
                <p>
                  <MdDateRange className="blog-icon" />
                </p>
                <p>
                  <FaArrowRight className="blog-icon" />
                </p>
              </div>
              <p>Sept 22 2024</p>
              <h3 className="title">Code your first react with us</h3>
            </div>
          </div>
          <div className="blog-div">
            <div className="blog-img">
              <img src="./images/clients/c.jpg" alt="" />
            </div>
            <div className="blog-content">
              <div className="blog-date">
                <p>
                  <MdDateRange className="blog-icon" />
                </p>
                <p>
                  <FaArrowRight className="blog-icon" />
                </p>
              </div>
              <p>Sept 22 2024</p>
              <h3 className="title">Code your first react with us</h3>
            </div>
          </div>
          <div className="blog-div">
            <div className="blog-img">
              <img src="./images/clients/f.jpg" alt="" />
            </div>
            <div className="blog-content">
              <div className="blog-date">
                <p>
                  <MdDateRange className="blog-icon" />
                </p>
                <p>
                  <FaArrowRight className="blog-icon" />
                </p>
              </div>
              <p>Sept 22 2024</p>
              <h3 className="title">Code your first react with us</h3>
            </div>
          </div>
          <div className="blog-div">
            <div className="blog-img">
              <img src="./images/clients/e.jpg" alt="" />
            </div>
            <div className="blog-content">
              <div className="blog-date">
                <p>
                  <MdDateRange className="blog-icon" />
                </p>
                <p>
                  <FaArrowRight className="blog-icon" />
                </p>
              </div>
              <p>Sept 22 2024</p>
              <h3 className="title">Code your first react with us</h3>
            </div>
          </div>
          <div className="blog-div">
            <div className="blog-img">
              <img src="./images/clients/h.jpg" alt="" />
            </div>
            <div className="blog-content">
              <div className="blog-date">
                <p>
                  <MdDateRange className="blog-icon" />
                </p>
                <p>
                  <FaArrowRight className="blog-icon" />
                </p>
              </div>
              <p>Sept 22 2024</p>
              <h3 className="title">Code your first react with us</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
