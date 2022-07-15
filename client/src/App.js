import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Game from './Pages/Game';
import Home from './Pages/Home';
import InfiniScroll from './Pages/InfiniScroll';
import NoMatch from './Pages/NoMatch';
import Normalize from './Pages/Normailze';
import Pagination from './Pages/Pagination';
import States from './Pages/States';
import TimeDemo from './Pages/Timedemo';
import Validation from './Pages/Validation';
import { ChampionsRoutes } from './Routes/ChampionsRoutes';
import { LocationsRoutes } from './Routes/LocationsRoutes';
import { QuotesRoutes } from './Routes/QuotesRoutes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='/game' element={<Game/>}/>
      <Route path='/states' element={<States/>}/>
      <Route path='/normalize' element={<Normalize/>}/>
      <Route path='/validation' element={<Validation/>}/>
      <Route path='/pagination' element={<Pagination/>}/>
      <Route path='/infi' element={<InfiniScroll/>}/>
      <Route path='/time' element={<TimeDemo/>}/>
      <Route path='/quotes/*' element={<QuotesRoutes/>}/>
      <Route path='/locations/*' element={<LocationsRoutes/>}/>
      <Route path='/champions/*' element={<ChampionsRoutes/>}/>
      <Route path='/*' element={<NoMatch/>}/>
      </Route>
    </Routes>
  );
}

export default App;
