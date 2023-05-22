import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Dreams.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Fade } from "react-awesome-reveal";

const Dreams = () => {
    return (
        <>
            <section className={styles.dreamsFlod}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <Fade triggerOnce='true' duration={4000} direction="left">
                                <div className={`${styles.dreamsHead} text-center`}>
                                    <h2 className='font-50 fw-500 font-primary txt-secondary mb-3'>Realizing Publishing Dreams for Authors around the World </h2>
                                    <p className='font-15 font-secondary txt-secondary mb-5'>Your story and every bit of your idea is just a little fine tune away from perfection. Take that leap and make your work recognized around the globe. Best Selling Publisher turns publication and writing hassles, seamless and smooth. Get started now! </p>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={12}>
                            <Row className={`${styles.dreamsRow} justify-content-center pt-5`}>
                                <Col lg={4}>
                                    <Fade triggerOnce='true' duration={4000} direction="right">
                                        <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                            <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Top Notch Services </h3>
                                            <p className='font-15 font-secondary txt-secondary mt-3 pb-5'>Best Selling Publisher offers a comprehensive suite of eBook publications, designed to meet frequent needs of authors, at every stage of the publishing process.</p>
                                            <Link className='btns btnPrimary mt-5 mx-auto' href="#">Let's discuss</Link>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col lg={4}>
                                    <Fade triggerOnce='true' duration={4000} direction="left">
                                        <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                            <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Experience and Dedication</h3>
                                            <p className='font-15 font-secondary txt-secondary mt-3 pb-5'>We’re a team of experienced and professional eBook editors, publishers and marketers, committed to help authors publish their work successfully.</p>
                                            <Link className='btns btnPrimary mt-5 mx-auto' href="#">Let's discuss</Link>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col lg={4}>
                                    <Fade triggerOnce='true' duration={4000} direction="right">
                                        <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                            <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Cost Effective Packages</h3>
                                            <p className='font-15 font-secondary txt-secondary mt-3 pb-5 pb-lg-0'>Our eBook publishing services are affordable and pocket friendly, so you can cherry pick as per your requirement. Whether you're looking for a simple manuscript conversion or a comprehensive plan, with extensive assistance, we help you meet your goals.</p>
                                            <Link className='btns btnPrimary mt-5 mx-auto' href="#">Let's discuss</Link>
                                        </div>
                                    </Fade>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Dreams