import './App.css'

import ImageMenu from './assets/menu-top-xs.png'
import ImageIronhackLogo from './assets/ironhack-logo-xs.png'
import Gallery from './components/Gallery';

function App() {

  return (
    <>
    <div className="App">
      <nav className="navbar">
      <img src={ImageMenu} alt="menu-image"/>
      <img src={ImageIronhackLogo} alt="ironhack-logo-image"/>
      </nav>
      <Gallery/>
    </div>
    </>
    
    
  )
}

export default App
