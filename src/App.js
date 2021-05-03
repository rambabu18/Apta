import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNavBar from './Components/TopNavBar/TopNavBar';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
 

function App() {
  return (
    <div className="App">
     <Router>
     <TopNavBar/>
       <Switch>
         <Route path='/' component={HomePage} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
