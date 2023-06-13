import { Outlet } from 'react-router-dom';

import NavBar from '../../components/body-components/NavBar';
import Footer from '../../components/body-components/Footer';


function RootLayout(){
    return(
        <>
           <NavBar />
           <Outlet />
           <Footer />
        </>
    )
}

export default RootLayout