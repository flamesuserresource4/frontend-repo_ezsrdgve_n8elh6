import React from 'react';
import Navbar from './components/Navbar.jsx';
import SceneManager from './components/SceneManager.jsx';
import ProjectsGrid from './components/ProjectsGrid.jsx';
import ContactSection from './components/ContactSection.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="pt-16">
        <SceneManager />
        <ProjectsGrid />
        <ContactSection />
      </main>
    </div>
  );
}
