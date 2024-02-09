import React from 'react';
import { TopScreen } from './components/TopScreen';
import { MovingLines } from './components/MovingLines';
import { Story } from './components/Story';
import { OurTeam } from './components/OurTeam';
import { OurWorks } from './components/OurWorks';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import "./css/main.css";

const App: React.FC = () => {
  return (
    <>
      <main className="main">
        <TopScreen />
        <MovingLines />
        <div className="main-content">
          <div className="main-content__bg">
            <Story />
            <OurWorks />
          </div>
          <OurTeam />
        </div>
        <Banner />
        <Footer />
      </main>
    </>
  );
}

export default App;