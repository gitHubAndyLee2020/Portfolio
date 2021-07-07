import './App.css';
import Main from './components/Main'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'

import { useSelector } from 'react-redux'

function App() {
  const pages = useSelector((state) => state.pages)

  return (
    <div>
      <Nav />
      {pages === 'main' ? <Main /> : null }
      {pages === 'projects' ? <Projects /> : null }
      {pages === 'about' ? <About /> : null }
      {pages === 'contact' ? <Contact /> : null }
    </div>
  );
}

export default App;
