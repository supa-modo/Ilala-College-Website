import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import components
import {
  Navigation,
  Hero,
  AboutSection,
  ProgramsSection,
  Footer,
} from "./components/Hero";

// Page Components
const HomePage = () => (
  <>
    <Hero />
    <AboutSection />
    <ProgramsSection />
  </>
);

const ProgramsPage = () => (
  <div className="container mx-auto py-16">
    <h1 className="text-4xl font-bold text-center mb-12">Academic Programs</h1>
    {/* Detailed programs list */}
  </div>
);

const AdmissionsPage = () => (
  <div className="container mx-auto py-16">
    <h1 className="text-4xl font-bold text-center mb-12">
      Admissions Information
    </h1>
    {/* Admissions details */}
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />

        <main className="flex-grow mt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
