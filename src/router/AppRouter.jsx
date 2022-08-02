import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components';
import { HomePage, SearchPage } from '../pages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};
