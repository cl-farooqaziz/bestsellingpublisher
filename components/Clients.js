import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import banslider1 from '../public/images/clients/client.png'
import banslider2 from '../public/images/clients/client2.png'
import banslider3 from '../public/images/clients/client3.png'
import banslider4 from '../public/images/clients/client4.png'
import banslider5 from '../public/images/clients/client5.png'

const Clients = () => {

    let bannerslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section>
                <Container fluid>
                    <Row className='justify-content-center'>
                        <Col md={10}>
                            <div className='homebannerlogo'>
                                <Slider {...bannerslider}>
                                    <div>
                                        <Image className='img-fluid'
                                            src={banslider1}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={banslider2}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={banslider3}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={banslider4}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image className='img-fluid'
                                            src={banslider5}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Clients