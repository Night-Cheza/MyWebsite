import NavBar from './components/LoadPage/NavBar';
import './App.css';
import RenderingName from './components/LoadPage/RenderingName';


function App() {
  return (
    <div>
      <header className="appHeader">
        <NavBar />
        <RenderingName />
      </header>
    </div>
  );
}

export default App;
