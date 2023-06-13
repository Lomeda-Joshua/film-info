/** Axios api fetching **/  
import axios from 'axios';

/** React query **/  
import {useQuery} from 'react-query';

/** panel page components **/  
import NewReleased from '../components/panel-components/tv-shows-page-panels/NewReleased';
import PopularTV from '../components/panel-components/tv-shows-page-panels/PopularTVShows';

import './styles.css';

export default function TvShows(){

    const fetchNewReleased = useQuery({ queryKey: ['upcoming-tv'], queryFn: () => axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=ffbd3a2d02fe137e41388eacf6dc463e&language=en-US&page=1').then((response)=>response.data), staleTime:1800000}
    )
    
    const fetchTrendingNow = useQuery({ queryKey: ['trending-tv'], queryFn: () => axios.get('https://api.themoviedb.org/3/tv/popular?api_key=ffbd3a2d02fe137e41388eacf6dc463e&language=en-US&page=1').then((response)=>response.data),staleTime:1800000}
    )

    const fetchHighlyRated = useQuery({ queryKey: ['toprated-tv'], queryFn: () => axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=ffbd3a2d02fe137e41388eacf6dc463e&language=en-US&page=1').then((response)=>response.data),staleTime:1800000}
    )
    
    function loadingPanel(){
        return(
            <div className="loadingPanel">
                <h2>Loading</h2>
            </div>
        )
    }

    if(fetchNewReleased.isLoading) return <>{loadingPanel}</>
    if(fetchTrendingNow.isLoading) return <>{loadingPanel}</>
    if(fetchHighlyRated.isLoading) return <>{loadingPanel}</>

    const arraySaved = []; 
    const panelSelected = (dataSelected) => {      
        arraySaved.push(dataSelected);
        localStorage.setItem("dataTvSaved",JSON.stringify(arraySaved));
    }



    return(
        <>
            <div className='body-home'>

                <div className="newReleases-section">
                    <h3>New Releases</h3>
                    <div className="container--fluid">
                        <div className="row--data">
                            {
                                fetchNewReleased.data.results.map((data)=>{
                                    return <NewReleased handleClick={panelSelected} panelDisplay = {false} dataItems={data}/>
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
                                fetchTrendingNow.data.results.map((data)=>{
                                    return <PopularTV handleClick={panelSelected} panelDisplay = {false} dataItems={data}/>
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
                                fetchHighlyRated.data.results.map((data)=>{
                                    return <NewReleased handleClick={panelSelected} panelDisplay = {false} dataItems={data}/>
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
        
    )
}