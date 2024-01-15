import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './Pages/Home/Home';
import AddPage from './Pages/AddPage/AddPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
