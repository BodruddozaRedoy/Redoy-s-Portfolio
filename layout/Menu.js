import Link from "next/link";

const DropdownBtn = () => (
  <div className="dropdown-btn">
    <span className="fas fa-chevron-down" />
  </div>
);
const MultiMenu = () => {
  return (
    <ul className="navigation clearfix">
      <li className="dropdown">
        {/* <a href="#">Home</a>
        <ul>
          <li className="dropdown">
            <a href="#">MultiPage</a>
            <ul>
              <li>
                <Link href="/">Home One</Link>
              </li>
              <li>
                <Link href="/index2">Home Two</Link>
              </li>
            </ul>
            <DropdownBtn />
          </li>
          <li className="dropdown">
            <a href="#">OnePage</a>
            <ul>
              <li>
                <Link href="/indexonepage">Home One</Link>
              </li>
              <li>
                <Link href="/index2onepage">Home Two</Link>
              </li>
            </ul>
            <DropdownBtn />
          </li>
        </ul>
        <DropdownBtn /> */}

      <Link href="/">Home</Link>

      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
      {/* <li>
        <Link href="/services">services</Link>
      </li> */}
      <li className="dropdown">
        {/* <a href="#">projects</a>
        <ul>
          <li>
            <Link href="/projects">project Grid</Link>
          </li>
          <li>
            <Link href="/projects-masonry">projects masonry</Link>
          </li>
          <li>
            <Link href="/project-details">projects details</Link>
          </li>
        </ul>
        <DropdownBtn /> */}
        <Link href="/projects">Projects</Link>
      </li>
      {/* <li className="dropdown">
        <a href="#">blog</a>
        <ul>
          <li>
            <Link href="/blog">blog standard</Link>
          </li>
          <li>
            <Link href="/blog-details">blog details</Link>
          </li>
        </ul>
        <DropdownBtn />
      </li> */}
      {/* <li className="dropdown">
        <a href="#">pages</a>
        <ul>
          <li>
            <Link href="/404">Error Page</Link>
          </li>
        </ul>
        <DropdownBtn />
      </li> */}
      <li>
        <Link href="contact">Contact</Link>
      </li>
    </ul>
  );
};
export default MultiMenu;

export const OnePageMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">about</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li>
      <li>
        <a href="#services">services</a>
      </li>
      <li>
        <a href="#skills">skills</a>
      </li>
      <li>
        <a href="#portfolio">projects</a>
      </li>
      <li>
        <a href="#blog">blog</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};
