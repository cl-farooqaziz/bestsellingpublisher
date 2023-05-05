import React from 'react'
import Banner from '@/components/Banner'
import Head from 'next/head'
import bannerImg from '../public/images/banner/aboutus.webp'


const Thankyou = () => {

  const thankuHead = <h1 className='font50 fw-800 color-blue font-primary'>Thank You</h1>

  const bannertext = [
    {
      title: thankuHead,
      pra: 'Our representative will contact you shortly.',
      banners: 'bookpublishingservices',
      thankyou: 'thankyou',
      img1:bannerImg,
    }
  ]


  return (
    <>
      <Head>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Thank You</title>
        <link rel="icon" href="/images/favicon.png" />

      </Head>

      {/* banner components */}

      {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          text={item.pra}
          bannershome={item.banners}
          thankyou={item.thankyou}
          imageban={item.img1}
        />
      )}

    </>
  )
}

export default Thankyou