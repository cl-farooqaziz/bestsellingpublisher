import Head from 'next/head'
import Banner from '@/components/Banner'
import Clients from '@/components/Clients'
import BookPublishing from '@/components/Bookpublishing'
import BookPromotion from '@/components/Bookpromotion'
import BookWriting from '@/components/Bookwriting'
import BookEditing from '@/components/Bookediting'
import BookMarketing from '@/components/Bookmarketing'
import BookProofRead from '@/components/Bookproofread'
import BookGhostWriting from '@/components/Bookghostwriting'
import BookChildrenPublish from '@/components/Bookchildrenpublish'
import BookChildrenIllus from '@/components/Bookchildrenillus'
// images
import bannerImg from '../public/images/banner/aboutus.png'
import img2 from '../public/images/banner/img2.png'


export default function About() {

  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3'>Pricing</h1>;

  const bannertext = [
    {
      title: newSpan,
      discuss: `LET'S DISCUSS`,
      homebannernum: '(800)781-9093',
      bannercounter: 'counter',
      imageban: bannerImg,
      img2: img2,

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
          img2={item.img2}
        />
      )}


      {/*========= Clients fold =========*/}
      {/* <Clients /> */}
      <Enlistedlogo />

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
