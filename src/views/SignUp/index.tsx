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

    const signUpButtonClickHandler = id && password && passwordCheck && name && email && certificationNumber ? 'primary-button-lg' : 'disabled-button-lg';

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
    
    const onIdKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == 'Enter') return;
        onIdCheckButtonClickHandler();
    };

    const onIdCheckButtonClickHandler = () => {
        if (!id) return;
        
        if (id.length < 4) {
            setIsIdError(true);
            setIdMessage('아이디는 4자리 이상이어야 합니다.');
            return;
        }
        setIsIdCheck(true);
        // API 호출 로직은 나중에 추가
    };

    return (
        <div id='sign-up-wrapper'>
            <div className='sign-up-container'>
                <div className='sign-up-title'>{'회원가입'}</div>
                <div className='sign-up-content-divaider'></div>
                <div className='sign-up-content-input-box'>
                    <InputBox ref={idRef} title='아이디' placeholder='아이디를 입력해주세요' type='text' value={id} onChange={onIdChangeHandler} isErrorMessage={isIdError} message={idMessage} buttonTitle='중복확인' onButtonClick={onIdCheckButtonClickHandler} onKeyDown={onIdKeyDownHandler} /> 
                </div>
            </div>
        </div>
    )
}