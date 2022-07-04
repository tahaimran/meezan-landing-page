import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx'
import Features from './Components/Features/Features.jsx'
import Vision from './Components/Vision/Vision.jsx'
import Team from './Components/Team/Team.jsx'
import About from './Components/About/About.jsx'
import ContactForm from './Components/ContactForm/ContactForm.jsx'
import Partners from './Components/Partners/Partners.jsx'
import FooterTop from './Components/FooterTop/FooterTop.jsx'
import FooterBot from './Components/FooterBot/FooterBot.jsx'
import TopBtn from './Components/TopBtn/TopBtn.jsx';
import Product from './Components/Product/Product.jsx';


function App() {
  return (
    <>
      <Header/>
      <Main />
      <Features/>
      <TopBtn/>
      {/* <Vision /> */}
      <Product/>
      <Team />
      <About />
      <ContactForm />
      <Partners />
      <FooterTop />
      <FooterBot />
    </>
  )
}

export default App;
