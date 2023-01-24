import logo from './logo.svg';
import './App.css';
import { Route, Routes ,BrowserRouter } from 'react-router-dom';
import { Navbar } from './componentes/Navbar';
import { Inicio } from './paginas/Inicio';
import { Contacto } from './paginas/Contacto';
import { Ubicacion } from './paginas/Ubicacion';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>


        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/ubicacion' element={<Ubicacion/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
