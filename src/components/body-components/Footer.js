import footer_brand from '../../assets/logos/film-info-with-branding.png';

function FooterMain(){

    return(
        <footer>

            <div class="footer-container">

                <div class="brand-container">
                    <div class="row-footer">
                        <img class="footer-brand" src={footer_brand} />
                    </div>
                </div>

                <div class="list-container">

                    <div class="row-footer" >
                        <h2>Film Info</h2>
                        <ul>
                            <li><a href="#">About the project</a></li>
                        </ul>
                    </div>

                    <div class="row-footer middle-row">
                        <h2>Source Links</h2>
                        <ul>                
                            <li><a target="_blank" href="https://react.dev/">React JS Library</a></li>
                            <li><a target="_blank" href="https://www.themoviedb.org/">tmdb</a></li>
                        </ul>
                    </div>

                    <div class="row-footer" >
                        <h2>Legal</h2>
                        <ul>
                            <li><a href="#">tmdb library</a></li>
                        </ul>
                    </div>

                </div>

            </div>

            <div class="footer-credits">
                <p>React based project @ 2023</p>
            </div>

        </footer>
    )
  
}

export default FooterMain;