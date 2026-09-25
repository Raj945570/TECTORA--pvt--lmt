import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedLayout from '../components/ProtectedLayout';
import Home from '../pages/Home';
import Services from '../pages/Services';
import DigitalServices from '../pages/DigitalServices';
import EcoSolutions from '../pages/EcoSolutions';
import Interior from '../pages/Interior';
import ProjectManagement from '../pages/ProjectManagement';
import UnderDevelopment from '../pages/UnderDevelopment';
import Enquiry from '../pages/Enquiry';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

export default function AppRoutes() {
  return (
    <Routes>
      {/* 1. Public Authentication Routes (No Navbar, No Footer, No Website Content) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Legacy Auth Redirects */}
      <Route path="/login.html" element={<Navigate to="/login" replace />} />
      <Route path="/signup.html" element={<Navigate to="/signup" replace />} />

      {/* 2. Protected Website Routes (Requires token in localStorage) */}
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/digital-services" element={<DigitalServices />} />
        <Route path="/eco-solutions" element={<EcoSolutions />} />
        <Route path="/eco" element={<EcoSolutions />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/materials" element={<UnderDevelopment />} />
        <Route path="/real-estate" element={<UnderDevelopment />} />
        <Route path="/experts" element={<UnderDevelopment />} />
        <Route path="/under-development" element={<UnderDevelopment />} />

        {/* Legacy HTML URL Redirects */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/services.html" element={<Navigate to="/services" replace />} />
        <Route path="/digital-services.html" element={<Navigate to="/digital-services" replace />} />
        <Route path="/interior.html" element={<Navigate to="/interior" replace />} />
        <Route path="/project-management.html" element={<Navigate to="/project-management" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
        <Route path="/enquiry.html" element={<Navigate to="/enquiry" replace />} />
      </Route>

      {/* 3. Catch-all fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

