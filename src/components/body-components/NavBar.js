import {NavLink} from 'react-router-dom';
import brand from '../../assets/logos/film-info-text-brand.png';

function NavBar(){
   
    return(
        <>
            
            <nav class="navbar-container">

                <div class="navBar-brand">
                    <img src={brand} alt="logo" />
                </div>

                <div class="navbar-link">
                    <ul class="navbar-ul">

                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/film-info">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="tv-shows">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="tv-shows">TV Shows</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="saved-list">Saved <sup style={{color:"white",fontWeight:900}}></sup></NavLink>
                        </li>

                    </ul>
                </div>
                
            </nav>
        </>
    )
}

export default NavBar;





