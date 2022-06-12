import './App.css';
import Banner from './Components/Banner';
import { Footer } from './Components/Footer';
import { GallerySection } from './Components/GallerySection';
import { Header } from './Components/Header';
import { LocationSection } from './Components/LocationSection';
import { OutsideDoors } from './Components/OutsideDoors';

function App() {
  return (
    <div>
   <Header/>
   <Banner/>
   <div className='max-w-7xl mx-auto mt-10'>
   <GallerySection/>
   <LocationSection/> 
   <OutsideDoors/>
   </div>
   <Footer/>
    </div>
  );
}

export default App;
