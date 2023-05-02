import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Broader.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// images
import broader from '../public/images/flods/broader.png'

const Broader = () => {
    return (
        <>
            <section className={styles.broaderFlod}>
                <Container fluid className='p-0'>
                    <Row className={`${styles.broaderRow} justify-content-center`}>
                        <Col lg={7}>
                            <div className={`${styles.broaderTxt} marginleft`}>
                                <h4 className='font-30 font-primary txt-primary'>Connect With A Broader Audience With Our</h4>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-4'>Amazon Publishing Services</h2>
                                <p className='font-15 font-secondary txt-secondary mb-4'>Best Selling Publisher's Amazon publishing services are among the most popular and well-known in the industry. Our process is simple and straightforward, and we provide a high-quality product that is easy to use and reliable. Additionally, our customer service is excellent, and they offer a wide range of options for writers looking to publish their work.</p>
                                <h4 className='font-30 font-primary txt-secondary mb-4'>Our Package Include</h4>
                                <Row className={styles.listRow}>
                                    <Col md={6}>
                                        <ul className={`${styles.broaderList} p-0 mb-0`}>
                                            <li>Idea research and analysis</li>
                                            <li>Proofreading to eliminate errors</li>
                                            <li>Book Cover design and illustration</li>
                                            <li>Traditional and self-publishing</li>
                                            <li>Video Book Trailers</li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className={`${styles.broaderList} p-0 mb-0`}>
                                            <li>Manuscript drafting</li>
                                            <li>Critical reviews</li>
                                            <li>Preparing text for publication</li>
                                            <li>Publishing on best libraries</li>
                                            <li>Branding and marketing</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className={styles.broaderImg}>
                                <Image className='img-fluid'
                                    src={broader}
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

export default Broader