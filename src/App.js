import './App.css';
import AllHome from './Home/AllHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';


function App() {
  
  return (
    <div className="App">
      <h1 data-test-id='cypress-title'>StrangeXt</h1>
      <span> Text random people out there...</span>
      <AllHome />
    </div>
  );
}

export default App;
