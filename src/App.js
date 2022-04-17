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
import { useAuth, useTheme } from './contexts';
import { PlaylistVideo } from './pages/Playlist/component/PlaylistVideo';
import { Profile } from './pages/Profile/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { token } = useAuth();
  const { theme } = useTheme();
  return (
    <div className='App' data-theme={theme}>
      <ToastContainer
        position='bottom-right'
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme='colored'
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
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
        <Route
          path='/playlist'
          element={token ? <Playlist /> : <Signin />}
        ></Route>
        <Route
          path='/profile'
          element={token ? <Profile /> : <Signin />}
        ></Route>
        <Route path='/playlist/:playlistId' element={<PlaylistVideo />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
