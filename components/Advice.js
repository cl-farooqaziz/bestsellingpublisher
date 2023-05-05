import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Advice.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// images
import advice from '../public/images/flods/advice.png'
import { Fade } from "react-awesome-reveal";
const Advice = () => {
    return (
        <>
            <section className={styles.adviceFlod}>
                <Container fluid className='p-0'>
                    <Row className={`${styles.adviceRow} justify-content-center align-items-center`}>
                        <Col lg={6}>
                            <Fade triggerOnce='true' duration={3000} direction="left">
                                <div className={styles.adviceImg}>
                                    <Image loading="lazy" className='img-fluid'
                                        src={advice}
                                        alt='Best_Publisher'
                                        
                                    />
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={6}>
                            <Fade triggerOnce='true' duration={3000} direction="right">
                                <div className={`${styles.adviceTxt} marginright`}>
                                    <h4 className='font-30 font-primary txt-primary mb-3'>Here’s a good piece of advice;</h4>
                                    <h2 className='font-50 fw-500 font-primary txt-secondary'>Book Publishing Services Become Stress-free When a Best Selling Publisher Takes Charge!</h2>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Advice