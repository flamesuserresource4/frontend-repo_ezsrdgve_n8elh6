import Navbar from './components/Navbar';
import SceneManager from './components/SceneManager';
import ProjectsGrid from './components/ProjectsGrid';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <SceneManager />
        <ProjectsGrid />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
