import {useState} from 'react';

/** Axios api fetching **/  
import axios from 'axios';

/** React query **/  
import {useQuery} from '@tanstack/react-query';

/** panel page components **/  
import NewReleased from '../components/panel-components/home-page-panels/NewReleased';
import TrendingNow from '../components/panel-components/home-page-panels/TrendingNow';
import HighlyRated from '../components/panel-components/home-page-panels/HighlyRated';

/** stylesheet **/  
import './styles.css';

/* 
const fetchNewReleased = () => {
    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=ffbd3a2d02fe137e41388eacf6dc463e&language=en-US&page=1').then((response)=>response.data)
}

const fetchTrendingNow = () => {
    return axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=ffbd3a2d02fe137e41388eacf6dc463e').then((response)=>response.data)
}

const fetchHighlyRated = () => {
    return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ffbd3a2d02fe137e41388eacf6dc463e&language=en-US&page=1').then((response)=>response.data)
}

 */

export default function HomePage() {
    /* 
    const {isLoading:newReleasedLoading ,data:fetchNewRlsdMovies} = useQuery({ queryKey: ['upcoming'], queryFn: fetchNewReleased, staleTime:1800000}
    )
    
    const {isLoading:trendingNowLoading ,data:fetchTrdgNowMovies} = useQuery({ queryKey: ['trending'], queryFn: fetchTrendingNow ,staleTime:1800000}
    )

    const {isLoading:highlyRtLoading, data:fetchHgrMovies} = useQuery({ queryKey: ['toprated'], queryFn: fetchHighlyRated ,staleTime:1800000}
    )
     */

    const [clickStatus,setclickStatus] = useState(false);

    const [movieData,setmovieData] = useState([]);

    localStorage.setItem("data-saved",JSON.stringify(movieData))
    
    const panelSelected = (dataSelected) => { 

        setclickStatus(
            prevStatus => !prevStatus
        )

        console.log(movieData);

        console.log(clickStatus);

        if(movieData.length <= 0){
            setmovieData(
                (prevData) => [...prevData, dataSelected]
            )
            console.log("bagong pasok na data");
        }else{
            setmovieData(
                (prevData) => [...prevData, dataSelected]
            )  
            console.log("add to the existing data");
        }
    }

    
/*     if(newReleasedLoading) return <>{loadingPanel}</>
    if(trendingNowLoading) return <>{loadingPanel}</>
    if(highlyRtLoading) return <>{loadingPanel}</> */

    function loadingPanel(){
        return(
            <div className="loadingPanel">
                <h2>Loading</h2>
            </div>
        )
    }
    

    return(
        <>
            <div className='body-home'>

                <div className = "foregrounds--cover">
                    <div className="container--contain">
                        <div className="background--contain">
                            <h1>WELCOME TO <span style={{color:"rgb(164, 90, 25)"}}>FILM</span>|INFO</h1>
                            <p>Browse and save Films and TV shows</p>
                        </div>
                    </div>
                </div>
            

                <div className="newReleases-section">
                    <h3>New Releases</h3>
                    <div className="container--fluid">
                        <div className="row--data">
{/*                             {
                                fetchNewRlsdMovies.results.map(
                                    (data)=>{
                                    return <NewReleased key ={data.id} status={clickStatus} handleClick={panelSelected} panelDisplay = {false} dataItems={data}/>
                                })
                            } */}
                        </div>
                    </div>
                </div>

                <div className="newReleases-section">
                    <h3>Trending Now</h3>
                    <div className='container--fluid'>
                        <div className="row--data">
{/*                             {
                                fetchTrdgNowMovies.results.map(
                                    (data)=>{
                                    return <TrendingNow key={data.id} handleClick={panelSelected} panelDisplay = {false} dataItems={data}/>
                                })
                            } */}
                        </div>
                    </div>
                </div>

                <div className='continue-section'>
                    <h3>Highly rated</h3>
                    <div className='container--fluid'>
                        <div className='row--data'>
{/*                             {
                                fetchHgrMovies.results.map((data)=>{
                                    return <HighlyRated key={data.id} handleClick={panelSelected} panelDisplay = {false} dataItems={data}/>
                                })
                            } */}
                        </div>
                    </div>
                </div>                

            </div>
        </>
    );

}





