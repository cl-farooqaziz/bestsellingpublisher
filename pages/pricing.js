import Head from 'next/head'
import { Playfair_Display, Mulish } from 'next/font/google'

import Banner from '@/components/Banner'
import Clients from '@/components/Clients'
import Tradition from '@/components/Tradition'
import Climax from '@/components/Climax'
import Enlisted from '@/components/Enlisted'
import Dreams from '@/components/Dreams'
import Audience from '@/components/Audience'
import Broader from '@/components/Broader'
import Advice from '@/components/Advice'
import Plans from '@/components/Plans'
import Formdata from '@/components/Formdata'
import { Container, Row, Col } from 'react-bootstrap'

import BookPublishing from '@/components/Bookpublishing'
import BookPromotion from '@/components/Bookpromotion'
import BookWriting from '@/components/Bookwriting'
import BookEditing from '@/components/Bookediting'
import BookMarketing from '@/components/Bookmarketing'
import BookProofRead from '@/components/Bookproofread'
import BookGhostWriting from '@/components/Bookghostwriting'
import BookChildrenPublish from '@/components/Bookchildrenpublish'
import BookChildrenIllus from '@/components/Bookchildrenillus'
import BookDigitalMarket from '@/components/Bookdigitalmarket'

// images
import climax from '../public/images/flods/bestselling.png'
import bannerImg from '../public/images/banner/aboutus.png'

const inter = Playfair_Display({ subsets: ['latin'] })
const mulish = Mulish({ subsets: ['latin'] })

export default function About() {

  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3'>Pricing</h1>;

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



          {/* Bookbadges */}
          <BookPublishing />

        <BookPromotion />

        <BookWriting />

        <BookEditing />

        <BookMarketing />

        <BookProofRead />

        <BookGhostWriting />

        <BookChildrenPublish />
        
<div className='bookChildrenIllus'>
        <BookChildrenIllus />
</div>


    </>
  )
}
