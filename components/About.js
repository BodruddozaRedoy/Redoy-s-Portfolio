import Counter from "./Counter";

const About = () => {
  return (
    <section id="about" className="about-area rel z-1">
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Me</span>
                  <h2>
                    Professional <span>Web Developer</span> For Your Digital
                    Business
                  </h2>
                  <p>
                    <span style={{color: "greenyellow"}}>Hi</span>, I'm a passionate MERN stack developer with a strong
                    enthusiasm for building modern web applications. <br /> <span style={{color: "greenyellow"}}>My</span> journey
                    into programming started with a curiosity for how websites
                    and applications work. That curiosity led me to learn the
                    MERN stack through Programming Hero, where I built various
                    projects that solidified my skills in React, Node.js,
                    Express, and MongoDB. <br /> <span style={{color: "greenyellow"}}>I</span> enjoy solving complex problems,
                    developing user-friendly interfaces, and working on
                    real-world projects that make an impact. My current focus is
                    on React and Next.js, where I create scalable, efficient,
                    and engaging applications. <br /> <span style={{color: "greenyellow"}}>Beyond</span> coding, I'm a huge gaming
                    enthusiast! Whether it's exploring open-world adventures or
                    competing in fast-paced multiplayer games, I love the
                    challenge and excitement gaming brings. I also enjoy
                    exploring new technologies and keeping up with the latest
                    trends in web development. <br /> <span style={{color: "greenyellow"}}>I</span> believe in continuous learning,
                    and I'm always looking for opportunities to grow as a
                    developer. My goal is to contribute to meaningful projects
                    and collaborate with like-minded individuals to create
                    something amazing!
                  </p>
                </div>
                <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                  {/* <li>Branding &amp; Design</li> */}
                  {/* <li>Digital Marketing</li> */}
                  <li>Web Development</li>
                  <li>Web Design</li>
                </ul>
                <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
                  <div className="info-box-item">
                    <i className="far fa-envelope" />
                    <div className="content">
                      <span>Email Me</span>
                      <br />
                      <a href="mailto:bodruddozaredoy@gmail.com">
                        bodruddozaredoy@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="info-box-item">
                    <i className="far fa-phone" />
                    <div className="content">
                      <span>Make A Call</span>
                      <br />
                      <a href="callto:+8801758383869">+880 (175) 838 3869</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-image-part wow fadeInUp delay-0-3s">
                <img src="assets/images/about/profileImg.jpg" alt="About Me" />
                <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                  <img src="assets/images/about/btn-image1.png" alt="Image" />
                  <h6>Experience Designer</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="about-btn btn-two wow fadeInRight delay-0-5s">
                  <img
                    style={{
                      width: "45px",
                      height: "45px",
                      objectFit: "cover",
                    }}
                    src="assets/images/about/profileImg-small.jpg"
                    alt="Image"
                  />
                  <h6>Bodruddoza Redoy</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="dot-shape">
                  <img src="assets/images/shape/about-dot.png" alt="Shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default About;

export const About2 = () => {
  return (
    <section
      id="about"
      className="about-area-two rel z-1 pt-130 rpt-100 pb-130 rpb-100"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-content-two rel z-2 rmb-55">
              <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" />
                  Introduction of Myself
                </span>
                <h2>
                  i,m a digital <span>designer</span> studio connecting brands
                  to people through
                </h2>
              </div>
              <div className="text pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="row">
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-2s">
                    <small>born In</small>
                    <b>New york</b>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-3s">
                    <small>experience</small>
                    <b>20+ Years</b>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-4s">
                    <small>date of birth</small>
                    <b>27 June 1983</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-counter-wrap">
              <div className="row gap-40 justify-content-center">
                <div className="col-lg-5 col-6 mx-5">
                  <div className="counter-item counter-text-wrap mb-25 wow fadeInUp delay-0-2s">
                    <Counter end={8} extraClass={"k"} />
                    <span className="counter-title">project completed</span>
                  </div>
                </div>
                <div className="col-lg-5 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                    <Counter end={8} extraClass={"k"} />
                    <span className="counter-title">Awward achievmentd</span>
                  </div>
                </div>
                <div className="col-lg-5 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                    <Counter end={80} extraClass={"k"} />
                    <span className="counter-title">Satisfied customers</span>
                  </div>
                </div>
              </div>
              <div className="counter-logo">
                <img
                  className="wow zoomIn delay-0-2s"
                  src="assets/images/shape/circle-logo.png"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
