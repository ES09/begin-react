import React, { useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs, //기존의 input 객체 복사 : spread문법
            [name] : value
        });
    };
  
    const onReset = () => {
        setInputs({
            name : '',
            nickname : '',
        })
    };

    return (
        <div>
            <input placeholder="이름" onChange={onChange} value={name}/>
            <input placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;