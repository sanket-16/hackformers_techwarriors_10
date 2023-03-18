import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import Navbar from './components/Navbar';
import ReactQueries from './pages/ReactQueries';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
