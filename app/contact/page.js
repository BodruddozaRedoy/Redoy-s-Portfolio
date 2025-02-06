import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";

export const metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <NoxfolioLayout>
      <PageBanner pageName={"Contact Me"} />
      {/* Contact Page Area start */}
      <section className="contact-page pt-40 pb-130 rpb-100 rel z-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-40">
                <span className="sub-title mb-15">Get In Touch</span>
                <h2>
                  Let’s Talk For your <span>Next Projects</span>
                </h2>
                <p>
                Whether it's crafting intuitive front-end interfaces or building robust back-end systems, I am committed to delivering impactful solutions that meet user and business needs.
                </p>
              </div>
              <ul className="list-style-two">
                <li>2+ Years Of Learning Experience</li>
                <li>Professional Web Designer</li>
                <li>Professional Web Developer</li>
                <li>Custom Design Support</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
              <form
                id="contactForm"
                className="contactForm"
                name="contactForm"
                action="assets/php/form-process.php"
                method="post"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        defaultValue=""
                        placeholder="Your Name"
                        required=""
                        data-error="Please enter your Name"
                      />
                      <label htmlFor="name" className="for-icon">
                        <i className="far fa-user" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        defaultValue=""
                        placeholder="your@gmail.com"
                        required=""
                        data-error="Please enter your Email"
                      />
                      <label htmlFor="email" className="for-icon">
                        <i className="far fa-envelope" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone_number">Phone Number</label>
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        className="form-control"
                        defaultValue=""
                        placeholder="Your Number"
                        required=""
                        data-error="Please enter your Phone Number"
                      />
                      <label htmlFor="phone_number" className="for-icon">
                        <i className="far fa-phone" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        defaultValue=""
                        placeholder="Subject"
                        required=""
                        data-error="Please enter your Subject"
                      />
                      <label htmlFor="subject" className="for-icon">
                        <i className="far fa-text" />
                      </label>
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="write message"
                        required=""
                        data-error="Please enter your Message"
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn">
                        Send Me Message <i className="far fa-angle-right" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                    </div>
                  </div>
                </div>
              </form>
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
      {/* Contact Page Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map pb-120 rpb-90 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="our-location">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8674.405905941176!2d90.37505317420073!3d23.79089243599456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7339d102069%3A0x17737054e9b7df8a!2sEast%20Shewrapara%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1736013171728!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8674.405905941176!2d90.37505317420073!3d23.79089243599456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7339d102069%3A0x17737054e9b7df8a!2sEast%20Shewrapara%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1736013171728!5m2!1sen!2sbd"
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </NoxfolioLayout>
  );
};
export default page;
