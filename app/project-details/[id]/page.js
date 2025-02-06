"use client";
import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import { useRouter } from "next/router";

// export const metadata = {
//   title: "Projects Details",
// };

const ProjectDetails = ({ params }) => {
  // const router = useRouter()
  const { id: _id } = params;
  const [projects, setProjects] = useState();
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const filter = data?.find((prev) => prev.id == _id);
        setProjects(filter);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(_id);

  return (
    <NoxfolioLayout>
      <PageBanner pageName={projects?.title} />
      {/* ProjectDetails Area start */}
      <Helmet title="CodeWithRedoy | Project Details" />
      <section className="projects-details-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="projects-details-image mb-50 wow fadeInUp delay-0-2s">
            <img src={projects?.img} alt="Project Details img" />
          </div>
          <div className="row gap-120">
            <div className="col-lg-8">
              <div className="project-details-content wow fadeInUp delay-0-2s">
                <h3>I Create digital services For Business</h3>
                <p className="big-letter">{projects?.description}</p>
                <p style={{ fontSize: "25px", marginTop: '30px' }}>Features:</p>
                <ul className="list-style-two ">
                  {projects?.features.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
                <p style={{ fontSize: "25px", marginTop: '30px' }}>Tech Stack:</p>
                <ul className="list-style-one two-column">
                  {projects?.technologies.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
                <p style={{ fontSize: "25px" }}>Npm Packages:</p>
                <ul className="list-style-one two-column">
                  {projects?.packages.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
                <p style={{ fontSize: "25px" }}>Challenges:</p>
                <ul className="list-style-two ">
                  {projects?.challenges.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
                <p style={{ fontSize: "25px", marginTop:"30px"}}>Potential Improvements & Future Plans:</p>
                <ul className="list-style-two ">
                  {projects?.improvements.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
                
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp delay-0-4s">
              <div
                className="project-details-info rmb-55"
                style={{
                  backgroundImage:
                    "url(/assets/images/projects/project-info-bg.png)",
                }}
              >
                <div className="pd-info-item">
                  <span>Category</span>
                  <h5>{projects?.subTitle}</h5>
                </div>
                {/* <div className="pd-info-item">
                  <span>Clients</span>
                  <h5>X_Design Studio</h5>
                </div> */}
                {/* <div className="pd-info-item">
                  <span>Location</span>
                  <h5>Melbourne, Australia</h5>
                </div> */}
                <div className="pd-info-item">
                  <span>Published</span>
                  <h5>{projects?.published}</h5>
                </div>
              </div>
            </div>
          </div>
          <p style={{ fontSize: "25px", marginTop:"30px" }}>
            Live Link:{" "}
            <a
              href={projects?.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>
          </p>
          <p style={{ fontSize: "25px", marginTop:"30px" }}>
            Github Client Link:{" "}
            <a
              href={projects?.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>
          </p>

          <div className="tag-share py-30 wow fadeInUp delay-0-2s">
            <div className="item">
              <b>Tags</b>
              <div className="tag-coulds">
                {projects?.tags.map((tag) => (
                  <Link legacyBehavior href="">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            <div className="item">
              <b>Share</b>
              <div className="social-style-one">
                <a
                  target="_blank"
                  href="https://www.facebook.com/bodruddozaredoy"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a target="_blank" href="https://x.com/BodruddozaRedoy">
                  <i className="fab fa-twitter" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/bodruddoza-redoy-637789197/"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a target="_blank" href="https://github.com/BodruddozaRedoy">
                  <i className="fab fa-github" />
                </a>
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
      {/* Project Details Area end */}
      {/* Related Projects Area start */}
      {/* <section className="related-projects-area pb-70 rpb-40 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <h2>Related Projects</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="project-item style-two wow fadeInUp delay-0-2s">
                <div className="project-image before-after-none">
                  <img
                    src="/assets/images/projects/related-project1.jpg"
                    alt="Project"
                  />
                </div>
                <div className="project-content">
                  <span className="sub-title">Graphics Design</span>
                  <h4>
                    <Link legacyBehavior href="/project-details">
                      Brand Identity Design
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-item style-two wow fadeInUp delay-0-4s">
                <div className="project-image before-after-none">
                  <img
                    src="/assets/images/projects/related-project2.jpg"
                    alt="Project"
                  />
                </div>
                <div className="project-content">
                  <span className="sub-title">Product Design</span>
                  <h4>
                    <Link legacyBehavior href="/project-details">
                      Mobile Apps Design
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-item style-two wow fadeInUp delay-0-6s">
                <div className="project-image before-after-none">
                  <img
                    src="/assets/images/projects/related-project3.jpg"
                    alt="Project"
                  />
                </div>
                <div className="project-content">
                  <span className="sub-title">Product Design</span>
                  <h4>
                    <Link legacyBehavior href="/project-details">
                      Dashboard Development
                    </Link>
                  </h4>
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
      </section> */}
    </NoxfolioLayout>
  );
};
export default ProjectDetails;
