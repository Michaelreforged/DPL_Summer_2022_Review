import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Game from './Pages/Game';
import NoMatch from './Pages/NoMatch';
import States from './Pages/States';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='/game' element={<Game/>}/>
      <Route path='/states' element={<States/>}/>
      <Route path='/*' element={<NoMatch/>}/>
      </Route>
    </Routes>
  );
}

export default App;
