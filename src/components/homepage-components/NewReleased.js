import {useState} from 'react';
import '../component-styles.css';

export default function NewReleased(props){

    const poster_title = `https://image.tmdb.org/t/p/original/${props.dataItems.poster_path}`;

    const [displayStatus,setDisplayStatus] = useState(props.panelDisplay);

    function displayPanel(){
        setDisplayStatus(
            (prevState)=>{return !prevState}
        )
    }

    const textOverview = { whiteSpace:"pre-line", width:"300px",height:"200px", overflow:"hidden", textOverflow:"ellipsis" }

    
    const panelVisibility = displayStatus ? "block" : "none";
    const panelVisibilityLength = displayStatus ? "100px" : "0px";

    const infoPanel = {
        display: panelVisibility,
        left: panelVisibilityLength
    }


    const dateOpen = new Date(props.dataItems.release_date);
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[dateOpen.getMonth()];
    const year = dateOpen.getFullYear();
    const day = dateOpen.getDate();

    return(
        <>
            <div className = "content-card"  onClick={displayPanel}>    
                <div className="poster-section" style={{backgroundImage:`url("${poster_title}")`}} >                
                </div>

                <div class="description-section">
                    <h5>{props.dataItems.title}</h5>
                    <p>{props.dataItems.overview}</p>
                </div>

                <div class="date-label">
                    <p><span style = {{fontWeight:800}}>Date released:</span></p>
                    <p> {`${month} ${day}, ${year}`} </p>
                </div>

                <div class="rate-label">
                    <p><b>Rating: </b></p>
                    <p>{props.dataItems.vote_average}</p>
                </div>
                  
                <div class="description-buttons">
                    <button className="section-button">view film</button>
                    <button className = "addBtn" onClick={()=>props.handleClick(props.dataItems)}>Add to list</button>
                </div>
                

            </div>
        </>
    )
}


    



