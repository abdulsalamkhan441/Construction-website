import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing.page.jsx';
import AboutUs from './pages/AboutUS.jsx';
import Services from './pages/services.jsx';
import Projects from './pages/projects.jsx';
import Testimonial from './pages/Testimonial.jsx';
import Request from './pages/request.jsx';
import Contact from './pages/ContectUs.jsx';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/RequestQuote" element={<Request/>} />
          <Route path="/contectUs" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
