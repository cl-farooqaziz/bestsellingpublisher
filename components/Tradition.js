import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Tradition.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import mock1 from '../public/images/book-mockup/Book-Mockup.png'
import mock2 from '../public/images/book-mockup/Book-Mockup2.png'
import mock3 from '../public/images/book-mockup/Book-Mockup3.png'
import mock4 from '../public/images/book-mockup/Book-Mockup4.png'
import mock5 from '../public/images/book-mockup/Book-Mockup5.png'
import mock6 from '../public/images/book-mockup/Book-Mockup6.png'
import mock7 from '../public/images/book-mockup/Book-Mockup7.png'
import mock8 from '../public/images/book-mockup/Book-Mockup8.png'
import mock9 from '../public/images/book-mockup/Book-Mockup9.png'
import mock10 from '../public/images/book-mockup/Book-Mockup1.png'
import before from '../public/images/flods/tradition-before.png'

import { Fade } from "react-awesome-reveal";

const Tradition = () => {

    let traditionslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
            <section className={styles.traditionFold}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center'>
                    <Fade triggerOnce='true' duration={4000} direction="left">
                        <Col lg={12}>
                            <div className={`${styles.mockupsHead} text-center mb-5`}>
                                <h2 className='font-50 fw-700 font-primary txt-secondary mb-3'>Tradition Publishing House</h2>
                                <p className='font-15 font-secondary txt-secondary'>Our Publishing Experts Can Help You</p>
                                <Image loading="lazy" className='img-fluid'
                                    src={before}
                                    alt='Best_Publisher'
                                />
                            </div>
                        </Col>
                        </Fade>
                        <Fade triggerOnce='true' duration={4000} direction="right">
                        <Col lg={12}>
                            <div className='mt-5 trade'>
                                <Slider {...traditionslider}>
                                    <div>
                                        <Image loading="lazy" className='img-fluid'
                                            src={mock1}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image loading="lazy" className='img-fluid'
                                            src={mock2}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image loading="lazy" className='img-fluid'
                                            src={mock3}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image loading="lazy" className='img-fluid'
                                            src={mock4}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image loading="lazy" className='img-fluid'
                                            src={mock5}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image loading="lazy" className='img-fluid'
                                            src={mock6}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image loading="lazy" className='img-fluid'
                                            src={mock7}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image loading="lazy" className='img-fluid'
                                            src={mock8}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image loading="lazy" className='img-fluid'
                                            src={mock9}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image loading="lazy" className='img-fluid'
                                            src={mock10}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                        </Fade>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Tradition