import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Banner.css'

const Banner = () => {
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
    )
}

export default Banner;