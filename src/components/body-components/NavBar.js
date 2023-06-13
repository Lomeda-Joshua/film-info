import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';

export default function NavBar(){

    const [saveCount,setsaveCount] = useState();
    
    return(
        <>
            <div className='row' style={{width:"90%",margin:"auto"}}>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="tv-shows">TV Shows</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="saved-list">Saved <sup style={{color:"white",fontWeight:900}}>{saveCount}</sup></NavLink>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </nav>
            </div>
        </>
    )
}





