import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Work from './components/work/Work';
import Education from './components/education/Education';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import useLocalStorage from 'use-local-storage'
import Footer from './components/footer/Footer';
import ScrollToTop from "react-scroll-to-top";


function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="app" data-theme={theme}>
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='main'>
                <Home />
                <About />
                <Services />
                <Work />
                <Education />
                <Portfolio />
                <Contact theme={theme} />
                <Footer />
                <ScrollToTop
  smooth={true}
  top="200"
  color="white"
  height="20"
  width="20"
  className="scroll-to-top"
  style={{
  borderRadius: "90px",
  backgroundColor: "hsl(352.96deg 100% 64.9%)",
  transition: "transform 0.3s ease", 
  }}
/>
            </main>
        </div>
    );
}

export default App;
