import Head from 'next/head'
import Banner from '@/components/Banner'
import Clients from '@/components/Clients'
import Tradition from '@/components/Tradition'
// import Climax from '@/components/Climax'
import Enlisted from '@/components/Enlisted'
import Dreams from '@/components/Dreams'
import Audience from '@/components/Audience'
import Broader from '@/components/Broader'
import Advice from '@/components/Advice'
import Plans from '@/components/Plans'
import Bookshelf from '@/components/Bookshelf'
import Enlistedlogo from '@/components/Enlistedlogo'

// import { Helmet } from 'react-helmet'





// images
import bannerImg from '../public/images/banner/banner.png'




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


  // const schema = {
  //   "@context": "https://schema.org",
  //   "@type": "Product",
  //   "name": "Widget",
  //   "image": [
  //     "https://example.com/photos/1x1/photo.jpg",
  //     "https://example.com/photos/4x3/photo.jpg",
  //     "https://example.com/photos/16x9/photo.jpg"
  //   ],
  //   "description": "A widget for your website",
  //   "sku": "widget01",
  //   "mpn": "ABC123",
  //   "brand": {
  //     "@type": "Brand",
  //     "name": "ACME"
  //   },
  //   "review": {
  //     "@type": "Review",
  //     "reviewRating": {
  //       "@type": "Rating",
  //       "ratingValue": "4",
  //       "bestRating": "5"
  //     },
  //     "author": {
  //       "@type": "Person",
  //       "name": "Fred Benson"
  //     }
  //   },
  //   "aggregateRating": {
  //     "@type": "AggregateRating",
  //     "ratingValue": "4.4",
  //     "reviewCount": "89"
  //   },
  //   "offers": {
  //     "@type": "Offer",
  //     "url": "https://example.com/widget01",
  //     "priceCurrency": "USD",
  //     "price": "29.99",
  //     "priceValidUntil": "2022-11-05",
  //     "availability": "https://schema.org/InStock",
  //     "seller": {
  //       "@type": "Organization",
  //       "name": "Example Seller",
  //       "url": "https://example.com"
  //     }
  //   }
  // }


  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Best Book Publishing Company - Best Selling Publisher</title>
        <meta name="description" content="Best book publishing company, Best Selling Publishers, offer a wide range of professional publishing services for authors around the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="tags" content />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best Book Publishing Company - Best Selling Publisher" />
        <meta property="og:description" content="Best book publishing company, Best Selling Publishers, offer a wide range of professional publishing services for authors around the world" />
        <meta property="og:url" content="https://www.bestsellingpublisher.com/" />
        <meta property="og:site_name" content="Best Book Publishing Company - Best Selling Publisher" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="5 minutes" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-216290994-1" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-217179930-1" />
        <meta name="google-site-verification" content="l8dEmInLD7qLqlNVLMI-DxtJe5OMERfsOeXN76dOgAg" />
        <title>Best Book Publishing Company - Best Selling Publisher</title>
        <link rel="icon" href="/images/favicon.png" />

        {/* <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        </Helmet> */}



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

      {/*========= Audience fold =========*/}
      <Audience />


      {/*========= Climax fold =========*/}
      {/* <Climax
        title='The Intro, The Climax and The Finale'
        subtitle='We Publish Excellence!'
        text='Every idea, every story, and plot are brilliant, but they need to be refined for success. Excellence doesn’t guarantee anything—it’s the right professionals who will help you find your way through our solutions. Whether you are a new author or a seasoned veteran, Best Selling Publisher makes it easy to get started in the wonderful world of publishing. We provide everything you need to write the perfect book – all in one place.'
        btn1='Let`s discuss'
        btn2='(800)781-9093'
        imagecli={climax}
      /> */}


      {/*========= Enlisted fold =========*/}
      <Enlisted />

      {/*========= Dreams fold =========*/}
      <Dreams />

      {/*========= Broader fold =========*/}
      <Broader />

      {/*========= Enlistedlogo =========*/}
      <Enlistedlogo />

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
