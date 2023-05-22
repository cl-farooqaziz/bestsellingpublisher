import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Broader.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// images
import broader from '../public/images/flods/broader.png'
import { Fade } from "react-awesome-reveal";
const Broader = () => {
    return (
        <>
            <section className={styles.broaderFlod}>
                <Container fluid className='p-0'>
                    <Row className={`${styles.broaderRow} justify-content-center`}>
                        <Col lg={7}>
                        <Fade triggerOnce='true' duration={4000} direction="right">
                            <div className={`${styles.broaderTxt} marginleft`}>
                                <h4 className='font-30 font-primary txt-primary'>Engage with a Larger Audience Our</h4>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-4'>Amazon Book Publishing Services</h2>
                                <p className='font-15 font-secondary txt-secondary mb-4'>Best Selling Publisher sets the industry standards when it comes to Amazon Publishing Services. Our processes are simple and streamlined, tailor-made to meet your goals. With a phenomenal customer service, Best Selling Publisher can easily be termed as the place to get the job done.</p>
                                <h4 className='font-30 font-primary txt-secondary mb-4'>Our Package Include</h4>
                                <Row className={styles.listRow}>
                                    <Col md={6}>
                                        <ul className={`${styles.broaderList} p-0 mb-0`}>
                                            <li>Idea Research and feasibility</li>
                                            <li>Proofreading</li>
                                            <li>Book Cover design an Illustrations </li>
                                            <li>Self-Publishing </li>
                                            <li>Manuscript Drafting</li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className={`${styles.broaderList} p-0 mb-0`}>
                                            <li>Book Video Trailer</li>
                                            <li>Critical Reviews</li>
                                            <li>Content Preparation for publication</li>
                                            <li>Publishing on best platforms</li>
                                            <li>Branding and Marketing</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                            </Fade>
                        </Col>
                        <Col lg={5}>
                        <Fade triggerOnce='true' duration={4000} direction="left">
                            <div className={styles.broaderImg}>
                                <Image loading="lazy" className='img-fluid'
                                    src={broader}
                                    alt='Best_Publisher'
                                />
                            </div>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Broader