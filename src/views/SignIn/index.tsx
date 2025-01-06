import { useNavigate } from 'react-router-dom';
import { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';
import InputBox from '../components/InputBox';

export default function SignIn() {

    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [massage, setMassage] = useState<string>('');

    const navigate = useNavigate();

    // const signInResponse = (responseBody: ResponseBody) => {
    //     if (!responseBody) return;

    // }

    const onIdChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setId(value);
        setMassage('');
    };

    const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setPassword(value);
        setMassage('');
    };

    const onSignUpButtonClickHandler = () => {
        navigate('/sign_up');
    };

    const onSignInButtonClickHandler = () => {
        if (!id || !password) {
            setMassage('아이디와 비밀번호를 입력해주세요.');
            return;
        }
    };

    const onIdKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!passwordRef.current) return;
        passwordRef.current.focus();
    };

    const onPasswordKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        onSignInButtonClickHandler();
    };
    
  return (
    <div id='sign-in-wrapper'>
      <div id='sign-in-container'>
        <div id='sign-in-title'>
          <h1> 로그인 </h1>
        </div>
        <div id='sign-in-content-box'>
            <div className='sign-in-content-input-box'>
                <InputBox ref={idRef} type='text' title='아이디' placeholder='아이디를 입력해주세요' value={id} onChange={onIdChange} onKeyDown={onIdKeyDownHandler} />
                <InputBox ref={passwordRef} type='password' title='비밀번호' placeholder='비밀번호를 입력해주세요' value={password} onChange={onPasswordChange} isErrorMessage message={massage} onKeyDown={onPasswordKeyDownHandler} />
          </div>
          <div className='sign-in-content-button-box'>
            <div className='primary-button-lg full-width' onClick={onSignInButtonClickHandler}>{'로그인'}</div>
            <div className='text-link-lg full-width' onClick={onSignUpButtonClickHandler}>{'회원가입'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}