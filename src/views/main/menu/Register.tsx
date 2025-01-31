import React, { useState, useEffect, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { regions, handleChange, breeds } from '../Body2'
import './Register.css'
import Header from '../Header'
import hand from '../../../assets/hand.jpg'

interface Option {
    value: string;
    label: string;
}

interface FormData {
    image?: File,
    name: string,
    breed: string,
    gender: string,
    phoneNum: string,
    lostPlace: string,
    lostDate: string,
    lostTime: string,
    reward: string,
    description: string
}

const Register: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        breed: '',
        gender: '',
        phoneNum: '',
        lostPlace: '',
        lostDate: '',
        lostTime: '',
        reward: '',
        description: ''
    })

    const year = [
        '2010년', '2011년', '2012년', '2013년', '2014년', '2015년', '2016년', '2017년',
        '2018년', '2019년', '2020년', '2021년', '2022년', '2023년', '2024년', '2025년'
    ]

    const month = [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월'
    ]

    const days = [
        '1일', '2일', '3일', '4일', '5일', '6일', '7일', '8일', '9일', '10일',
        '11일', '12일', '13일', '14일', '15일', '16일', '17일', '18일', '19일', '20일',
        '21일', '22일', '23일', '24일', '25일', '26일', '27일', '28일', '29일', '30일',
        '31일'
    ]

    const hour = [
        '00', '01', '02', '03', '04', '05', '06', '07','08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23'
    ]

    const minute = [
        '00', '01', '02', '03', '04', '05', '06', '07','08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
        '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
        '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
        '51', '52', '53', '54', '55', '56', '57', '58', '59',
    ]

    const [gender, setGender] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > window.innerHeight / 2);
    };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const{name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return(
        <div className='register-container'>
            <Header isScrolled={isScrolled}/>
            <div className='reg-body'>
                <div className='reg-side'>
                    <h1>실종동물 등록</h1>
                    <img src={hand} alt='hand' className='hand'/>
                </div>
                <div className='reg-main'>
                    <h1 className='reg-title'>동물을 찾습니다!</h1>
                    <form className='reg-form'>
                        <div className='form-grp-image'>
                            <div className='image-upload-container'>
                                <input 
                                    type='file'
                                    accept='image/*'
                                    onChange={handleImageChange}
                                    id='image-upload'
                                    style={{ display: 'none' }}
                                />                             
                                {previewUrl && (
                                    <div className='image-preview'>
                                        <img 
                                            src={previewUrl} 
                                            alt='Preview'
                                            className='preview-img'
                                        />
                                    </div>
                                )}
                                <label htmlFor='image-upload' className='image-upload-button'>
                                    파일 선택
                                </label>
                            </div>
                        </div>
                        <div className='form-grp1'>
                            <label>이름</label>
                            <input type='text' name='name' value={formData.name} onChange={handleInput}/>
                        </div>
                        <div className='form-grp2'>
                            <label>품종</label>
                            <select onChange={handleChange} className="select-breed">
                                <option value="" disabled selected>품종</option>
                                {breeds.map((breed: Option) => (
                                    <option key={breed.value} value={breed.value}>
                                        {breed.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="gender-select">
                            <label>성별</label>
                            <div 
                                className={`gender-option gender-male ${gender === 'male' ? 'selected' : ''}`}
                                onClick={() => setGender('male')}
                            >
                                <FontAwesomeIcon icon={faMars} className="gender-icon" />
                            </div>
                            <div 
                                className={`gender-option gender-female ${gender === 'female' ? 'selected' : ''}`}
                                onClick={() => setGender('female')}
                            >
                                <FontAwesomeIcon icon={faVenus} className="gender-icon" />
                            </div>
                        </div>
                        <div className='form-grp3'>
                            <label>연락처</label>
                            <input type='text' name='phoneNum' value={formData.phoneNum} onChange={handleInput}/>
                        </div>
                        <div className='form-grp4'>
                            <label>잃어버린 장소</label>
                            <select onChange={handleChange} className="select-region">
                                <option value="" disabled selected>지역</option>
                                {regions.map((region: Option) => (
                                    <option key={region.value} value={region.value}>
                                        {region.label}
                                    </option>
                                ))}
                            </select>
                            <input type='text' name='lostPlace' value={formData.lostPlace} onChange={handleInput}/>
                        </div>
                        <div className='form-grp5'>
                            <label>잃어버린 시간</label>
                            <div className="date-select">
                                <select name="year" onChange={handleInput}>
                                    <option value="" disabled selected>년도</option>
                                    {year.map((y) => (
                                        <option key={y} value={y}>{y}</option>
                                    ))}
                                </select>

                                <select name="month" onChange={handleInput}>
                                    <option value="" disabled selected>월</option>
                                    {month.map((m) => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>

                                <select name="day" onChange={handleInput}>
                                    <option value="" disabled selected>일</option>
                                    {days.map((d) => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                                </select>

                                <select name="hour" onChange={handleInput}>
                                    <option value="" disabled selected></option>
                                    {hour.map((h) => (
                                        <option key={h} value={h}>{h}</option>
                                    ))}
                                </select>
                                :
                                <select name="minute" onChange={handleInput}>
                                    <option value="" disabled selected></option>
                                    {minute.map((mt) => (
                                        <option key={mt} value={mt}>{mt}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='form-grp6'>
                            <label>사례금</label>
                            <input type='text' name='reward' value={formData.reward} onChange={handleInput}/>
                        </div>
                        <div className='form-grp7'>
                            <label>상세설명</label>
                            <input type='text' name='description' value={formData.description} onChange={handleInput}/>
                        </div>
                        <div className='form-submit'>
                            <button type="submit" className='submit-button'>
                                등록하기
                            </button>
                        </div>
                    </form>
                </div>
                
                
            </div>

        </div>
        
        
    )
}

export default Register; 