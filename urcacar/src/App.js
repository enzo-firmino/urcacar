import './App.css';
import 'leaflet/dist/leaflet.css'
import React from "react";
import {Header} from "./components/Reusable/Header";
import {Footer} from "./components/Reusable/Footer";
import {Accueil} from "./components/Page/Accueil";
import {Profil} from "./components/Page/Profil";
import {Notation} from "./components/Page/Notation";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {ListeRecherche} from "./components/Page/ListeRecherche";
import ListeMessage from './components/Page/ListeMessage';
import Message from './components/Page/Message';
import {DetailTrajet} from "./components/DetailTrajet";


function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
                <Switch>
                    <Route exact path="/">
                        <Accueil/>
                    </Route>
                    <Route path="/recherche">
                        <ListeRecherche/>
                    </Route>
                    <Route path="/profil">
                        <Profil/>
                    </Route>
                    <Route path="/notifications">
                        <Dashboard/>
                    </Route>
                    <Route path="/MesTrajets">
                        <Dashboard/>
                    </Route>
                    <Route path="/AddTrajets">
                        <Dashboard/>
                    </Route>
                    <Route exact path="/messagerie">
                        <ListeMessage/>
                    </Route>
                    <Route  path="/messagerie/id">
                        <Message/>
                    </Route>
                    <Route path="/notation">
                        <Notation/>
                    </Route>
                </Switch>
            <Footer/>
        </Router>

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
