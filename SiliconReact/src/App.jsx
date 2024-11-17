import './App.css'
import Brands from './components/Brands'
import Contacts from './components/Contacts'
import Hdiw from './components/Hdiw'
import Header from './components/Header'
import Subscribe from './components/Subscribe'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Appfeatures from './components/Appfeatures'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Transfers from './components/Transfers'


function App() {
  

  return (
    <div className='wrapper'>
      <Header />
      <main id='main'>
        <Hero/>
        <Brands/>
        <Appfeatures/>
        <Hdiw/>
        <Transfers/>
        <Contacts/>
        <Testimonials/>
        <Faq/>
        <Subscribe/>
      </main>

    <Footer/>

    
    </div>
  )
}

export default App
