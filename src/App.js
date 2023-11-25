import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
  <>
  <Router>
    <Navbar/>
    <Switch>
          <Route exact path='/'><Home/></Route>
          <Route  path='/about'><About/></Route>
          <Route  path='/contact'><Contact/></Route>
    </Switch>   
    </Router>
    <Footer/>
  </>
    
  );
}

export default App;
