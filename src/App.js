/** React providers **/  
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';

/** Root layout **/  
import RootLayout from './pages/root-layouts/RootLayout';

/** Pages routing **/  
import HomePage from './pages/HomePage';

/** Error handling **/ 
import ErrorPage from './pages/error-pages/ErrorPage'; 

/** stylesheet **/  
import './App.css';


function App(){


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>} errorElement={<ErrorPage />} >
          <Route path="/film-info" element={<HomePage />} />
          
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
