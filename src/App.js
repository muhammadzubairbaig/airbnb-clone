import './App.css';
import { Route, Routes } from 'react-router-dom';
import { SearchPage } from './Components/SearchPage';
import { Dashboard } from './Components/Dashboard';
import { Footer } from './Components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
      <Footer />

    </>

  );
}

export default App;
