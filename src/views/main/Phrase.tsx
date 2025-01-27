import './Phrase.css'
import phraseimg from '../../assets/phraseimg.jpg'

const Phrase = () => {
    return(
        <div className='phrase-container'>
            <div className='phrase-content'>
                <span>유기동물을 입양하셨다면<br/>
                    <h2>예방접종</h2>과 <h2>건강검진</h2>은 필수!!!
                </span>      
            </div>
            <img src={phraseimg} alt='phraseimg' className='phrase-img'/>
        </div>
    )
}

export default Phrase;