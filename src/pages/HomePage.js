

export default function HomePage() {
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

                        </div>
                    </div>
                </div>

                <div className="newReleases-section">
                    <h3>Trending Now</h3>
                    <div className='container--fluid'>
                        <div className="row--data">

                        </div>
                    </div>
                </div>

                <div className='continue-section'>
                    <h3>Highly rated</h3>
                    <div className='container--fluid'>
                        <div className='row--data'>

                        </div>
                    </div>
                </div>                

            </div>
        </>
    );

}





