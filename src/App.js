import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import Mockman from 'mockman-js';
import { LandingPage, VideoListing, SingleVideo } from './pages';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/mockman' element={<Mockman />}></Route>
        <Route path='/video' element={<VideoListing />}></Route>
        <Route path='/singlevideo/:videoID' element={<SingleVideo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
