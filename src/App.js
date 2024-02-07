import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importe os componentes Home, Servicos, Orcamentos, Feed, Cadastro e Login
import Home from './components/pages/Home';
import Servicos from './components/pages/Servicos';
import Orcamentos from './components/pages/Orcamentos';
import Feed from './components/pages/Feed';
import Cadastro from './components/pages/Cadastro';
import Login from './components/pages/Login';
import Navbar from './components/pages/layout/Navbar';
import Logo from './components/pages/image-removebg-preview.png';
import styles from './index.css'




function App() {
  return (
    <Router>
      <Navbar />
      

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cadastro" element={<Cadastro/>} />
      <Route path="/Feed" element={<Feed />} />
      <Route path="/Servicos" element={<Servicos/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Cadastro" element={<Cadastro/>}/> 
    </Routes>
    
    
    </Router>

  );
}

export default App;