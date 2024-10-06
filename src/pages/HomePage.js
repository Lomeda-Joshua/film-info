import {useState} from 'react';
import hero_brand from '../assets/logos/film-info-icon-bar.png'

/** Axios api fetching **/  
import axios from 'axios';

/** React query **/  
import {useQuery} from '@tanstack/react-query';

/** panel page component **/  
import CardComponent from '../components/panel-components/CardComponent';

import './pages_styles.css';

const fetchNewReleased = () => {
    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=ffbd3a2d02fe137e41388eacf6dc463e&language=en-US&page=1').then((response)=>response.data)
}

const fetchTrendingNow = () => {
    return axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=ffbd3a2d02fe137e41388eacf6dc463e').then((response)=>response.data)
}
const fetchHighlyRated = () => {
    return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ffbd3a2d02fe137e41388eacf6dc463e&language=en-US&page=1').then((response)=>response.data)
}


function HomePage() {

    const {isLoading:newReleasedLoading ,data:fetchNewRlsdMovies} = useQuery({ queryKey: ['upcoming'], queryFn: fetchNewReleased, staleTime:1800000})
    const {isLoading:trendingNowLoading ,data:fetchTrdgNowMovies} = useQuery({ queryKey: ['trending'], queryFn: fetchTrendingNow ,staleTime:1800000})
    const {isLoading:highlyRtLoading, data:fetchHgrMovies} = useQuery({ queryKey: ['toprated'], queryFn: fetchHighlyRated ,staleTime:1800000})

    const [newReleased,setnewReleased] = useState([]);
    const [trendingNow,settrendingNow] = useState([]);
    const [highlyRated,sethighlyRated] = useState([]);

    localStorage.setItem("data-saved0",JSON.stringify(newReleased));
    localStorage.setItem("data-saved1",JSON.stringify(trendingNow));
    localStorage.setItem("data-saved2",JSON.stringify(highlyRated));


    const [clickStatus,setclickStatus] = useState(false);


    const panelSelectedNewReleased = (dataSelected1) => { 

        setclickStatus(
            prevStatus => !prevStatus
        )
    
        /* New Released local storage */
        if(newReleased.length <= 0){
            setnewReleased(
                (prevData) => [...prevData,dataSelected1]
            )
            alert("New released film title added to saved list");
        }else{
            setnewReleased(
                (prevData) => [...prevData,dataSelected1]
            )             
        }
    }

    const panelSelectedTrendingNow = (dataSelected2) => {
        setclickStatus(
            prevStatus => !prevStatus
        )

        /* trending now local storage */
        if(trendingNow.length <= 0){
            settrendingNow(
                (prevData) => [...prevData,dataSelected2]
            )

            alert("Trending now film title added to saved list");
            
        }else{
            settrendingNow(
                (prevData) => [...prevData,dataSelected2 ]
            )  
            
        }
    }

    const panelSelectedHighlyRated = (dataSelected3) => {
        setclickStatus(
            prevStatus => !prevStatus
        )

        /* Highly rated local storage */
        if(highlyRated.length <= 0){
            sethighlyRated(
                (prevData) => [...prevData,dataSelected3 ]
            )
            alert("Highly rated film title added to saved list");
        }else{
            sethighlyRated(
                (prevData) => [...prevData,dataSelected3 ]
            )  
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

            <div class="background-layout">
                <div class="background-color"></div>
            </div>


            <div className='body-home'>

                <div class="hero-section">
                    <img src={hero_brand} />
                    <h2>browse and save your next film</h2>
                    <input type="text" placeholder="enter title"/>
                </div>


                <div class="selection-carousel">

                        <div className="newReleases-section">

                                <div class="subhead-container">
                                    <h1>new release</h1>
                                    <button class="view-button">view all</button>
                                </div>

                                <div className="container--fluid">
                                        <div className="row--data">
                                            {
                                                fetchNewRlsdMovies.results.map(
                                                    (data)=>{
                                                    return <CardComponent key ={data.id} status={clickStatus} handleClick={panelSelectedNewReleased} panelDisplay = {false} dataItems={data}/>
                                                })
                                            }
                                        </div>
                                </div>
                        </div>

                        <div className="newReleases-section">
                            <div class="subhead-container">
                                <h1>trending now</h1>
                                <button class="view-button">view all</button>
                            </div>

                            <div className='container--fluid'>
                                <div className="row--data">
                                    {
                                        fetchTrdgNowMovies.results.map(
                                            (data)=>{
                                            return <CardComponent key={data.id}status={clickStatus}  handleClick={panelSelectedTrendingNow} panelDisplay = {false} dataItems={data}/>
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='continue-section'>
                            <div class="subhead-container">
                                    <h1>highly rated</h1>
                                    <button class="view-button">view all</button>
                            </div>

                            <div className='container--fluid'>
                                <div className='row--data'>
                                    {
                                        fetchHgrMovies.results.map((data)=>{
                                            return <CardComponent key={data.id} status={clickStatus} handleClick={panelSelectedHighlyRated} panelDisplay = {false} dataItems={data}/>
                                        })
                                    }
                                </div>
                            </div>
                        </div>     

                </div>

                               

            </div>

        </>
    );

}

export default HomePage;





