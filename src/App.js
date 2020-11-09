import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profile from './Profile'
import Profiles from './Profiles';

function App() {
  return (
    <div>
      <h2>라우트</h2>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
        <li>
          <Link to='/profiles'>프로필 목록</Link>
        </li>
        <li>
          <Link to='/history'>히스토리 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/profiles/:username/:id' component={Profile} />
        <Route path='/profiles' component={Profiles} />
        <Route path='/history' component={HistorySample} />
        <Route render={({ location }) => <div>            
          <h2>이 페이지는 존재하지 않습니다.</h2>
          <p>location.pathname : {location.pathname}</p>
        </div>} />
      </Switch>
    </div>
  );
}

export default App;
