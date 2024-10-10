import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import WeatherData from './WeatherData';
// import Passwordgener from './Passwordgener';
import Counter from './redux/features/counter/Counter'
function App() {
  return (
    <div className="App">
      {/* <WeatherData/>  */}
     {/* <Passwordgener/>  */}
     <Counter/>
    </div>
  );
}

export default App;
