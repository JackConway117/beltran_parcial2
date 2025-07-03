import logo from './alumno.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Beltran Monarrez Alann Ofrael  - EXAMEN PARCIAL 2
        </p>
        <a
          className="App-link"
          href="https:www.utd.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
        >
          UNIVERSIDAD TECNOLÓGICA DE DURANGO - CLICK PARA VISITAR EL SITIO
        </a>
      </header>
    </div>
  );
}

export default App;
