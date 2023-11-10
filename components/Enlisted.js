import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Enlisted.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import before from '../public/images/flods/enlisted-before.png'
import after from '../public/images/flods/enlisted-after.png'
import mid from '../public/images/flods/enlisted-mid.png'
import Link from 'next/link';
import { Slide } from "react-awesome-reveal";


const Enlisted = () => {




    return (
        <>

            <section className={styles.enlistedFlod}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                          
                                <div className={`${styles.enlistedHead} text-center`}>
                                    <h4 className='font-30 font-primary txt-primary'>Be a Part of the Best Sellers’ Fraternity </h4>
                                    <h2 className='font-50 fw-500 font-primary txt-secondary mb-3'>What Makes Us the Most Preferred Book Publishers?</h2>
                                </div>
                           
                        </Col>
                        <Col lg={8}>
                            <div className={`${styles.enlisContnt} text-center mt-3`}>
                                <div className={styles.enlisImg}>
                                    <Image quality={100}   loading="lazy" className='img-fluid'
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
                                            <Image quality={100}   loading="lazy" className='img-fluid'
                                                src={mid}
                                                alt='Best_Publisher'
                                            />
                                            <div>
                                                <p className='font-30 font-primary txt-secondary mt-5'>Experience Delivering Only the Best</p>
                                                <p className='font-15 font-secondary txt-secondary'>We’ve been in the market longer than most book publishers out there. Long before Publishing was in fashion, delivering top notch pieces for our clients.
</p>
                                                <p className='font-30 font-primary txt-secondary mt-5'>Industry Experts</p>
                                                <p className='font-15 font-secondary txt-secondary'>The best seller publishing team consists of top industry experts, focused to uplift our writers. </p>
                                                <p className='font-30 font-primary txt-secondary mt-5'>Range of Services</p>
                                                <p className='font-15 font-secondary txt-secondary'>We have a wide array of publishing services available including manuscript editing, formatting, publishing consultation and Social Media Marketing.</p>
                                                <p className='font-30 font-primary txt-secondary mt-5'>Goal-Driven</p>
                                                <p className='font-15 font-secondary txt-secondary'>While most publishers keep misguiding you for extra money, we are here fully focused to get the best results for you.</p>
                                                <p className='font-30 font-primary txt-secondary mt-5'>Affordable Packages</p>
                                                <p className='font-15 font-secondary txt-secondary'>Our book publishing and consultation charges are pocket friendly for our clients, we believe in building long terms relations and mutual growth.</p>
                                                <p className='font-30 font-primary txt-secondary mt-5'>Passion and Creativity</p>
                                                <p className='font-15 font-secondary txt-secondary mb-5'>With a vast experience under our belt we make sure we instill every bit of passion into your work. Everything that leaves our workshop should be a piece of art, never compromising on aesthetics and creativity.</p>
                                            </div>
                                        </div>
                                   
                                    <Image quality={100}   loading="lazy" className='img-fluid'
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
                                    <h4 className='font-30 font-primary color-white'>Enlist Yourself with the All-Time Best </h4>
                                    <h2 className='font-50 fw-500 font-primary color-white mb-3'>Your book deserves only the <span className='bg-black color-white p-1 mt-2 d-block house'> Best Selling Publishers.</span></h2>
                                </div>

                                <div className="bttns1black mt-4 mb-5 mb-md-0">
                                    <Link className="btns btnBlack" href="/#">Get Onboard </Link>
                                    <Link className="btns btnTransprnt" href="tel:(800)781-9093">(800) 781-9093</Link>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>
           
        </>
    )
}

export default Enlisted