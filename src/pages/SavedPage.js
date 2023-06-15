import {useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import Saved from '../components/savedpage-components/SavedPage';

import './pages_styles.css';

function SavedPage(){

    const dataSaved = JSON.parse(localStorage.getItem("data-saved"));
    const [panelSaved,setpanelSaved] = useState(AddToSaved());

    useEffect(
        ()=>{
            if(dataSaved.length !== 0){
                setpanelSaved(
                    ()=>dataSaved.map(
                        (data) => <Saved panelDisplay={false} dataItems={data}/>
                    )
                )
            }else{
                setpanelSaved(
                    AddToSaved()
                )
            }
        },[]
    )

    function AddToSaved(){
        return(
            <div className="addToSaved" onClick={showModal}>
                <h3>Add to your saved list</h3>
            </div>
        )
    }


    function showModal(){
        let modal = document.getElementById("modalBox");
        modal.style.display = "block";
    }

    function closeModal(){
        let modal = document.getElementById("modalBox");
        modal.style.display = "none";
    }

    return(
        <>
            <div className='body-home'>
            
                <div id="modalBox" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal} >&times;</span>
                            <NavLink className ="modal-links" to="/film-info"><h5>Go to Movies Selection</h5></NavLink>
                            <NavLink className ="modal-links" to="/tv-shows"><h5>Go to TV Shows Selection</h5></NavLink>
                    </div>
                </div>


                <div className="newReleases-section">
                    <h3>Saved</h3>
                    <div className="container--fluid">
                        <div className="row--data">
                            {panelSaved}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SavedPage;