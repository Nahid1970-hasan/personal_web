import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Certifications from './pages/Certifications';
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {
  // Automatically uses the base URL from Vite config for GitHub Pages
  // If base is set in vite.config.js, it will be used automatically
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/service" element={<Layout><Service /></Layout>} />
        <Route path="/project" element={<Layout><Project /></Layout>} />
        {/* <Route path="/certifications" element={<Layout><Certifications /></Layout>} /> */}
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
