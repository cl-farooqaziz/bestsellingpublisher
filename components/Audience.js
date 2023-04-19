import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Audience.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// images
import audience from '../public/images/flods/audience.png'

const Audience = () => {
    return (
        <>
            <section className={`${styles.audienceFlod} bg-prime`}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={6}>
                            <div className={styles.audienceTxt}>
                                <h2 className='font-50 fw-300 font-primary txt-white mb-3'>Reach Your Audience Effectively with Our Digital <span className='bg-black txt-white mt-2 w-75 p-1 fw-500 d-block'>Publishing Services</span></h2>
                                <p className='font-15 font-secondary txt-white mb-5'>Best Selling Publisher brings your dream of book writing to life.</p>
                                <div className={`${styles.bttns} mt-4 mb-5 mb-md-0`}>
                                    <Link className='btns btnBlack' href="#">Let's discuss</Link>
                                    <Link className='btns btnTransprnt' href="tel:(800)781-9093">(800)781-9093</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.audienceImg}>
                                <Image className='img-fluid'
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