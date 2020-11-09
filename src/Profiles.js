import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';
import RouterHookSample from './RouterHookSample';

function Profiles() {
    return (
      <div>
        <h3>사용자 목록 Profiles</h3>
        <ul>
          <li>
            <NavLink 
              to='/profiles/jhyounyaho'
              activeStyle={{ background: 'black', color: 'white' }}
              isActive={(match, location) => {
                return true;
              }}
              activeClassName='active'
            >
              jhyounyaho
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/profiles/bigbang'
              activeStyle={{ background:'yellow', color: 'black' }}
              activeClassName='active'
            >
              bigbang
            </NavLink>
          </li>
        </ul>

        <Route path='/profiles' exact render={( match, location) => <div>사용자를 선택해주세요</div>} />
        <Route path='/profiles/:username' component={Profile} />
        <RouterHookSample />
      </div>
    )
}

export default Profiles;