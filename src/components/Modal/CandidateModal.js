import './CandidateModal.css'
import {LiaTimesSolid} from 'react-icons/lia'
import {BiSolidEnvelope} from 'react-icons/bi'
import {BsArrowRightShort, BsCheck2, BsTelephoneFill} from 'react-icons/bs'
import {PiHourglassBold} from 'react-icons/pi'
import user from '../../Assets/image.png'
import {FaAirbnb} from 'react-icons/fa'
const CandidateModal = ({togglemodal}) => {
    return ( 
        <div className="modal-background">
            <div className="candidate-modal">
                <div className="candidate-modal-inner">
                    <div className="candidate-modal-top">
                        <p>Candidate Details</p>
                        <div className="modal-close" onClick={togglemodal}>
                            <LiaTimesSolid/>
                        </div>
                    </div>
                    <div className="candidate-details">
                        <div className="candidate-details-top">
                            <img src={user}></img>
                            <p className='candidate-name'>Malaika Brown</p>
                            <p className='candidate-position'>Sr. UX Designer</p>
                        </div>
                        <div className="candidate-contact">
                            <div className="candidate-email">
                                <div className="email-icon">
                                    <BiSolidEnvelope/>
                                </div>
                                <div className="candidate-contact-inner">
                                    <p className='contact-head'>EMAIL</p>
                                    <p className='contact-body'>malaika.br@gmail.com</p>
                                </div>
                            </div>
                            <div className="candidate-phone">
                                <div className="phone-icon">
                                    <BsTelephoneFill/>
                                </div>
                                <div className="candidate-contact-inner">
                                    <p className='contact-head'>PHONE NUMBER</p>
                                    <p className='contact-body'>+11 5423-6548</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="application">
                        <p className='application-title'>Application Details</p>
                        <div className="application-steps">
                            <div className="application-step">
                                <div className="step-inner">
                                    <div className="step-complete">
                                        <BsCheck2/>
                                    </div>
                                    <div className="step-action">
                                        <p className='step-title'>Screening</p>
                                        <p className='step-date'>March 20, 2023</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="application-step">
                                <div className="step-inner">
                                    <div className="step-complete step-pending">
                                        <PiHourglassBold/>
                                    </div>
                                    <div className="step-action">
                                        <p className='step-title'>Design Challenge</p>
                                        <p className='step-date'>March 22, 2023</p>
                                    </div>
                                </div>
                                <div className="step-review">
                                    <p>Under Review</p>
                                </div>
                            </div>
                            <div className="application-step">
                                <div className="step-inner">
                                    <div className="step-complete step-undone">
                                        <p>3</p>
                                    </div>
                                    <div className="step-action">
                                        <p className='step-title-2'>Interview</p>
                                    </div>
                                </div>
                            </div>
                            <div className="application-step">
                                <div className="step-inner">
                                    <div className="step-complete step-undone">
                                        <p>4</p>
                                    </div>
                                    <div className="step-action">
                                        <p className='step-title-2'>HR Round</p>
                                    </div>
                                </div>
                            </div>
                            <div className="application-step">
                                <div className="step-inner">
                                    <div className="step-complete step-undone">
                                        <p>5</p>
                                    </div>
                                    <div className="step-action">
                                        <p className='step-title-2'>Hired</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="candidate-experience">
                        <p className='application-title'>Experience</p>
                        <div className="experiences">
                            <div className="experience">
                                <div className="experience-top">
                                    <div className="experience-top-left">
                                        <FaAirbnb/><p>AirBnb</p>
                                    </div>
                                    <div className="experience-top-right">
                                        <p>Oct ‘20 - Present</p>
                                    </div>
                                </div>
                                <div className="experience-body">
                                    <ul>
                                        <li>
                                            Led the redesign of the booking process for Airbnb's mobile app, resulting in a 30% increase in conversion rates and improved user satisfaction.
                                        </li>
                                        <li>
                                            Conducted extensive user research and usability testing to identify pain points in the search and filtering experience.
                                        </li>
                                        <li>
                                            Conducted extensive user research and usability testing to identify pain points in the search and filtering experience.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="candidate-modal-next">
                    <button>Move to Next Step <BsArrowRightShort/></button>
                </div>
            </div>
        </div>
    );
}
 
export default CandidateModal;