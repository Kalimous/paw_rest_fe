import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import phraseimg from '../../assets/phraseimg.jpg'
import Footer from './Footer'
import './Body2.css'

interface Option{
    value: string;
    label: string;
}

const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
}

const Body2 = () =>{
    const regions: Option[] =[
        {value: 'seoul', label: '서울시'},
        {value: 'gyeonggi', label: '경기도'}
    ];
    const breeds: Option[] =[
        {value: 'dog', label: '강아지'},
        {value: 'cat', label: '고양이'},
        {value: 'etc', label: '기타 동물'}
    ]
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const banners = [
        "1",
        "2",
        "3",
        "4"
    ];
    
    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === banners.length - 1 ? 0 : prev + 1
        );
    };
    
    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? banners.length - 1 : prev - 1
        );
    };

    return(
        <div className='Body2'>
            <div className="animal-count">
                <h3 className="title">전국 유기동물 현황<br/></h3>
                <select onChange={handleChange} className="select-region">
                <option value="" disabled selected>지역별</option>
                {regions.map((region: Option) => (
                    <option key={region.value} value={region.value}>
                        {region.label}
                    </option>
                ))}
                </select>
                <select onChange={handleChange} className="select-breed">
                <option value="" disabled selected>품종</option>
                {breeds.map((breed: Option) => (
                    <option key={breed.value} value={breed.value}>
                        {breed.label}
                    </option>
                ))}
                </select>
                <button className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className='banner-container'>
                <button onClick={prevSlide} className='prev-btn'>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                <div className='banner-content'>
                    {banners[currentSlide]}
                    <div className="dots">
                    {banners.map((_, index) => (
                        <span 
                        key={index} 
                        className={`dot ${currentSlide === index ? 'active' : ''}`}
                        />
                    ))}
                    </div>
                </div>
                <button onClick={nextSlide} className='next-btn'>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>
            <div className='phrase-container'>
                <div className='phrase-content'>
                    <span>유기동물을 입양하셨다면<br/></span>
                    <h2 className='a'>예방접종</h2>
                    <span>과 </span> 
                    <h2 className='b'>건강검진</h2>
                    <span>은 필수!!!</span>      
                </div>
                <img src={phraseimg} alt='phraseimg' className='phrase-img'/>
            </div>
            <Footer/>
        </div>          
    );
};

export default Body2;