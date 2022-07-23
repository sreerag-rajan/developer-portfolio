import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";
import { Main, BlogPage, ProjectPage } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyADnUc4Nb6zu3P1degBPwZZdvIJKEvzyxw",
  authDomain: "my-porfolio-c5ab3.firebaseapp.com",
  projectId: "my-porfolio-c5ab3",
  storageBucket: "my-porfolio-c5ab3.appspot.com",
  messagingSenderId: "163404663166",
  appId: "1:163404663166:web:44f886ade6e26776a34b2f",
  measurementId: "G-KSZ7ZJ7RW9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const { theme } = useContext(ThemeContext);

  console.log(
    "%cDEVELOPER PORTFOLIO",
    `color:${theme.primary}; font-size:50px`
  );
  console.log(
    "%chttps://github.com/hhhrrrttt222111/developer-portfolio",
    `color:${theme.tertiary}; font-size:20px`
  );
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />

          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
