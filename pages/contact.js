import Head from 'next/head'
import Banner from '@/components/Banner'
import Clients from '@/components/Clients'
import Formdata from '@/components/Formdata'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Contact.module.css'
import bannerImg from '../public/images/banner/contact.png'
import Image from 'next/image'
import location from '../public/images/icons/location2.png'
import email from '../public/images/icons/email2.png'
import call from '../public/images/icons/call2.png'
import Link from 'next/link'


export default function Contact() {

  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3'>Contact Us</h1>;

  const bannertext = [
    {
      title: newSpan,
      discuss: 'LETS DISCUSS',
      homebannernum: '(800)781-9093',
      bannercounter: 'counter',
      imageban: bannerImg,
    }
  ]

  return (
    <>
      <Head>
        <title>Best Book Publishing Company - Best Selling Publisher</title>
        <meta name="description" content="Best book publishing company, Best Selling Publishers, offer a wide range of professional publishing services for authors around the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      {/*========= Banner =========*/}
      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          bannercounter={item.bannercounter}
          imageban={item.imageban}
        />
      )}

      {/*========= Clients fold =========*/}
      <Clients />

      {/*========= Bookshelf fold =========*/}
      <Container fluid className='px-md-5'>
        <Row className='contact  gy-5'>
          <Col md={6}>
            <Formdata />
          </Col>
          <Col md={6}>

            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.    690585803517!2d-118.26396242448345!3d34.    05180727315717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.    1!3m3!1m2!1s0x80c2c7b1b4cfffff%3A0x30af400ac3d5b7a1!2s1001%20Wilshire%20Blvd%20%231176%2C%    20Los%20Angeles%2C%20CA%2090017%2C%20USA!5e0!3m2!1sen!2s!4v1682088427141!5m2!1sen!2s" width="100%" height="430"></iframe>
            </div>

            <div className={styles.dispost}>

              <div className={styles.bordercompany}>
                <Image src={location} alt='Best_Publisher' className='img-fluid mb-3' />
                <h2 className='font-16 fw-700 font-primary txt-secondary text-center'>Address</h2>
                <p className='font-10'>1001 Wilshire Boulevard #1176 Los Angeles, CA 90017</p>
              </div>
              <div className={styles.bordercompany}>
                <Image src={call} alt='Best_Publisher' className='img-fluid mb-3' />
                <h2 className='font-16 fw-700 font-primary txt-secondary text-center'>Business Talk</h2>
                <p className='font-10'> <Link href="tel:(800) 781-9093">(800) 781-9093</Link> </p>
              </div>
              <div className={styles.bordercompany}>
                <Image src={email} alt='Best_Publisher' className='img-fluid mb-3' />
                <h2 className='font-16 fw-700 font-primary txt-secondary text-center'>Email Address</h2>
                <p className='font-10'> <Link href="mailto:info@bestsellingpublisher.com">info@bestsellingpublisher.com</Link> </p>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
