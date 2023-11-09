import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Audience.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Fade } from "react-awesome-reveal";
// images
import audience from '../public/images/flods/audience.png'

const Audience = () => {
    return (
        <>
            <section className={`${styles.audienceFlod} bg-prime`}>
                <Container fluid className='px-md-5'>
                    <Row className={`${styles.audienceRow} justify-content-center align-items-center`}>
                        <Col lg={6}>
                           
                                <div className={styles.audienceTxt}>
                                    <h2 className='font-50 fw-300 font-primary txt-white mb-3'>Have Your Story Told to the World with Our Digital  <span className='bg-black txt-white mt-2 w-75 p-1 fw-500 d-block'>Publishing Services</span></h2>
                                    <p className='font-15 font-secondary txt-white mb-5'>Best Selling Publisher well help you realize your dream. Get your book published and leave your mark in the world.</p>
                                    <div className={`${styles.bttns} mt-4 mb-5 mb-md-0`}>
                                        <Link className='btns btnBlack' href="#">Let's discuss</Link>
                                        <Link className='btns btnTransprnt' href="tel:(800)781-9093">(800)781-9093</Link>
                                    </div>
                                </div>
                            
                        </Col>
                        <Col lg={6}>
                           
                                <div className={styles.audienceImg}>
                                    <Image loading="lazy" className='img-fluid'
                                        src={audience}
                                        alt='Best_Publisher'
                                    />
                                </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Audience