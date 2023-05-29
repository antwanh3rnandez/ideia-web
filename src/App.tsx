import HeroSection from '../src/components/heroComponent';
import Simulador from '../src/components/simuladorComponent';
import Sectores from '../src/components/sectoresComponent';
import Footer from './components/footerComponent';

export default function MyApp() {
  return (
    <div>
      <HeroSection />
      <Simulador
        title="Descubre cuanto pagarias al mes por vivir en tu casa ideal"
        paragraph="Juega con este simulador y descubre al instante las condiciones que necesitarias para conseguir tu mejor credito hipotecario."
      />
      <Sectores/>
      <Footer/>
    </div>
  );
}
