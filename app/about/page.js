import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";

export const metadata = {
  title: "About Me",
};

const About = () => {
  return (
    <NoxfolioLayout>
      <PageBanner pageName={"About Me"} />

      <div className="about-main-image-area pt-40">
        <div className="container">
          <div className="about-main-image wow fadeInUp delay-0-5s">
            <img src="assets/images/about/about-page.jpg" alt="About Page" />
          </div>
        </div>
      </div>
      {/* About Page Area start */}
      <section className="about-page-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="about-page-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Me</span>
                  <h2>
                    Passionate <span>Mern Stack</span> Developer
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
                <ul className="list-style-one two-column pb-30 wow fadeInUp delay-0-2s">
                  {/* <li>Branding &amp; Design</li> */}
                  {/* <li>Digital Marketing</li> */}
                  <li>Web Development</li>
                  <li>Web Design</li>
                </ul>
                <Link legacyBehavior href="/">
                  <a className="theme-btn wow fadeInUp delay-0-2s">
                    Learn More <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-right-part wow fadeInLeft delay-0-3s">
                <div className="experience-years">
                  <b>2+</b>
                  <h5>Years Of Learning</h5>
                </div>
                <div className="about-btn one wow fadeInRight delay-0-4s">
                  <img src="assets/images/about/btn-image1.png" alt="Image" />
                  <h6>Experience Designer</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="about-btn two wow fadeInRight delay-0-5s">
                  <img style={{width: "35px"}} src="assets/images/about/small-img.png" alt="Image" />
                  <h6>Bodruddoza Redoy</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="about-btn three wow fadeInRight delay-0-4s">
                  <img src="assets/images/about/btn-image1.png" alt="Image" />
                  <h6>Experience Developer</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="dot-shape one">
                  <img
                    src="assets/images/shape/about-dots-two.png"
                    alt="Shape"
                  />
                </div>
                <div className="dot-shape two">
                  <img
                    src="assets/images/shape/about-dots-two.png"
                    alt="Shape"
                  />
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
      {/* About Page Area end */}
      {/* Services Area start */}
      <Services extraClass={"bgc-black"} />
      {/* Services Area end */}
      {/* FAQs Area start */}
      {/* <section id="faqs" className="faqs-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-image-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="image-one">
                  <img src="assets/images/faqs/faq-one.jpg" alt="FAQ" />
                </div>
                <div className="image-two">
                  <img src="assets/images/faqs/faq-two.jpg" alt="FAQ" />
                </div>
                <div className="square-shape" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content-part rel z-2">
                <div className="section-title mb-40 wow fadeInUp delay-0-4s">
                  <h2>
                    Professional Solutions For Your <span>Digital Product</span>{" "}
                    Design and development
                  </h2>
                </div>
                <Faq />
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
      </section> */}
      {/* FAQs Area end */}
      {/* Testimonial Area start */}
      {/* <Testimonial /> */}
      {/* Testimonial Area end */}
      {/* Client Log start */}
      {/* <Clients /> */}
    </NoxfolioLayout>
  );
};
export default About;
