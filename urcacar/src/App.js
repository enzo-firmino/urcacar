import './App.css';
import 'leaflet/dist/leaflet.css'
import React from "react";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Accueil} from "./components/Accueil";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {ListeRecherche} from "./components/ListeRecherche";


function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <ListeRecherche/>
                </Route>
                <Route path="/profil">

                </Route>
                <Route path="/notifications">
                    <Dashboard/>
                </Route>
            </Switch>
            <Footer/>
        </Router>

    </div>
  );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

export default App;
