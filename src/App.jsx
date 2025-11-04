import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProjectsGrid from './components/ProjectsGrid';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero3D />
        <ProjectsGrid />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
