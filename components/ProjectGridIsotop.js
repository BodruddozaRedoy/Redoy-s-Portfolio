"use client";

import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectGridIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [projects, setProjects] = useState([])
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-masonry-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  useEffect(() => {
    fetch("/projects.json")
    .then(res => res.json())
    .then(data => (
      setProjects(data)
      
    ))
  }, [])
  return (
    <Fragment>
      <ul className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s">
        <li
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          Show All
        </li>
        <li
          className={`c-pointer ${activeBtn("development")}`}
          onClick={handleFilterKeyChange("development")}
        >
          Web Development
        </li>
        <li
          className={`c-pointer ${activeBtn("design")}`}
          onClick={handleFilterKeyChange("design")}
        >
          Web Design
        </li>
        <li
          className={`c-pointer ${activeBtn("marketing")}`}
          onClick={handleFilterKeyChange("marketing")}
        >
          Wordpress
        </li>
        <li
          className={`c-pointer ${activeBtn("graphics")}`}
          onClick={handleFilterKeyChange("graphics")}
        >
          Graphics
        </li>
      </ul>
      <div className="row project-masonry-active">

        {
          projects?.map(project => (
          <div className={`col-lg-6 item ${project.category}`}>
            <div className="project-item style-two wow fadeInUp delay-0-2s">
              <div className="project-image">
                <img src={project.img} alt="Project" />
                <Link legacyBehavior href={`project-details/${project.id}`}>
                  <a className="details-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="project-content">
                <span className="sub-title">{project.subTitle}</span>
                <h3>
                  <Link legacyBehavior href={`project-details/${project.id}`}>
                    {project.title}
                  </Link>
                </h3>
              </div>
            </div>
        </div>
          ))
        }
        
        {/* <div className="col-lg-6 item design">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="assets/images/projects/project2.jpg" alt="Project" />
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h3>
                <Link legacyBehavior href="project-details">
                  Website Makeup Design
                </Link>
              </h3>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-6 item development graphics">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img src="assets/images/projects/project3.jpg" alt="Project" />
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Graphics Design</span>
              <h3>
                <Link legacyBehavior href="project-details">
                  Brand Identity and Motion Design
                </Link>
              </h3>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-6 item design development apps">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="assets/images/projects/project4.jpg" alt="Project" />
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h3>
                <Link legacyBehavior href="project-details">
                  Mobile Application Design
                </Link>
              </h3>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-6 item branding marketing graphics">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img src="assets/images/projects/project5.jpg" alt="Project" />
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Design &amp; Branding</span>
              <h3>
                <Link legacyBehavior href="project-details">
                  Creative Graphics Design
                </Link>
              </h3>
            </div>
          </div>
        </div> */}
        {/* <div className="col-lg-6 item design marketing apps">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="assets/images/projects/project6.jpg" alt="Project" />
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h3>
                <Link legacyBehavior href="project-details">
                  Design &amp; Branding Mokeup
                </Link>
              </h3>
            </div>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};
export default ProjectGridIsotop;
