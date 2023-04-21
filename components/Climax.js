import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Climax.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// images
import climax from '../public/images/flods/climax.png'

const Climax = (props) => {
    return (
        <>
            <section className={styles.climaxFold}>
                <Container fluid className='px-md-5'>
                    <Row className={`${styles.climaxRow} justify-content-center align-items-center`}>
                        <Col lg={6}>
                            <div className={styles.climaxTxt}>
{ props.title ?  
                                <h4 className='font-30 font-primary txt-primary'>{props.title}</h4>
:
''
}
                                <h2 className='font-50 fw-500 font-primary txt-secondary'>{props.subtitle}</h2>
                                <p className='font-15 font-secondary txt-secondary'> {props.text} </p>
                                <div className={`${styles.bttns} mt-4 mb-5 mb-md-0`}>
                                    <Link className='btns btnPrimary' href="#"> {props.btn1} </Link>
                                    <Link className='btns btnSecondary' href="tel:(800)781-9093"> {props.btn2} </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.climaxImg}>
                                <Image className='img-fluid'
                                    src={props.imagecli}
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