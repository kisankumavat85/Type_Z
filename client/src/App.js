import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

//Pages
import Home from "./Pages/Home"
import Mobile from "./Pages/Mobile"
import Computer from "./Pages/Computer"
import Science from "./Pages/Science";
import SearchedPosts from "./Pages/SearchedPosts";
import Login from "./Pages/Login";
import Dashboard from './Pages/Dashboard'

//Components
import Nav from "./Components/Nav"
import Footer from "./Components/Footer";
import Article from './Components/Article';
import PageNotFound from './Pages/PageNotFound'
import MarkdownForm from './Pages/MarkdownForm'

//Firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from './config/firebaseConfig'

//Init Firebase
firebase.initializeApp(firebaseConfig)

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mobile" exact component={Mobile} />
            <Route path="/computer" exact component={Computer} />
            <Route path="/science" exact component={Science} />
            <Route path="/search" exact component={SearchedPosts} />
            <Route path="/login" exact component={Login} />
            <Route path="/article/:id" exact component={Article} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/dashboard/markdownform" exact component={MarkdownForm} />
            <Route path="/*" component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
