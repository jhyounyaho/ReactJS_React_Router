import React, { useEffect } from 'react';

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  }

  const goHome = () => {
    history.push('/');
  }

  const replaceToHome = () => {
    history.replace('/');
  }

  useEffect(() => {
    console.log('history : ', history)
    const unblock = history.block('정말 떠나실건가요?')
    return() => {
      unblock();
    }
  }, [history]) 

  return (
      <div>
        <button onClick={goBack}>뒤로가기 (pop)</button>
        <button onClick={goHome}>홈으로 (push)</button>
        <button onClick={replaceToHome}>홈으로 (Replace)</button>
      </div>
  )
}

export default HistorySample;