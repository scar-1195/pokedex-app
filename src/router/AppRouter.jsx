import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components';
import { HomePage, PokemonPage, SearchPage } from '../pages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='pokemon/:id' element={<PokemonPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};
