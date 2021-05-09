import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNavBar from './Components/TopNavBar/TopNavBar';
import { HashRouter as Router, Switch, Route, Link, Redirect, useHistory} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import AptaServices from './Components/AptaServices/AptaServices';
import WebDevelopment from './Components/AptaServices/WebDevelopment';
import AboutUs from './Components/About/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import DigitalMarketing from './Components/AptaServices/DigitalMarketing';
import MobileDevelopment from './Components/AptaServices/MobileDevelopment';
import OurTeam from './Components/OurTeam/OurTeam';
 

function App() {
  const history = useHistory();
  return (
    <div className="App">
     <Router history={history} basename='/' >
     <TopNavBar/>
       <Switch>
         <Route exact path='/' component={HomePage} />
         <Route exact path='/services' component={AptaServices} />
         <Route exact path='/web/development' component={WebDevelopment} />
         <Route exact path='/mobile/development' component={MobileDevelopment} />
         <Route exact path='/digital/marketing' component={DigitalMarketing} />
         <Route exact path='/about' component={AboutUs} />
         <Route exact path='/our/work' component={OurTeam} />
         <Route exact path='/contact' component={ContactUs} />
         <Redirect from="*" to="/" />
       </Switch>
       <Footer/>
     </Router>
    </div>
  );
}

export default App;
