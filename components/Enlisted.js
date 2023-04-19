import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Enlisted.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import before from '../public/images/flods/enlisted-before.png'
import after from '../public/images/flods/enlisted-after.png'
import mid from '../public/images/flods/enlisted-mid.png'
import partner1 from '../public/images/clients/partner.png'
import partner2 from '../public/images/clients/partner2.png'
import partner3 from '../public/images/clients/partner3.png'
import partner4 from '../public/images/clients/partner4.png'
import partner5 from '../public/images/clients/partner5.png'
import partner6 from '../public/images/clients/partner6.png'
import partner7 from '../public/images/clients/partner7.png'
import partner8 from '../public/images/clients/partner8.png'


const Enlisted = () => {

    let enlistedslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <section className={styles.enlistedFlod}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className={`${styles.enlistedHead} text-center`}>
                                <h4 className='font-30 font-primary txt-primary'>Get Enlisted With The All-Time Best Sellers</h4>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-3'>Why Are We One of the Best Traditional Publishing Houses?</h2>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className={`${styles.enlisContnt} text-center mt-3`}>
                                <div className={styles.enlisImg}>
                                    <Image className='img-fluid'
                                        src={before}
                                        alt='Best_Publisher'
                                    />
                                    <div className={styles.midImg}>
                                        <div>
                                            <p className={`${styles.para1} font-30 font-primary txt-secondary mt-5 mb-5`}>1.</p>
                                            <p className={`${styles.para2} font-30 font-primary txt-secondary`}>2.</p>
                                            <p className={`${styles.para3} font-30 font-primary txt-secondary`}>3.</p>
                                            <p className={`${styles.para4} font-30 font-primary txt-secondary`}>4.</p>
                                            <p className={`${styles.para5} font-30 font-primary txt-secondary`}>5.</p>
                                            <p className={`${styles.para6} font-30 font-primary txt-secondary`}>6.</p>
                                        </div>
                                        <Image className='img-fluid'
                                            src={mid}
                                            alt='Best_Publisher'
                                        />
                                        <div>
                                            <p className='font-30 font-primary txt-secondary mt-5'>Experience and Quality</p>
                                            <p className='font-15 font-secondary txt-secondary'>We are a highly experienced and reputable book publishing company.</p>
                                            <p className='font-30 font-primary txt-secondary mt-5'>Industry Experts</p>
                                            <p className='font-15 font-secondary txt-secondary'>Our best seller publishing team is composed of industry experts.</p>
                                            <p className='font-30 font-primary txt-secondary mt-5'>Range of Services</p>
                                            <p className='font-15 font-secondary txt-secondary'>We offer a wide range of book publishing services, including manuscript editing, formatting, and publishing consultation.</p>
                                            <p className='font-30 font-primary txt-secondary mt-5'>Goal-Driven</p>
                                            <p className='font-15 font-secondary txt-secondary'>We have a proven track record of success in helping our authors achieve their publishing goals.</p>
                                            <p className='font-30 font-primary txt-secondary mt-5'>Affordable Packages</p>
                                            <p className='font-15 font-secondary txt-secondary'>We offer competitive pricing and terms that are favorable to our authors.</p>
                                            <p className='font-30 font-primary txt-secondary mt-5'>Passion and Creativity</p>
                                            <p className='font-15 font-secondary txt-secondary mb-5'>As a leading book publishing company, we are passionate about helping our authors reach their full potential and bring their vision to life.</p>
                                        </div>
                                    </div>
                                    <Image className='img-fluid'
                                        src={after}
                                        alt='Best_Publisher'
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.enlistedSlide}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className={`${styles.enlistedHead} text-center`}>
                                <h4 className='font-30 font-primary txt-primary'>Get Enlisted With The All-Time Best Sellers</h4>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-3'>Why Are We One of the Best Traditional Publishing Houses?</h2>
                            </div>
                        </Col>
                        <Col md={10}>
                            <div className={`${styles.enlistedLogo} mt-5`}>
                                <Slider {...enlistedslider}>
                                    <div>
                                        <Image className='img-fluid'
                                            src={partner1}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={partner2}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={partner3}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={partner4}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={partner5}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={partner6}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={partner7}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={partner8}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Enlisted