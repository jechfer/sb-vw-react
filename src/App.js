import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDisplay from './components/CardDisplay';
import CarouselBestSeller from './components/CarouselBestSeller';
import Cta from './components/Cta';
import TwoWidths from './components/TwoWidths';
import TwoHeigths from './components/TwoHeights';
import TwoHeigthsReversed from './components/TwoHeightsReversed';
import HalfWidth from './components/HalfWidth';

function App() {
  return (
    <div className="App">
      <Cta/>
      <CarouselBestSeller/>
      <CardDisplay/>
      <TwoWidths/>
      <TwoHeigths/>
      <TwoHeigthsReversed/>
      <HalfWidth/>

    </div>
  );
}

export default App;
