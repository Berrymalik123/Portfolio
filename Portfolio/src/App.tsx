import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';



import { IStaticMethods } from 'flyonui/flyonui';
import About from './pages/About';
import Projects from './pages/Projects';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const loadFlyonui = async () => {
      await import('flyonui/flyonui');

      window.HSStaticMethods.autoInit();
    };

    loadFlyonui();
  }, [location.pathname]);
 

  return (
    <>
    <div className="min-h-screen bg-base-200/60">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />

         <Route path='/src/pages/About.tsx' element={<About />} /> 
         <Route  path='/src/pages/Projects.tsx' element={<Projects />} />
        </Routes>
      </div>
    </div>
    
    </>
  );
}

export default App;
