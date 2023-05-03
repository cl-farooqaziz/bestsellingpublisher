import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import partner1 from '../public/images/clients/partner.png'
import partner2 from '../public/images/clients/partner2.png'
import partner3 from '../public/images/clients/partner3.png'
import partner4 from '../public/images/clients/partner4.png'
import partner5 from '../public/images/clients/partner5.png'
import partner6 from '../public/images/clients/partner6.png'
import partner7 from '../public/images/clients/partner7.png'
import partner8 from '../public/images/clients/partner8.png'
import styles from '@/styles/Enlisted.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import { Fade } from "react-awesome-reveal";
const Enlistedlogo = () => {

    let enlistedslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <Container fluid className='px-md-5'>
                <Row className='justify-content-center'>
                    <Col md={10}>
                    <Fade direction="up">
                        <div className={`${styles.enlistedLogo} mt-5`}>
                            <Slider {...enlistedslider}>
                                <div>
                                    <Image className='img-fluid'
                                        src={partner1}
                                        alt='Best_Publisher'
                                    />
                                </div>
                                <div>
                                    <Image className='img-fluid'
                                        src={partner2}
                                        alt='Best_Publisher'
                                    />
                                </div>
                                <div>
                                    <Image className='img-fluid'
                                        src={partner3}
                                        alt='Best_Publisher'
                                    />
                                </div>
                                <div>
                                    <Image className='img-fluid'
                                        src={partner4}
                                        alt='Best_Publisher'
                                    />
                                </div>
                                <div>
                                    <Image className='img-fluid'
                                        src={partner5}
                                        alt='Best_Publisher'
                                    />
                                </div>
                                <div>
                                    <Image className='img-fluid'
                                        src={partner6}
                                        alt='Best_Publisher'
                                    />
                                </div>
                                <div>
                                    <Image className='img-fluid'
                                        src={partner7}
                                        alt='Best_Publisher'
                                    />
                                </div>
                                <div>
                                    <Image className='img-fluid'
                                        src={partner8}
                                        alt='Best_Publisher'
                                    />
                                </div>
                            </Slider>
                        </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Enlistedlogo