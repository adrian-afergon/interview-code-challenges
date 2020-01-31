import React from 'react';
import './App.css';
import {phoneRepository} from "./repositories/PhoneRepository";
import {ApplicationDependencies} from "./models/Dependencies";

const applicationDependencies: ApplicationDependencies = {
  phoneRepository
};

const App: React.FC = () => {
  return (
    <div className="App">
    </div>
  );
}

export default App;
