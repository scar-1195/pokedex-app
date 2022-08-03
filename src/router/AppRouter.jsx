import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components';
import { HomePage, PokemonPage } from '../pages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='pokemon/:id' element={<PokemonPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};
