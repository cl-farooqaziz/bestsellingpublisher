import React from 'react'
import Head from 'next/head'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '@/styles/Error.module.css'
import Link from 'next/link'

const Error = () => {
  return (
   <>
   <Head>

   <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>404</title>
    <link rel="icon" href="/images/favicon.png" />

   </Head>



<div className={styles.error}> 
<Container>
    <Row>
        <Col>
            <h2 className='fw-800 font60 color-blue t-center mb-4 font-secondary'>404 NOT FOUND</h2>
            <h4 className="fw500 font40 colortextgrey t-center font-secondary mb-2">THIS IS SOMEWHAT EMBARRASSING, ISN’T IT?</h4>
            <p className="font18 fw400 colortextgrey t-center font-secondary mb-4">It looks like nothing was found at this location. Maybe try a search?</p>

            <div className='mt-4 t-center'>
                        <Link href="#" className={styles.btn404}>LET'S DISCUSS</Link>
                        <Link href="tel:(800) 781-9093" className={styles.btn404}>(800) 781-9093</Link>
                    </div>
        </Col>
    </Row>
</Container>
</div>
   
   </>
  )
}

export default Error