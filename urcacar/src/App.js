import './App.css';
import 'leaflet/dist/leaflet.css'
import React from "react";
import Header from "./components/Reusable/Header";
import Footer from "./components/Reusable/Footer";
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
import {DetailTrajet} from "./components/Page/DetailTrajet";
<<<<<<< HEAD
import AddTrajet from './components/Page/AddTrajet'
=======
import MapView from "./components/Map";
>>>>>>> bf8c061541091a77ae64e87616d807d65ad2c30f


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
                    <Route path="/mesTrajets">
                        <Dashboard/>
                    </Route>
<<<<<<< HEAD
                    <Route path="/addTrajet">
                        <AddTrajet/>
=======
                    <Route path="/trajet">
                        <DetailTrajet/>
                    </Route>
                    <Route path="/AddTrajets">
                        <Dashboard/>
>>>>>>> bf8c061541091a77ae64e87616d807d65ad2c30f
                    </Route>
                    <Route exact path="/messagerie">
                        <ListeMessage/>
                    </Route>
                    <Route  path="/messagerie/id">
                        <Message/>
                    </Route>
                    <Route path="/map">
                        <MapView/>
                    </Route>
                    <Route path="/notation">
                        <Notation/>
                    </Route>
                    <Route path="/trajet">
                        <DetailTrajet/>
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
