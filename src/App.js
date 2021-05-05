import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNavBar from './Components/TopNavBar/TopNavBar';
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import AptaServices from './Components/AptaServices/AptaServices';
import WebDevelopment from './Components/AptaServices/WebDevelopment';
import AboutUs from './Components/About/AboutUs';
import OurWork from './Components/OurWork/OurWork';
import ContactUs from './Components/ContactUs/ContactUs';
import DigitalMarketing from './Components/AptaServices/DigitalMarketing';
import MobileDevelopment from './Components/AptaServices/MobileDevelopment';
 

function App() {
  return (
    <div className="App">
     <Router>
     <TopNavBar/>
       <Switch>
         <Route path='/' component={HomePage} />
         <Route path='/services' component={AptaServices} />
         <Route path='/web/development' component={WebDevelopment} />
         <Route path='/mobile/development' component={MobileDevelopment} />
         <Route path='/digital/marketing' component={DigitalMarketing} />
         <Route path='/about' component={AboutUs} />
         <Route path='/our/work' component={OurWork} />
         <Route path='/contact' component={ContactUs} />
       </Switch>
       <Footer/>
     </Router>
    </div>
  );
}

export default App;
