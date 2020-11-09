import React from 'react';
import qs from 'qs';

// 쿼리로 조회하는 방법 
function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })
  // 문자열로 읽어와지기 때문에 'true' 로 비교해야한다. 
  const detail = query.detail === 'true';

  return(
    <div>
      <h1>소개</h1>
      <p>
        이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.
      </p>
      {detail && <p>detail값이 true입니다.</p>}
    </div>
  )
}

export default About;