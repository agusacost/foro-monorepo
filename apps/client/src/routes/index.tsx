import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import MainLayout from '../layouts/MainLayout'

//envolver en el layout que corresponda
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout> <Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout> <About /> </MainLayout>} />
      <Route path="/login" element={<MainLayout> <Login /> </MainLayout>} />
    </Routes>
  );
};

export default AppRoutes;
