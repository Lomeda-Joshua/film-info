/** React providers **/  
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';

/** React Query **/  
import { QueryClientProvider,QueryClient } from 'react-query'; 
import { ReactQueryDevtools } from 'react-query/devtools';

/** Root layout **/  
import RootLayout from './pages/root-layouts/RootLayout';

/** Pages routing **/  
import HomePage from './pages/HomePage';

/** Error handling **/ 
import ErrorPage from './pages/error-pages/ErrorPage'; 

/** stylesheet **/  
import './App.css';

function App() {

  return (
    <div className="App">
       <h1 style={{color:"white"}}>Hello world</h1>  
    </div>
  );
}

export default App;
