import React from 'react';
import './App.css';
import {phoneRepository} from "./repositories/PhoneRepository";
import {ApplicationDependencies} from "./models/Dependencies";
import {Phones} from "./containers/Phones";

const applicationDependencies: ApplicationDependencies = {
  phoneRepository
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Phones phoneRepository={applicationDependencies.phoneRepository}/>
    </div>
  );
};

export default App;
