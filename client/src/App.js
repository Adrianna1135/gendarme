import './App.css';
import Liste from './Components/Liste';
import Apropos from './Components/Apropos';
import Ajout from './Components/Ajout';
import Accueil from './Components/Accueil';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <Router>
        <Routes>
          <Route element={<MainLayout />}>

          <Route path="/" element={<Accueil />} />
          <Route path="/liste" element={<Liste />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/ajout" element={<Ajout />} />
          <Route path="/modification/:id" element={<Ajout />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
