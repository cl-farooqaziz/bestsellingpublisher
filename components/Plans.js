import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Plans.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// images
import rating from '../public/images/icons/rating.png'
import globe from '../public/images/icons/globe.png'
import project from '../public/images/icons/project.png'
import stamp from '../public/images/icons/stamp.png'

const Plans = () => {
    return (
        <>
            <section className={`${styles.plansFlod} bg-prime`}>
                <Container fluid className='px-md-5'>
                    <Row className={`${styles.plansRow} justify-content-center align-items-center text-center`}>
                        <Col lg={3} sm={6}>
                            <div className={styles.plans}>
                                <Image className='img-fluid'
                                    src={rating}
                                    alt='Best_Publisher'
                                />
                                <p className='font-13 fw-600 font-primary txt-secondary mt-2 w-50 mx-auto'>
                                    100% Customer <span className='d-block'>Satisfaction</span>
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className={styles.plans}>
                                <Image className='img-fluid'
                                    src={globe}
                                    alt='Best_Publisher'
                                />
                                <p className='font-13 fw-600 font-primary txt-secondary mt-2 w-50 mx-auto'>
                                    2500+ Customers in <span className='d-block'>51+ Countries</span>
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className={styles.plans}>
                                <Image className='img-fluid'
                                    src={project}
                                    alt='Best_Publisher'
                                />
                                <p className='font-13 fw-600 font-primary txt-secondary mt-2 w-50 mx-auto'>
                                    Flexible <span className='d-block'>Plans</span>
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className={styles.plans}>
                                <Image className='img-fluid'
                                    src={stamp}
                                    alt='Best_Publisher'
                                />
                                <p className='font-13 fw-600 font-primary txt-secondary mt-2 w-50 mx-auto'>
                                    All Royalties <span className='d-block'>Belong To You</span>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Plans