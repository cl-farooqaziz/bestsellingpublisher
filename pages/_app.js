import '@/styles/globals.css'
import Header from '../components/Header'
import Footer from '@/components/Footer'
const ZENDESK_KEY = "a97320cd-3363-42aa-a55b-7613ba478cd5";
import Zendesk, { ZendeskAPI } from "../pages/ZendexConfig";

export default function App({ Component, pageProps }) {

  const handleLoaded = () => {
    // ZendeskAPI("messenger", "open");
    zE('webWidget:on', 'open', function() {
      console.log('The widget has been opened!');
    });
  };

  return (
    <>
      <Header />
      < Component {...pageProps} />
      <Footer />
      <div>
      <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
    </div>
    </>
  )
}
