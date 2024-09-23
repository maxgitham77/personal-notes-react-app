import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NotesList from './components/NotesList';
import NotFound from './components/NotFound';
import Navbar from "./components/Navbar";
import AddNote from "./components/AddNote";
import NoteDetails from "./components/NoteDetails";
 
function App() {
  return (
    <Router>
      <div>
        <Navbar />
      <div>
        <Routes>
          <Route exact path='/' Component={NotesList} />
          <Route path='/add-note' Component={AddNote} />
          <Route path='/notes/:id' Component={NoteDetails} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
