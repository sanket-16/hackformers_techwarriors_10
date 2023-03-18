import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import Navbar from './components/Navbar';
import ReactQueries from './pages/ReactQueries';
import UserProfilePage from '@pages/UserProfilePage';
import SetUpProfile from '@pages/SetUpProfile';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/user" element={ <UserProfilePage/>} />
        <Route path="/updateprofile" element={ <SetUpProfile/>} />
      </Routes>
    </>
  );
}

export default App;
