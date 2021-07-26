import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';

import Weather from './components/weather/weather';
import WeatherChart from './components/weatherChart/weatherChart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Weather/>  } />
        <Route exact path="/details/:id" render={() => <WeatherChart/>} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
