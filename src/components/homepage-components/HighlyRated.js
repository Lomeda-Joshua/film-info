import {useState} from 'react';
import '../component-styles.css';

export default function HighlyRated(props){
    
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

    const [selectedId,setselectedId] = useState(
        props.dataItems.overview
    );


    const dateOpen = new Date(props.dataItems.release_date);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[dateOpen.getMonth()];
    const year = dateOpen.getFullYear();
    const day = dateOpen.getDate();

    return(
        <>
            <div className = "card--movie">    
                <div onClick={displayPanel} className="poster--content" style={{backgroundImage:`url("${poster_title}")`,cursor:"pointer"}} >                
                </div>

                <div className="panel--info" style={infoPanel}>
                    <h5>{props.dataItems.title}</h5>
                    <p style = {textOverview} >{props.dataItems.overview}</p>
                    <p><span style = {{fontWeight:800}}>Date released:</span> {`${month} ${day}, ${year}`}</p>
                    <p style = {{lineHeight:"1px"}}><span style = {{fontWeight:800}}>Popularity count:</span> {props.dataItems.vote_average}</p>
                    <button className = "addBtn" onClick={()=>props.handleClick(props.movieId)}>Add to list</button>
                </div>

            </div>
        </>
    )
}


    



