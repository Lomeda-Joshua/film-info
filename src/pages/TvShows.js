import {useState} from 'react';

/** Axios api fetching **/  
import axios from 'axios';

/** React query **/  
import {useQuery} from '@tanstack/react-query';

/** panel page components **/  
import NewReleased from '../components/tvshows-components/TvNewReleased';
import TvTrendingNow from '../components/tvshows-components/TvTrendingNow';
import TvHighlyRated from '../components/tvshows-components/TvHighlyRated';

import './pages_styles.css';

const fetchNewReleased = () => {
    return axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=ffbd3a2d02fe137e41388eacf6dc463e&language=en-US&page=1').then((response)=>response.data)
}

const fetchTrendingNow = () => {
    return axios.get('https://api.themoviedb.org/3/tv/popular?api_key=ffbd3a2d02fe137e41388eacf6dc463e&language=en-US&page=1').then((response)=>response.data)
}

const fetchHighlyRated = () => {
    return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ffbd3a2d02fe137e41388eacf6dc463e&language=en-US&page=1').then((response)=>response.data)
}

function TvShows(){

    const {isLoading:newReleasedLoading ,data:fetchNewRlsdTv} = useQuery({ queryKey: ['upcoming'], queryFn: fetchNewReleased, staleTime:1800000}
    )
    const {isLoading:trendingNowLoading ,data:fetchTrdgNowMovies} = useQuery({ queryKey: ['trending'], queryFn: fetchTrendingNow ,staleTime:1800000}
    )
    const {isLoading:highlyRtLoading, data:fetchHgrMovies} = useQuery({ queryKey: ['toprated'], queryFn: fetchHighlyRated ,staleTime:1800000}
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
                    console.log("bagong pasok na data");
                }else{
                    setnewReleased(
                        (prevData) => [...prevData, dataSelected]
                    )  
                    console.log("add to the existing data");
                }


                /* trending now local storage */
                if(trendingNow.length <= 0){
                    settrendingNow(
                        (prevData) => [...prevData, dataSelected]
                    )
                    console.log("bagong pasok na data");
                }else{
                    settrendingNow(
                        (prevData) => [...prevData, dataSelected]
                    )  
                    console.log("add to the existing data");
                }


                /* Highly rated local storage */
                if(highlyRated.length <= 0){
                    sethighlyRated(
                        (prevData) => [...prevData, dataSelected]
                    )
                    console.log("bagong pasok na data");
                }else{
                    sethighlyRated(
                        (prevData) => [...prevData, dataSelected]
                    )  
                    console.log("add to the existing data");
                }

    }

    if(newReleasedLoading) return <>{loadingPanel}</>
    if(trendingNowLoading) return <>{loadingPanel}</>
    if(highlyRtLoading) return <>{loadingPanel}</>

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
                                    return <NewReleased key ={data.id} status={clickStatus} handleClick={panelSelected} panelDisplay = {false} dataItems={data}/>
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
                                fetchTrdgNowMovies.results.map(
                                    (data)=>{
                                    return <TvTrendingNow key={data.id} status={clickStatus} handleClick={panelSelected} panelDisplay = {false} dataItems={data}/>
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
                                fetchHgrMovies.results.map((data)=>{
                                    return <TvHighlyRated key={data.id} handleClick={panelSelected} panelDisplay = {false} dataItems={data}/>
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