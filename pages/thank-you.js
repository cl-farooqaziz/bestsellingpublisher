import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Error.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'



const Thankyou = () => {
  return (
    <>
      <Head>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Thank You</title>
        <link rel="icon" href="/images/favicon.png" />

      </Head>

      <div className={styles.error}>
        <Container>
          <Row>
            <Col>
              <h2 className='fw-800 font60 color-blue text1-center font-secondary'>Thank-you</h2>
              <h4 className="fw500 font-16 colortextgrey text1-center font-secondary mb-0">Our representative will contact you shortly.</h4>
              <div className='mt-4 text1-center'>
                <Link href="#" className={styles.btn404}>Let's Discuss</Link>
                <Link href="tel:8007819093" className={styles.btn404}>(800) 781-9093</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>





    </>
  )
}

export default Thankyou