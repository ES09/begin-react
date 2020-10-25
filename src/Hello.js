import React from 'react';

//함수형 컴포넌트
function Hello({color, name, isSpecial}) {
    return (
        //jsx 형태 리턴
        <div style={{ color }}>
            { isSpecial && <b>*</b> }
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name: '이름없음'
  }

export default Hello;