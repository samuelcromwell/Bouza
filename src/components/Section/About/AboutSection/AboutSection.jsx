import Link from "next/link";
import CircleTextThree from "~/components/Ui/Components/CircleTextThree";

const AboutSection = () => {
    return (
        <section className="about-three padding">
            <div className="container">
                <div className="row">
                    {/* <!--Start About Three Img--> */}
                    <div className="col-xl-6">
                        <div className="about-three__img">
                            <div className="shape1"><img src="/img/shape/about-v3-shape1.png" alt="" /></div>
                            <div className="about-three__img1 wow fadeInLeft" data-wow-delay=".1s">
                                <img src="/img/about/about-v3-img1.jpg" alt="" />
                            </div>
                            <div className="about-three__img2 wow fadeInRight" data-wow-delay=".1s">
                                <img src="/img/about/about-v3-img2.jpg" alt="" />
                            </div>
                            <CircleTextThree />
                        </div>
                    </div>
                    {/* <!--End About Three Img--> */}

                    {/* <!--Start About Three Content--> */}
                    <div className="col-xl-6">
                        <div className="about-three__content">
                            <div className="sec-title-style3">
                                <div className="sub-title">
                                    <div className="icon">
                                        <img src="/img/icon/title-marker-4.png" alt="" />
                                    </div>
                                    <h5>About Company</h5>
                                </div>
                                <h2>The Best Transport & <br />
                                    Logistic Company</h2>
                            </div>
                            <div className="about-three__content-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Quis gravida risus suspend ultrices
                                    gravida.</p>
                            </div>

                            <ul className="about-three__content-list">
                                <li>
                                    <div className="icon-box">
                                        <span className="icon-global-network"></span>
                                    </div>

                                    <div className="text-box">
                                        <h3>Fast Worldwide Delivery</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                                            do eiusmod of tempor labore.</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-enter-product-details"></span>
                                    </div>

                                    <div className="text-box">
                                        <h3>Safe And Secure Delivery</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                                            do eiusmod of tempor labore.</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="about-three__content-bottom">
                                <div className="btn-box">
                                    <Link className="thm-btn" href="about">
                                        <span className="txt">Know More About Us</span>
                                    </Link>
                                </div>

                                <div className="author-box">
                                    <div className="img-box">
                                        <img src="/img/about/about-v2-img4-.jpg" alt="" />
                                    </div>

                                    <div className="text-box">
                                        <p>Need Help?</p>
                                        <h3><Link href="tel:123456789">+00 264 566 579</Link></h3>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!--End About Three Content--> */}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;