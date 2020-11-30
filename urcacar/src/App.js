import './App.css';
import 'leaflet/dist/leaflet.css'
import {FormSearchTrajet} from "./components/FormSearchTrajet";
import React from "react";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <FormSearchTrajet/>
                </Route>
                <Route path="/profil">
                    <About/>
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
