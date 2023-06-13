import { Outlet } from 'react-router-dom';

import NavBar from '../../components/body-components/NavBar';
import Footer from '../../components/body-components/Footer';


export default function RootLayout(){
    return(
        <>
           <NavBar />
           <Outlet />
           <Footer />
        </>
    )
}