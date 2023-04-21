import Head from 'next/head'


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
import Bookshelf from '@/components/Bookshelf'

// images
import bannerImg from '../public/images/banner/banner.png'
import climax from '../public/images/flods/climax.png'



export default function Home() {

  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3'>Best Book Publishing <br /> Company – The Home Of <br /> Quality Publishing!</h1>;

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


      {/*========= Tradition fold =========*/}
      <Tradition />


      {/*========= Climax fold =========*/}
      <Climax
        title='The Intro, The Climax and The Finale'
        subtitle='We Publish Excellence!'
        text='Every idea, every story, and plot are brilliant, but they need to be refined for success. Excellence doesn’t guarantee anything—it’s the right professionals who will help you find your way through our solutions. Whether you are a new author or a seasoned veteran, Best Selling Publisher makes it easy to get started in the wonderful world of publishing. We provide everything you need to write the perfect book – all in one place.'
        btn1='Let`s discuss'
        btn2='(800)781-9093'
        imagecli={climax}
      />


      {/*========= Enlisted fold =========*/}
      <Enlisted />


      {/*========= Dreams fold =========*/}
      <Dreams />


      {/*========= Audience fold =========*/}
      <Audience />


      {/*========= Broader fold =========*/}
      <Broader />


      {/*========= Advice fold =========*/}
      <Advice />


      {/*========= Plans fold =========*/}
      <Plans />


      {/*========= Bookshelf fold =========*/}
      <Bookshelf

      />
    </>
  )
}
