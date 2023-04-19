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
import Bookshelf from '@/components/Bookshelf'

const inter = Playfair_Display({ subsets: ['latin'] })
const mulish = Mulish({ subsets: ['latin'] })

export default function Home() {

  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3'>Best Book Publishing <br className='d-none d-lg-block' /> Company – The Home Of <br className='d-none d-lg-block' /> Quality Publishing!</h1>;

  const bannertext = [
    {
      title: newSpan,
      pra: '',
      discuss: 'LETS DISCUSS',
      homebannernum: '(800)781-9093',
      bannercounter: 'counter',
      banners: '',
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
          text={item.pra}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          bannercounter={item.bannercounter}
          bannershome={item.banners}
        />
      )}
      {/*========= Clients fold =========*/}
      <Clients />
      {/*========= Tradition fold =========*/}
      <Tradition />
      {/*========= Climax fold =========*/}
      <Climax />
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
      <Bookshelf />
    </>
  )
}
