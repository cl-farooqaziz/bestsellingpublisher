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
    <title>404 - Hire Professional Book Writing Experts in the US -</title>
    <meta name="description"
        content="Receive the Best Fraction of Profits with Our Publication Services We give you maximum creative control that retains royalties with a self-published book. Discuss your publishing requirement and strategies with us. Lets Discuss Lets Discuss (213) 289 3888 Request A Free Quote Your Budget3k-5k5k-7k7k-10k10k-15k15k-20k20k-25k25k-30k30k-40k40k-50k The published manifestation of your writing dreams! Get Free Consultancy Publishing by […]" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="tags" content="" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Book Publishing - Hire Professional Book Writing Experts in the US -" />
    <meta property="og:description"
        content="Receive the Best Fraction of Profits with Our Publication Services We give you maximum creative control that retains royalties with a self-published book. Discuss your publishing requirement and strategies with us. Lets Discuss Lets Discuss (213) 289 3888 Request A Free Quote Your Budget3k-5k5k-7k7k-10k10k-15k15k-20k20k-25k25k-30k30k-40k40k-50k The published manifestation of your writing dreams! Get Free Consultancy Publishing by […]" />
    <meta property="og:url" content="https://www.bestsellingpublisher.com/" />
    <meta property="og:site_name" content="Book Publishing - Hire Professional Book Writing Experts in the US -" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:label1" content="Est. reading time" />
    <meta name="twitter:data1" content="5 minutes" />
    <link rel="icon" href="/favicon.svg" />

   </Head>



<div className={styles.error}> 
<Container>
    <Row>
        <Col>
            <h2 className='fw-800 font60 color-blue t-center mb-4 font-primary'>404 NOT FOUND</h2>
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