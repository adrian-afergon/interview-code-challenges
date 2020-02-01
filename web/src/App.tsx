import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import { phoneRepository } from './repositories/PhoneRepository';
import { ApplicationDependencies } from './models/Dependencies';
import { Phones } from './containers/Phones';
import { PhoneDetails } from './containers/PhoneDetails';
import { Header } from './components/Header';

const applicationDependencies: ApplicationDependencies = {
  phoneRepository,
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
      <Header/>
      <section className="container">
        <Switch>
          <Route path="/(|phones)" exact={true}>
            <Phones phoneRepository={applicationDependencies.phoneRepository} />
          </Route>
          <Route path="/phones/:phoneId">
            <PhoneDetails />
          </Route>
        </Switch>
      </section>
      </Router>
    </div>
  );
};

export default App;
