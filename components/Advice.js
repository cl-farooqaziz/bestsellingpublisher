import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Advice.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// images
import advice from '../public/images/flods/advice.png'

const Advice = () => {
    return (
        <>
            <section className={styles.adviceFlod}>
                <Container fluid className='px-md-5'>
                    <Row className='justify-content-center align-items-center'>
                        <Col lg={6}>
                            <div className={styles.adviceImg}>
                                <Image className='img-fluid'
                                    src={advice}
                                    alt='Best_Publisher'
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.adviceTxt}>
                                <h4 className='font-30 font-primary txt-primary mb-3'>Here’s a good piece of advice;</h4>
                                <h2 className='font-50 fw-500 font-primary txt-secondary'>Book Publishing Services Become Stress-free When a Best Selling Publisher Takes Charge!</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Advice