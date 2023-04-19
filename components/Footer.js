import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Footer.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
import logo from '../public/images/logo.png'
import insta from '../public/images/icons/instagram.png'
import twiter from '../public/images/icons/twitter.png'
import fb from '../public/images/icons/facebook.png'
import payment1 from '../public/images/payment/payment.png'
import payment2 from '../public/images/payment/payment1.png'
import award1 from '../public/images/clients/awards.png'
import award2 from '../public/images/clients/awards2.png'
import award3 from '../public/images/clients/awards3.png'
import award4 from '../public/images/clients/awards4.png'
import award5 from '../public/images/clients/awards5.png'
import award6 from '../public/images/clients/awards6.png'
import award7 from '../public/images/clients/awards7.png'
import award8 from '../public/images/clients/awards8.png'
import award9 from '../public/images/clients/awards9.png'
import award10 from '../public/images/clients/awards10.png'




const Footer = () => {

    let footerslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
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
            <footer className={`${styles.footer} bg-second`}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-between'>
                        <Col lg={3}>
                            <div className={styles.footerLogo}>
                                <Image className='img-fluid'
                                    src={logo}
                                    alt='Best_Publisher'
                                />
                                <p className='font-14 fw-500 font-secondary txt-secondary mt-4'>Best Selling Publishers offer a wide range of professional book publishing services to give life to your words. Let your words be of fine quality with our publishing services, contact us today!</p>
                                <div className={`${styles.socialLinks} mt-3`}>
                                    <Link href="#">
                                        <Image className='img-fluid'
                                            src={insta}
                                            alt='Best_Publisher'
                                        />
                                    </Link>
                                    <Link href="#">
                                        <Image className='img-fluid'
                                            src={twiter}
                                            alt='Best_Publisher'
                                        />
                                    </Link>
                                    <Link href="#">
                                        <Image className='img-fluid'
                                            src={fb}
                                            alt='Best_Publisher'
                                        />
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.footerLinks}>
                                <h3 className='font-16 fw-500 font-secondary txt-secondary'>Quick Links</h3>
                                <ul className='p-0 m-0 mt-4'>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/pricing">Pricing</Link></li>
                                    <li><Link href="/blogs">Blogs</Link></li>
                                    <li><Link href="/about">About</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={styles.footerLinks}>
                                <h3 className='font-16 fw-500 font-secondary txt-secondary'>Our Services</h3>
                                <ul className='p-0 m-0 mt-4'>
                                    <li><Link href="/book-publishing">Book Publishing</Link></li>
                                    <li><Link href="/ebook-publishing">Ebook Publishing</Link></li>
                                    <li><Link href="/digital-book-publishing">Digital Book Publishing</Link></li>
                                    <li><Link href="/amazon-publishing">Amazon Publishing</Link></li>
                                    <li><Link href="/self-publishing">Self Publishing</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={`${styles.footerLinks} ${styles.contct}`}>
                                <h3 className='font-16 fw-500 font-secondary txt-secondary'>Contact Us</h3>
                                <ul className='p-0 m-0 mt-4'>
                                    <li>
                                        <Link href="#" className={styles.callIcon}>
                                            (800) 781-9093 (Toll Free)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className={styles.mailIcon}>
                                            info@bestsellingpublisher.com
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className={styles.LocIcon}>
                                            1001 Wilshire Boulevard #1176 Los Angeles, CA 90017
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className={`${styles.footerLinks} ${styles.pyment}`}>
                                <Image className='img-fluid'
                                    src={payment1}
                                    alt='Best_Publisher'
                                />
                                <Image className='img-fluid'
                                    src={payment2}
                                    alt='Best_Publisher'
                                />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={`${styles.awards} mt-5`}>
                                <h3 className='font-16 fw-500 font-secondary txt-secondary mb-5'>Awards</h3>
                                <Slider {...footerslider}>
                                    <div>
                                        <Image className='img-fluid mt-3'
                                            src={award1}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={award2}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={award3}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={award4}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={award5}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid mt-3'
                                            src={award6}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={award7}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={award8}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={award9}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={award10}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <section className={`${styles.subFooter} bg-prime py-2`}>
                <Container fluid className='px-md-5'>
                    <Row>
                        <Col lg={12}>
                            <p className='font-14 fw-500 font-secondary txt-white text-center'>© 2023 - All Rights Reserved Mini Investment</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footer