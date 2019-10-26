import React from 'react';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import Header from "./components/Header/Header"
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    // <HashRouter>
    <div className="body">
    <Header/>
      {/* {routes} */}
      <div className="listings">
      <Dashboard/>
      </div>
    </div>
      
    // </HashRouter>
  );
}

export default App;
