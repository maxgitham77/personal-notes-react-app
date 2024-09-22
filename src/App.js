import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NotesList from './components/NotesList';
import NotFound from './components/NotFound';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      <div>
        <Routes>
          <Route exact path='/' Component={NotesList} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
