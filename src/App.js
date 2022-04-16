import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import Mockman from 'mockman-js';
import {
  LandingPage,
  VideoListing,
  SingleVideo,
  Signin,
  Signup,
  Like,
  Watchlater,
  History,
  Playlist,
} from './pages';
import { useAuth } from './contexts';
import { PlaylistVideo } from './pages/Playlist/component/PlaylistVideo';

function App() {
  const { token } = useAuth();
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/mockman' element={<Mockman />}></Route>
        <Route path='/video' element={<VideoListing />}></Route>
        <Route path='/singlevideo/:videoID' element={<SingleVideo />}></Route>
        <Route path='/like' element={token ? <Like /> : <Signin />}></Route>
        <Route
          path='/watchlater'
          element={token ? <Watchlater /> : <Signin />}
        ></Route>
        <Route
          path='history'
          element={token ? <History /> : <Signin />}
        ></Route>
          path='/playlist'
          element={token ? <Playlist /> : <Signin />}
        ></Route>
        <Route path='/playlist/:playlistId' element={<PlaylistVideo />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
