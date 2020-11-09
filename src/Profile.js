import React from 'react';
import WithRouterSample from './WithRouterSample';

const profileData = {
  jhyounyaho: {
    name: '정혜윤',
    description: 'frontend developer'
  },
  bigbang: {
    name: '빅뱅',
    description: '한국 가수'
  },
}

// Route를 사용하게 된다면 자동으로 match 받아옴 
function Profile({ match }) {
  /*
    path: profiles/:username/:id 
    url:  profiles/jhyounyaho/hi
    :username = match.params = jhyounyaho 
    :id = match.params = hi 
  */
  const { username, id } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>
  }

  return (
    <div>
      <hr />
      <h3>서브 라우트</h3>
      <h3>{username} ({profile.name})</h3>        
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  )
}

export default Profile;