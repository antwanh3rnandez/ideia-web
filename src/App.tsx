import HeroSection from '../src/components/heroComponent';
import Simulador from '../src/components/simuladorComponent';
import Sectores from '../src/components/sectoresComponent';
import Footer from './components/footerComponent';

// import { LoanContextProvider }  from '../src/context/loan/LoanContext';

export default function MyApp() {
  return (
    <div>
      <HeroSection />
      <Simulador />
      <Sectores/>
      <Footer/>
    </div>
  );
}
