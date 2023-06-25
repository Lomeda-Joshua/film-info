import {useState} from 'react';

/** Axios api fetching **/  
import axios from 'axios';

/** React query **/  
import {useQuery} from '@tanstack/react-query';

/** panel page components **/  
import TvShowPanel from '../components/tvshows-components/TvShowPanel';

import './pages_styles.css';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmJkM2EyZDAyZmUxMzdlNDEzODhlYWNmNmRjNDYzZSIsInN1YiI6IjYyNzEwOTRlNzJkODU1MWE0YjJkYjBlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n2sWfmHhRe-5ZHvBGr7R-KtIZ2SoIrtO1Hp7TShBEXM'
    }
  };
  
const FetchTrendingApi = () =>  fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err));



const FetchNewReleasedTV = () => {
    return axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=ffbd3a2d02fe137e41388eacf6dc463e&language=en-US&page=1').then((response)=>response.data)
}

const FetchHighlyRatedTV = () => {
    return axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=ffbd3a2d02fe137e41388eacf6dc463e&language=en-US&page=1').then((response)=>response.data)
}

function TvShows(){

    const {isLoading:newReleasedLoading ,data:fetchNewRlsdTv} = useQuery({ queryKey: ['upcomingTV'], queryFn: FetchNewReleasedTV, staleTime:1800000}
    )

    const {isLoading:highlyRtLoading, data:fetchHgTV} = useQuery({ queryKey: ['topratedTV'], queryFn: FetchHighlyRatedTV ,staleTime:1800000}
    )

    const {isLoading:trendingNowLoading, error, data:fetchTrdgNowTV} = useQuery({ queryKey: ['trendingTV'], queryFn: ()=>FetchTrendingApi(), staleTime:1800000}
    )
    
    
    const [newReleased,setnewReleased] = useState([]);
    const [trendingNow,settrendingNow] = useState([]);
    const [highlyRated,sethighlyRated] = useState([]);

    localStorage.setItem("data-saved",JSON.stringify(newReleased));
    localStorage.setItem("data-saved",JSON.stringify(trendingNow));
    localStorage.setItem("data-saved",JSON.stringify(highlyRated));


    const [clickStatus,setclickStatus] = useState(false);

    const panelSelected = (dataSelected) => { 

        setclickStatus(
            prevStatus => !prevStatus
        )

                /* New Released local storage */
                if(newReleased.length <= 0){
                    setnewReleased(
                        (prevData) => [...prevData, dataSelected]
                    )
                }else{
                    setnewReleased(
                        (prevData) => [...prevData, dataSelected]
                    )  
                }


                /* trending now local storage */
                if(trendingNow.length <= 0){
                    settrendingNow(
                        (prevData) => [...prevData, dataSelected]
                    )
                }else{
                    settrendingNow(
                        (prevData) => [...prevData, dataSelected]
                    )  
                }


                /* Highly rated local storage */
                if(highlyRated.length <= 0){
                    sethighlyRated(
                        (prevData) => [...prevData, dataSelected]
                    )
                }else{
                    sethighlyRated(
                        (prevData) => [...prevData, dataSelected]
                    )  
                }

    }

    if(newReleasedLoading) return <>{loadingPanel}</>
    if(trendingNowLoading) return <h1 style ={{color:"white"}}>"hello"</h1>
    if(highlyRtLoading) return <>{loadingPanel}</>

    if (error) return 'An error has occurred: ' + error.message

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
                    
                <div className="newReleases-section">
                    <h3>New Releases</h3>
                    <div className="container--fluid">
                        <div className="row--data">
                            {
                                fetchNewRlsdTv.results.map(
                                    (data)=>{
                                    return <TvShowPanel key ={data.id} status={clickStatus} handleClick={panelSelected} panelDisplay= {false} dataItems={data}/>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="newReleases-section">
                    <h3>Trending Now</h3>
                    <div className='container--fluid'>
                        <div className="row--data">
                        {
                            fetchTrdgNowTV.results.map(
                                (data)=>{   
                                    return <TvShowPanel key={data.id} status={clickStatus} handleClick={panelSelected} panelDisplay = {false} dataItems={data}/>
                            })
                        } 
                        </div>
                    </div>
                </div>

                <div className='continue-section'>
                    <h3>Highly rated</h3>
                    <div className='container--fluid'>
                        <div className='row--data'>
                            {
                                fetchHgTV.results.map((data)=>{
                                    return <TvShowPanel key={data.id} handleClick={panelSelected} panelDisplay = {false} dataItems={data}/>
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
        
    )
}

export default TvShows;