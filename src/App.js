import { useState } from 'react';
import './App.scss';
import AboutSection from './components/AboutSection';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectsSection';

function App() {
    const [aboutTop, setAboutTop] = useState(0)
    const [projectTop, setProjectTop] = useState(0)
    const [chatTop, setChatTop] = useState(0)

    return (
        <div className="app">
            <Navbar
                aboutTop={aboutTop}
                projectTop={projectTop}
                chatTop={chatTop}
            />
            <HeroSection />
            <AboutSection setAboutTop={setAboutTop} />
            <ProjectSection setProjectTop={setProjectTop} />
            <FooterSection setChatTop={setChatTop} />
        </div>
    );
}

export default App;
