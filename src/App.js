
import { BrowserRouter as Router, Route} from 'react-router-dom/cjs/react-router-dom.min';

import Footer from './Components/Footer';
import TopAnime from './Components/Home/TopAnime';
import Navbar from './Components/Navbar';
import Details from './Components/Home/Details';


function App() {
  return (

  <div>


    <Router>
     



      <Navbar/>

      
        
          <Route exact path="/"> <TopAnime type="Top" filter="undefined"/></Route>
          <Route  path="/movies"> <TopAnime type="movie" filter="undefined" /></Route>
          <Route  path="/series"> <TopAnime type="tv" filter="undefined" /></Route>
          <Route  path="/popular"><TopAnime type="popular" filter="bypopularity" /></Route>
          <Route  path="/upcoming"><TopAnime type="upcoming" filter="upcoming" /></Route>
          <Route  path="/type/:dataId" component={Details} /> 
        
        <Footer />
      

    </Router>
    </div>



  );
}

export default App;
