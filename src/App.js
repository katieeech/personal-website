import "./App.css";
import Navbar from "./Component/Navbar";
// import Home from './Component/Home'
import Intro from "./Component/Intro";
import About from "./Component/About";
import Work from "./Component/Work";
import Studio from "./Component/Studio";
import Archive from "./Component/Archive";
import Insa from "./Component/Insa";
import ODBD from "./Component/ODBD";
import TransparentAtelier from "./Component/TransparentAtelier";
import HummingEffect from "./Component/HummingEffect";
import OnStage from "./Component/OnStage";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      {/* <Route exact path="/" render={(routerProps) => <Home {...routerProps} />} /> */}
      <Route
        exact
        path="/"
        render={(routerProps) => <Intro {...routerProps} />}
      />
      <Route
        exact
        path="/about"
        render={(routerProps) => <About {...routerProps} />}
      />
      <Route
        exact
        path="/work"
        render={(routerProps) => <Work {...routerProps} />}
      />
      <Route
        exact
        path="/studio"
        render={(routerProps) => <Studio {...routerProps} />}
      />
      <Route
        exact
        path="/archive"
        render={(routerProps) => <Archive {...routerProps} />}
      />
      <Route
        exact
        path="/work/insa"
        render={(routerProps) => <Insa {...routerProps} />}
      />
      <Route
        exact
        path="/work/odbd"
        render={(routerProps) => <ODBD {...routerProps} />}
      />
      <Route
        exact
        path="/work/transparent-atelier"
        render={(routerProps) => <TransparentAtelier {...routerProps} />}
      />
      <Route
        exact
        path="/work/on-stage"
        render={(routerProps) => <OnStage {...routerProps} />}
      />
      <Route
        exact
        path="/work/humming-effect"
        render={(routerProps) => <HummingEffect {...routerProps} />}
      />
    </Router>
  );
}

export default App;
