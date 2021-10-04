import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

/* --------------- components --------------- */
import AboutUs from './Components/AboutUs/AboutUs'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services'
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/services">
            <Services></Services>
          </Route>

          <Route exact path="/testimonial">
            <Testimonial></Testimonial>
          </Route>

          <Route exact path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          
          <Route exact path="/contact-us">
            <ContactUs></ContactUs>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
