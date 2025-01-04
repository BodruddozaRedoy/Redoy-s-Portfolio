"use client"
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

const ProjectDetails = ({params}) => {
  // const router = useRouter()
  const {id:_id} = params
  const [projects, setProjects] = useState()
  useEffect(() => {
    fetch("/projects.json")
    .then(res => res.json())
    .then(data => {
      const filter = data?.find(prev => prev.id == _id)
      setProjects(filter);
      
    }
    )
    .catch((err) => console.log(err)
    )
  }, [])
  console.log(_id);
  
  return (
    <NoxfolioLayout>
      <PageBanner pageName={projects?.title} />
      {/* ProjectDetails Area start */}
      <Helmet title="CodeWithRedoy | Project Details"/>
      <section className="projects-details-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="projects-details-image mb-50 wow fadeInUp delay-0-2s">
            <img
              src={projects?.img}
              alt="Project Details img"
            />
          </div>
          <div className="row gap-120">
            <div className="col-lg-8">
              <div className="project-details-content wow fadeInUp delay-0-2s">
                <h3>I Create digital services For Business</h3>
                <p className="big-letter">
                {projects?.description}
                </p>
                <p style={{fontSize: "25px"}}>
                  Tech Stack:
                </p>
                <ul className="list-style-one two-column">
                  {
                    projects?.technologies.map(tech => <li>{tech}</li>)
                  }
                </ul>
                <p style={{fontSize: "25px"}}>
                  Npm Packages:
                </p>
                <ul className="list-style-one two-column">
                  {
                    projects?.packages.map(tech => <li>{tech}</li>)
                  }
                </ul>
                {/* <ul className="list-style-one two-column mt-50 mb-40">
                  <li>Web Development</li>
                  <li>System &amp; Guide</li>
                </ul> */}
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
          <p style={{fontSize: "25px"}}>Live Link: <a href={projects?.liveLink} target="_blank" rel="noopener noreferrer">Click here</a></p>
          {/* <div className="row pb-15">
            <div className="col-lg-4 col-sm-6">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <img
                  src="/assets/images/projects/project-middle1.jpg"
                  alt="Project Middle"
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="image mb-30 wow fadeInUp delay-0-4s">
                <img
                  src="/assets/images/projects/project-middle2.jpg"
                  alt="Project Middle"
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="image mb-30 wow fadeInUp delay-0-6s">
                <img
                  src="/assets/images/projects/project-middle3.jpg"
                  alt="Project Middle"
                />
              </div>
            </div>
          </div> */}
          {/* <div className="project-bottom-content mb-50 wow fadeInUp delay-0-2s">
            <h3 className="title mb-25">Project Summery</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div> */}
          <div className="tag-share py-30 wow fadeInUp delay-0-2s">
            <div className="item">
              <b>Tags</b>
              <div className="tag-coulds">
                {
                  projects?.tags.map(tag => (
                    <Link legacyBehavior href="">
                  {tag}
                </Link>
                  ))
                }

                {/* <Link legacyBehavior href="blog">
                  Design
                </Link>
                <Link legacyBehavior href="blog">
                  Figma
                </Link>
                <Link legacyBehavior href="">
                  Apps
                </Link> */}
              </div>
            </div>
            <div className="item">
              <b>Share</b>
              <div className="social-style-one">
                <a target="_blank" href="https://www.facebook.com/bodruddozaredoy">
                  <i className="fab fa-facebook-f" />
                </a>
                <a target="_blank" href="https://x.com/BodruddozaRedoy">
                  <i className="fab fa-twitter" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/bodruddoza-redoy-637789197/">
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
