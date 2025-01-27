import './Footer.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { RiKakaoTalkFill } from 'react-icons/ri';
import bone from '../../assets/bone.png'
import catpaw from '../../assets/catspaw.png'

const Footer = () => {
    return(
        <div className='Footer'>
            <img src={bone} className='img-bone' alt="bone"/>
            <div className='sns'>
                <h2>SNS</h2>
                <div className='social-icons'>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <RiKakaoTalkFill />
                </div>
            </div>
            <div className='Inquiry'>
                <h2>문의 및 신고</h2>
                <div className='contact'>
                    <FontAwesomeIcon icon={faComments} />
                    <span>010-9920-7693</span>
                </div>    
            </div>
            <img src={catpaw} alt='paws' className='catspaw'/>
        </div>
    )
}

export default Footer;