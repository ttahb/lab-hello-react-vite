import './App.css'

import ImageMenu from './assets/menu-top-xs.png'
import ImageIronhackLogo from './assets/ironhack-logo-xs.png'
import ImageIcon1 from './assets/icon1.png';
import ImageIcon2 from './assets/icon2.png';
import ImageIcon3 from './assets/icon3.png';
import ImageIcon4 from './assets/icon4.png';

function App() {

  return (
    <>
    <div className="App">
      <nav className="navbar">
      <img src={ImageMenu} alt="menu-image"/>
      <img src={ImageIronhackLogo} alt="ironhack-logo-image"/>
      </nav>
      <img src={ImageIcon1} alt="icon-1-image"/>
      <img src={ImageIcon2} alt="icon-2-image"/>
      <img src={ImageIcon3} alt="icon-3-image"/>
      <img src={ImageIcon4} alt="icon-4-image"/>
    </div>
    </>
    
    
  )
}

export default App
