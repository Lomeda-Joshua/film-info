function FooterMain(){

    return(
        <footer className="footer--main">
            <div className='container'>
                <div className="row">    
                    <div className="col-3">
                        <ul>
                            <li style={{textAlign:"right"}}>
                            <img src ="../logo/film-info-icon-bar.png" style={{width:"30%"}}/>
                            <h4 style={{paddingTop:"10px"}}><b><span style = {{color:"#A45A19"}}>Film</span></b> | <span style = {{fontWeight:800}}>Info</span></h4>
                            </li>
                        </ul>
                    </div>
        
                     <div className="col-3">
                        <ul>
                            <li>
                                <h5 style = {{fontWeight:700, color:"#61dafb"}}>About</h5>
                                This project is based on React JS library. <a className="footer-links" href="#">Read more here</a>
                            </li>                            
                        </ul>
                    </div>
        
        
                    <div className="col-3">
                        <ul>
                            <h5 style = {{fontWeight:700}}>Source links</h5>
                            <li><a className="footer-links"  href= "https://react.dev/blog/2023/03/16/introducing-react-dev">React JS Library</a></li>
                            <li><a className="footer-links"  href= "https://www.themoviedb.org/">tmdb</a></li>
                        </ul>
                    </div>
        
                    <div className="col-3">
                        <ul>
                            <h5 style = {{fontWeight:700}}>Legal</h5>
                            <li><a className="footer-links" href="#">Privacy</a></li>
                        </ul>
                    </div> 
        
                </div>
            </div>
            
            <hr/>

            <div className="footer-endDetails">
                <p>React based project made @ 2023</p>
            </div>

        </footer>
    )
  }

  export default FooterMain;