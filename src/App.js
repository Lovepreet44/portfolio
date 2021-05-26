import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";
import Portfolio from "./components/Portfolio";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/home" component={Header} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
