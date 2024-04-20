//import './App.css';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Alunos from './components/bkp_Alunos';
import {BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1>  Dashboard - Gerenciar contribuições  </h1>
      
      <BrowserRouter>
      <Nav variant="tabs">
        <Nav.Link as={Link} to="/"> Página Inicial </Nav.Link>
        <Nav.Link as={Link} to="/alunos"> Gerenciar contribuições </Nav.Link>
        <Nav.Link as={Link} to="/sobre"> WhiteList </Nav.Link>
        <Nav.Link as={Link} to="/sobre"> BlackList </Nav.Link>
      </Nav>

      {/* <ul>
        <li> <Link to="/"> Página inicial</Link></li>
        <li><Link to="/alunos"> Cadastro de alunos</Link></li>
        <li><Link to="/sobre"> Sobre</Link></li>
      </ul> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/alunos" element={<Alunos/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
