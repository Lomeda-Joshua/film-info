/** React providers **/  
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';

/** React Query **/  
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'; 

/** Root layout **/  
import RootLayout from './pages/root-layouts/RootLayout';

/** Pages routing **/  
import HomePage from './pages/HomePage';
import TvShows from './pages/TvShows';
import SavedPage from './pages/SavedPage';


/** Error handling **/ 
import ErrorPage from './pages/error-pages/ErrorPage'; 

/** stylesheet **/  
import './App.css';


function App(){


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>} errorElement={<ErrorPage />} >
          <Route path="/film-info" element={<HomePage />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/saved-list" element={<SavedPage />} />
      </Route>
    )
  )


  return (
    <div className="App">
       <RouterProvider router = {router} />  
    </div>
  );
}

export default App;
