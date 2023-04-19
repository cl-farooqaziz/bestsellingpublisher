import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Climax.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// images
import climax from '../public/images/flods/climax.png'

const Climax = () => {
    return (
        <>
            <section className={styles.climaxFold}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center align-items-center'>
                        <Col md={6}>
                            <div className={styles.climaxTxt}>
                                <h4 className='font-30 font-primary txt-primary'>The Intro, The Climax and The Finale</h4>
                                <h2 className='font-50 fw-500 font-primary txt-secondary'>We Publish Excellence!</h2>
                                <p className='font-15 font-secondary txt-secondary'>Every idea, every story, and plot are brilliant, but they need to be refined for success. Excellence doesn’t guarantee anything—it’s the right professionals who will help you find your way through our solutions. Whether you are a new author or a seasoned veteran, Best Selling Publisher makes it easy to get started in the wonderful world of publishing. We provide everything you need to write the perfect book – all in one place.</p>
                                <div className={`${styles.bttns} mt-4 mb-5 mb-md-0`}>
                                    <Link className='btns btnPrimary' href="#">Let's discuss</Link>
                                    <Link className='btns btnSecondary' href="tel:(800)781-9093">(800)781-9093</Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={styles.climaxImg}>
                                <Image className='img-fluid'
                                    src={climax}
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

export default Climax