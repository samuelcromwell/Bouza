"use client";
import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <section className="faq-one padding"
      style={{ backgroundColor: "#0d4250" }}
    >
      <div className="big-title">
        <h2>faq</h2>
      </div>
      <div
        className="faq-one__bg"
        style={{ backgroundImage: "url(/img/resource/faq-v1-bg.jpg)" }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6  faq-padding-top">
            <div className="faq-one__faq">
              <div className="sec-title">
                <div className="sub-title">
                  <h5><span className="icon-right-arrow-1"></span> FAQ ?</h5>
                </div>
                <h2>Question & Answer</h2>
              </div>
              <Accordion defaultActiveKey="0" className='accrodion-grp faq-one__accrodion accordion-one'>
                <Accordion.Item eventKey="0" >
                  <Accordion.Header >
                    <h2>
                      <span>01.</span> How can I pay for your logistics services?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header >
                    <h2>
                      <span>01.</span> How can I track my shipments?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header >
                    <h2>
                      <span>01.</span> Can i specify a delivery date when ordering?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header >
                    <h2>
                      <span>01.</span> Any advice for a first time shipper?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          <div className="col-xl-6">
            <div
              className="faq-one__contact-info wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="title-box">
                <p>Let’s Talk</p>
                <h3>You need any help? get free consultation</h3>
              </div>

              <div className="faq-one__contact-info-number">
                <div className="icon"
                  style={{ backgroundColor: "#0d4250" }}
                >
                  <span className="icon-call"></span>
                </div>

                <div className="text">
                  <p>Have Any Questions</p>
                  <h3><Link href="tel:123456789">(00) 112 365 489</Link></h3>
                </div>
              </div>

              <div className="btn-box">
                <Link className="thm-btn" href="contact">
                  <span className="txt">Contact Us</span>
                  <i className="icon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
