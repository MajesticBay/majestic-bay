import { Header } from './components/Header';
import { TopScreen } from './components/TopScreen';
import { WhatWeDo } from './components/WhatWeDo';
import { MovingLines } from './components/MovingLines';
import { Story } from './components/Story';
import { OurTeam } from './components/OurTeam';
import { OurWorks } from './components/OurWorks';
import "./scss/main.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <TopScreen />
        <WhatWeDo />
        <MovingLines />
        <div className="main-content">
          <div className="main-content__bg">
            <Story />
            <OurWorks />
          </div>
          <OurTeam />
        </div>
      </main>
    </>
  );
}

export default App;