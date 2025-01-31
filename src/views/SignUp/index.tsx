import InputBox from "../../components/InputBox";
import { useState, useRef, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {

    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordCheckRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const certificationNumberRef = useRef<HTMLInputElement>(null);

    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordCheck, setPasswordCheck] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [certificationNumber, setCertificationNumber] = useState<string>('');

    const [isIdError, setIsIdError] = useState<boolean>(false);
    const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
    const [isPasswordCheckError, setIsPasswordCheckError] = useState<boolean>(false);
    const [isNameError, setIsNameError] = useState<boolean>(false);
    const [isEmailError, setIsEmailError] = useState<boolean>(false);
    const [isCertificationNumberError, setIsCertificationNumberError] = useState<boolean>(false);

    const [idMessage, setIdMessage] = useState<string>('');
    const [passwordMessage, setPasswordMessage] = useState<string>('');
    const [passwordCheckMessage, setPasswordCheckMessage] = useState<string>('');
    const [nameMessage, setNameMessage] = useState<string>('');
    const [emailMessage, setEmailMessage] = useState<string>('');
    const [certificationNumberMessage, setCertificationNumberMessage] = useState<string>('');

    const [isIdCheck, setIsIdCheck] = useState<boolean>(false);
    const [isCertificationCheck, setIsCertificationCheck] = useState<boolean>(false);

    const signUpButtonClass = id && password && passwordCheck && name && email && certificationNumber ? 'primary-button-lg' : 'disabled-button-lg';

    const emailPattern = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,13}$/;

    const navigate = useNavigate();

    

    const onNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setName(value);
        setNameMessage('');
    };
    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setId(value);
        setIdMessage('');
        setIsIdCheck(false);
    };
    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setPassword(value);
        setPasswordMessage('');
    };
    const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setPasswordCheck(value);
        setPasswordCheckMessage('');
    };
    const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setEmail(value);
        setEmailMessage('');
    };
    const onCertificationNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setCertificationNumber(value);
        setCertificationNumberMessage('');
    };
    // const onIdButtonClickHandler = () => {
    //     if (!id) return;
    //     const requestBody: IdCheckRequestDto = {id};
    //     idChekRequest(reqeustBody).then(idCheckResponse);
    // };

    const onEmailClickHandler = () => {
        if (!id || !email) return;

        const checkedEmail = emailPattern.test(email);
        if (!checkedEmail) {
            setIsEmailError(true);
            setEmailMessage('이메일 형식이 올바르지 않습니다.');
            return;
        }
    };
    const onCertificationNumberButtonClickHandler = () => {
        if (!id || !email || !certificationNumber) return;
        // const requestBody: CertificationNumberRequestDto = {id, email, certificationNumber};
        // checkCertificationRequest(requestBody).then(checkCertificationResponse);
    };
    const onSignUpButtonClickHandler = () => {
        if (!name ||!id || !password || !passwordCheck || !email || !certificationNumber) return;
        if (!isIdCheck) {
            alert('아이디 중복확인을 해주세요.');
            return;
        }
        const checkdPassword = passwordPattern.test(password);
        if (!checkdPassword) {
            setIsPasswordError(true);
            setPasswordMessage('비밀번호 형식이 올바르지 않습니다.');
            return;
        }
        if (password !== passwordCheck) {
            setPasswordCheckMessage('비밀번호가 일치하지 않습니다.');
            return;
        }
        if (!isCertificationCheck) {
            alert('이메일 인증을 해주세요.');
            return;
        }
        // const requestBody: SignUpRequestDto = {name, id, password, email, certificationNumber};
        // signUpRequest(requestBody).then(signUpResponse);
    };
    
    const onIdButtonClickHandler = () => {
        if (!id) return;
        // const request: IdCheckRequestDto = { id };

        // idCheckRequest(requestBody).then(idCheckResponse);
    };
    const onNameKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!idRef.current) return;
        idRef.current.focus();
    };
    const onIdKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        onIdButtonClickHandler();
    };
    const onPasswordKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!passwordCheckRef.current) return;
        passwordCheckRef.current.focus();
    };
    const onPasswordCheckKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!emailRef.current) return;
        emailRef.current.focus();
    };
    const onEmailKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        // onEmailButtonClickHandler();
    };
    const onCertificationNumberKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
    };

    
    
    return (
        <div id='sign-up-wrapper'>
            <div className='sign-up-container'>
                <div className='sign-up-title'>{'회원가입'}</div>
                <div className='sign-up-content-divaider'></div>
                <div className='sign-up-content-input-box'>
                    <InputBox ref={nameRef} title='이름' placeholder='이름' type='text' value={name} onChange={onNameChangeHandler} isErrorMessage={isNameError} message={nameMessage} onKeyDown={onNameKeyDownHandler} />
                    <InputBox ref={idRef} title='아이디' placeholder='아이디' type='text' value={id} onChange={onIdChangeHandler} isErrorMessage={isIdError} message={idMessage} buttonTitle='중복확인' onButtonClick={onIdButtonClickHandler} onKeyDown={onIdKeyDownHandler} /> 
                    <InputBox ref={passwordRef} title='비밀번호' placeholder='비밀번호' type='password' value={password} onChange={onPasswordChangeHandler} isErrorMessage={isPasswordError} message={passwordMessage} onKeyDown={onPasswordKeyDownHandler}/>
                    <InputBox ref={passwordCheck} title='비밀번호 확인' placeholder='비밀번호 확인' type='password' value={passwordCheck} onChange={onPasswordChangeHandler} isErrorMessage={isPasswordCheckError} message={passwordCheckMessage} onKeyDown={onPasswordCheckKeyDownHandler} />
                    <InputBox ref={emailRef} title='이메일' placeholder='이메일' type='text' value={email} onChange={onEmailChangeHandler} isErrorMessage={isEmailError} message={emailMessage} buttonTitle='이메일 인증'  onButtonClick={onEmailClickHandler} onKeyDown={onEmailKeyDownHandler} />
                    <InputBox ref={certificationNumberRef} title='인증번호' placeholder='인증번호' type='text' value={certificationNumber} onChange={onCertificationNumberChangeHandler} isErrorMessage={isCertificationNumberError} message={certificationNumberMessage} buttonTitle='인증 확인' onButtonClick={onCertificationNumberButtonClickHandler} onKeyDown={onCertificationNumberKeyDownHandler} />
                </div>
                <div className='sign-up-content-button-box'>
                    <div className={`${signUpButtonClass} full-width`} onClick={onSignUpButtonClickHandler}>{'회원가입'}</div>
                    <div className='text-link-lg full-width' >{'로그인'}</div>
                </div>
            </div>
        </div>
    )
}