import Head from 'next/head'
import Banner from '@/components/Banner'
import Clients from '@/components/Clients'
import Climax from '@/components/Climax'
// images
import climax from '../public/images/flods/bestselling.png'
import bannerImg from '../public/images/banner/aboutus.png'
import img2 from '../public/images/banner/img2.png'

export default function About() {

  const newSpan = <h1 className='font-50 fw-700 font-primary txt-secondary mt-3'>About Us</h1>;

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


      {/*========= Climax =========*/}
      <div className='clam'>
        <Climax
          subtitle='Best Selling Publisher | The best place to find your next bestseller'
          text='At Best Selling Publisher, we pride ourselves on producing high-quality books that appeal to a wide range of readers. As the best book publishing company, we rely on the skills of our talented team of writers, editors, publishers, and designers. They research topics from all over the world to find the best possible information to include in our books. Then they sketch out ideas for the book layout and design. Finally, they produce finished products using both digital technologies like video production software options available now and traditional typeface artistry techniques. This combination of skills and experience ensures that our books are bestsellers!'
          text2='Best selling publisher started as a group of like-minded individuals who wanted to see change in the publishing industry. We were determined to create a company of traditional book publishers that would focus on the best interests of our authors, rather than profits. We believed that by working together, we could create a more efficient and effective publishing process, one that would deliver better books to readers around the world.'
          text3='Today, Best selling publisher is proud to be one of the leading independent publishers in the United States, and we continue to work hard to provide our authors with the best possible experience. We believe that books should be accessible to everyone, regardless of where they live or what language they speak. That`s why we offer our books in multiple languages and formats, so that readers can enjoy them no matter where they are. And we`re constantly looking for new ways to improve our process and deliver even better books to our authors and readers.'
          btn1='Let`s discuss'
          btn2='(800)781-9093'
          imagecli={climax}
        />
      </div>

    </>
  )
}
