import Head from 'next/head'
// import Script from 'next/script'




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

// const Banner1 = dynamic(() => import('@/components/Banner'));
// const Clients1 = dynamic(() => import('@/components/Clients'));
// const Tradition1 = dynamic(() => import('@/components/Tradition'));
// const Climax1 = dynamic(() => import('@/components/Climax'));
// const Enlisted1 = dynamic(() => import('@/components/Enlisted'));
// const Dreams1 = dynamic(() => import('@/components/Dreams'));
// const Audience1 = dynamic(() => import('@/components/Audience'));
// const Broader1 = dynamic(() => import('@/components/Broader'));
// const Advice1 = dynamic(() => import('@/components/Advice'));
// const Plans1 = dynamic(() => import('@/components/Plans'));
// const Bookshelf1 = dynamic(() => import('@/components/Bookshelf'));



// import { Person } from "schema-dts";
// import { jsonLdScriptProps } from "react-schemaorg";

// images
import bannerImg from '../public/images/banner/banner.png'
import climax from '../public/images/flods/climax.png'
import dynamic from 'next/dynamic'



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




      </Head>

{/* <>

<script
        {...jsonLdScriptProps<Person>({
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": "bestsellingpublisher",
          "alternateName": "best selling publisher",
          "url": "https://www.bestsellingpublisher.com/",
          "logo": "https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/d967f86c-9b11-4758-0dae-cba2a3d0c900/public",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "(800)781-9093",
            "contactType": "sales",
            "availableLanguage": "en"
          },
          "sameAs": [
            "https://www.bestsellingpublisher.com/",
            "https://www.facebook.com/Best-Selling-Publisher-103021665842266/?ref=page_internal",
            "https://www.instagram.com/bspublisher/",
            "https://twitter.com/bspublisher"
          ]
        })}
      />

<script
        {...jsonLdScriptProps<Person>({
         
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "bestsellingpublisher",
          "url": "https://www.bestsellingpublisher.com/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.bestsellingpublisher.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }

        })}
      />

</> */}


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
