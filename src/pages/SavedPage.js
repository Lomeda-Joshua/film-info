import {NavLink} from 'react-router-dom';

import './pages_styles.css';

export default function SavedPage(){
    return(
        <>
            <div className='body-home'>
            
                <div id="modalBox" className="modal">
                    <div className="modal-content">
                        <span className="close" >&times;</span>
                            <NavLink className ="modal-links" to="/"><h5>Go to Movies Selection</h5></NavLink>
                            <NavLink className ="modal-links" to="/tv-shows"><h5>Go to TV Shows Selection</h5></NavLink>
                    </div>
                </div>


                <div className="newReleases-section">
                    <h3>Saved</h3>
                    <div className="container--fluid">
                        <div className="row--data">
                      
                        </div>
                    </div>
                </div>

                {/* <button className="saveToBtn" id="btnSuccess" onClick={clearFunction}>save to profile</button> */}

            </div>
        </>
    )
}