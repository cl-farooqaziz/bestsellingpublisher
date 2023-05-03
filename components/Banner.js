import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Banner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// import { keyframes } from "@emotion/react";
// import { Reveal } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
// images

import alignicon from '../public/images/icons/align.png'
import authoricon from '../public/images/icons/author.png'
import cupicon from '../public/images/icons/cup.png'


// const customAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: translate3d(-200px, -100px, 0);
//   }

//   to {
//     opacity: 1;
//     transform: translate3d(0, 0, 0);
//   }
// `;

const Banner = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className={`${styles.homeBanner}`}>
                <Container fluid className='px-md-5'>
                    <Row>
                        <Col lg={6}>
                            <Fade direction="left">
                                <div className={styles.bannerTxt}>
                                    {props.title ?
                                        props.title
                                        :
                                        ''
                                    }

                                    {props.text ?
                                        <p className='font-16 fw-300 font-secondary txt-secondary'>{props.text}</p>
                                        :
                                        ''
                                    }

                                    {props.subtext ?

                                        <p className='font-16 fw-300 font-secondary txt-secondary'>{props.subtext}</p>
                                        :
                                        ''
                                    }

                                    {props.subtext1 ?

                                        <p className='font-16 fw-300 font-secondary txt-secondary'> {props.subtext1}</p>
                                        :
                                        ''
                                    }

                                    {props.subtext2 ?

                                        <p className='font-16 fw-300 font-secondary txt-secondary'> {props.subtext2}</p>
                                        :
                                        ''
                                    }

                                    {props.subtext3 ?

                                        <p className='font-16 fw-300 font-secondary txt-secondary'> {props.subtext3}</p>
                                        :
                                        ''
                                    }

                                    {props.subtext4 ?

                                        <p className='font-16 fw-300 font-secondary txt-secondary'> {props.subtext4}</p>
                                        :
                                        ''
                                    }

                                    {props.discuss ?
                                        <div className={`${styles.bttns} mt-5`}>
                                            <Link className='btns btnPrimary' href="#">{props.discuss}</Link>
                                            <Link className='btns btnSecondary' href="tel:(800)781-9093"> {props.homebannernum}</Link>
                                        </div>
                                        :
                                        ''
                                    }
                                    {props.bannercounter ?
                                        <div className={`${styles.count} mt-5 mainclass`}>
                                            <Row className={styles.counteRow}>
                                                <Col className='colo'>
                                                    <div className='d-flex align-items-center gap-3'>
                                                        <Image loading="lazy" className='img-fluid'
                                                            src={alignicon}
                                                            alt='Best_Publisher'
                                                        />
                                                        <div>
                                                            <span className='font-45 fw-700 font-primary txt-secondary'>400</span>
                                                            <p className='font-13 fw-800 font-primary txt-primary'>Million Words</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col className='colo'>
                                                    <div className='d-flex align-items-center gap-3'>
                                                        <Image loading="lazy" className='img-fluid'
                                                            src={authoricon}
                                                            alt='Best_Publisher'
                                                        />
                                                        <div>
                                                            <span className='font-45 fw-700 font-primary txt-secondary'>100</span>
                                                            <p className='font-13 fw-800 font-primary txt-primary'>Authors</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4} className='colo'>
                                                    <div className='d-flex align-items-center gap-3'>
                                                        <Image loading="lazy" className='img-fluid'
                                                            src={cupicon}
                                                            alt='Best_Publisher'
                                                        />
                                                        <div>
                                                            <span className='font-45 fw-700 font-primary txt-secondary'>870</span>
                                                            <p className='font-13 fw-800 font-primary txt-primary'>Cups Of Coffee</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        :
                                        ''
                                    }
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={6} className={styles.bannImg}>
                            <Fade direction="right">
                                <div className={styles.bannerImg}>
                                    <Image loading="lazy" className='img-fluid'
                                        src={props.imageban}
                                        alt='Best_Publisher'
                                        priority
                                    />
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                    {/* <Reveal keyframes={customAnimation}>SADDADASDAS</Reveal> */}
                   
                </Container>

          

            </section>

          
        </>
    )
}

export default Banner