import profilePic from '../../assets/images/profile-pic.jpeg';
import './candidatecard.css';
import CandidateBtns from '../candidateBtns/candidateBtns';
import { SiV } from 'react-icons/si';

export default function CandidateCard() {

    return (
            <div>
        <div className='container'>
            <div className='img-container'>
                <img src={profilePic} alt="me" />
            </div>
            <div className='info-container'>
                <h2>Bryce Berczik (berczikbryce)</h2>
                <p>Location: Texas, US</p>
                <p>Email: berczikbryce@gmail.com</p>
                <p>Company: None.</p>
                <p>Bio: I love to sit down with a cup of green tea and create useful and efficient applications for others to use.</p>
            </div>
        </div>
        <CandidateBtns />
        </div>
    );
}
