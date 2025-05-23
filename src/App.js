import './App.css';
import { PopupProvider } from './components/PopupContext';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Usp from './components/Usp.js';
import Products from './components/Products.js';
import Video from './components/Video.js';
import Enquire from './components/Enquire.js';
import Categories from './components/Categories.js';
import About from './components/About.js';
import Brand from './components/Brands.js';
import Price from './components/Price.js';
import Testimonials from './components/Testimonials.js';
import Faq from './components/Faq.js';
import Footer from './components/Footer.js';
import EnquireNow from './components/EnquireFrom.js';


function App() {
  return (
    <>
     <PopupProvider>
      {/* header start */}
      < Header />
      {/* header end  */}
       {/* Enquire-now start  */}
      <Enquire/>
      {/* banner start  */}
      <Banner />
      {/* banner end  */}

      {/* unique selling proposition start  */}
      <Usp />
      {/* unique selling proposition end  */}

      {/* Products start */}
      <Products />
      {/* Products start */}

      {/* Video start  */}
      <Video/>
      {/* Video end  */}

      {/* Categories start  */}
      <Categories/>
      {/* Categories end  */}

      {/* About start  */}
      <About/>
      {/* About end  */}

      {/* Brand start  */}
      <Brand/>
      {/* Brand end  */}

      {/* Price start  */}
      <Price/>
      {/* Price end  */}

       {/* Testimonials start  */}
       <Testimonials/>
      {/* Testimonials end  */}

      {/* EnquireNow start */}
      <EnquireNow/>
      {/* EnquireNow end  */}

      {/* Faq start  */}
      <Faq/>
      {/* Faq end  */}
      
      {/* Footer start  */}
      <Footer/>
      {/* Footer end  */}
      </PopupProvider>
    </>
  );
}

export default App;
