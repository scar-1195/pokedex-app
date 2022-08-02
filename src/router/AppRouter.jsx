import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, PokemonPage, SearchPage } from '../pages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='pokemon' element={<PokemonPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};
