import './style.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Index from './pages/Index.jsx'
import Resume from './pages/Resume.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <HashRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="{/}" element={<Index />} />
          <Route path="{/projects}" element={<Projects />} />
          <Route path="{/resume}" element={<Resume />} />
          <Route path="{/about}" element={<About />} />
          <Route path="{/resumewebsitereact/contact}" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </HashRouter>
    </>
  )
}

export default App
