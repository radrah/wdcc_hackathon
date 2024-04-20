import React from 'react';
import './styling/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import WorkPage from './pages/WorkPage';
import Procrastination from './pages/Procrastination';
import AnotherPage from './pages/AnotherPage';
import About from './pages/about_us';
import Profile from './pages/profile_page';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={IndexPage} />
          <Route exact path={'/work'} component={WorkPage} />
          <Route exact path={'/procrastination'} component={Procrastination} />
          <Route exact path={'/another'} component={AnotherPage} />
          <Route exact path={'/about'} component={About}/>
          <Route exact path={'/profile'} component={Profile}/>

          {/* Default path if nothing else matches */}
          <Route path={'/'} component={IndexPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
