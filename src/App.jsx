import SceneManager from './components/SceneManager';
import DomeIntro from './components/DomeIntro';
import AiRealm from './components/AiRealm';
import VisionaryChamber from './components/VisionaryChamber';

function App() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      {/* SceneManager handles navigation and smooth transitions between scenes */}
      <SceneManager />

      {/* Preload key scenes (not rendered) by importing them here */}
      <div className="hidden">
        <DomeIntro />
        <AiRealm />
        <VisionaryChamber />
      </div>
    </div>
  );
}

export default App;
