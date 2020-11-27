
import './App.css';
import 'leaflet/dist/leaflet.css'
import {FormSearchTrajet} from "./components/FormSearchTrajet";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <FormSearchTrajet />
      <Footer/>
    </div>
  );
}

export default App;
