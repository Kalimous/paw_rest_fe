import './Phrase.css'
import phraseimg from '../../assets/phraseimg.jpg'

const Phrase = () => {
    return(
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
    )
}

export default Phrase;