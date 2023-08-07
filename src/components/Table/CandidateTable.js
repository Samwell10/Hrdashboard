import './CandidateTable.css'
import image from '../../Assets/image.png' 
import {FaStar} from 'react-icons/fa'
import {MdAttachFile} from 'react-icons/md'
import { useState } from 'react'
const CandidateTable = ({togglemodal}) => {
    const [show, setShow] = useState(1);
    const handleAll = ()=>{
        setShow(1)
    }
    const handleAccepted = ()=>{
        setShow(2)
    }
    const handleRejected = ()=>{
        setShow(3)
    }
    return ( 
        <div className="candidatetable">
            <div className="table-top">
                <p className={show === 1 ? `active`: ''} onClick={handleAll}>All</p>
                <p className={show === 2 ? `active`: ''} onClick={handleAccepted}>Accepted</p>
                <p className={show === 3 ? `active`: ''} onClick={handleRejected}>Rejected</p>
            </div>
            <div className="tables">
                <table cellSpacing="0" cellPadding='0'>
                    <thead>
                        <tr>
                            <th>CANDIDATE NAME</th>
                            <th>RATING</th>
                            <th>STAGES</th>
                            <th>APPLIED ROLE</th>
                            <th>APPLICATION DATE</th>
                            <th>ATTACHMENTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={togglemodal}>
                            <td>
                                <div className="table-content">
                                    <img src={image}></img>
                                    <p>Charlie Kristen</p>
                                </div>
                            </td>
                            <td>
                                <div className="table-content">
                                    <div className="star">
                                        <FaStar/>
                                    </div>
                                    <p>4.0</p>
                                </div>
                                
                            </td>
                            <td>Design Challenge</td>
                            <td>Sr. UX Designer</td>
                            <td>12/02/23</td>
                            <td>
                                <div className="table-content">
                                    <MdAttachFile/>
                                    <p>3 files</p>
                                </div>
                         
                            </td>
                        </tr>
                        <tr onClick={togglemodal}>
                            <td>
                                <div className="table-content">
                                    <img src={image}></img>
                                    <p>Charlie Kristen</p>
                                </div>
                            </td>
                            <td>
                                <div className="table-content">
                                    <div className="star">
                                        <FaStar/>
                                    </div>
                                    <p>4.0</p>
                                </div>
                                
                            </td>
                            <td>Design Challenge</td>
                            <td>Sr. UX Designer</td>
                            <td>12/02/23</td>
                            <td>
                                <div className="table-content">
                                    <MdAttachFile/>
                                    <p>3 files</p>
                                </div>
                         
                            </td>
                        </tr>
                        <tr onClick={togglemodal}>
                            <td>
                                <div className="table-content">
                                    <img src={image}></img>
                                    <p>Charlie Kristen</p>
                                </div>
                            </td>
                            <td>
                                <div className="table-content">
                                    <div className="star">
                                        <FaStar/>
                                    </div>
                                    <p>4.0</p>
                                </div>
                                
                            </td>
                            <td>Design Challenge</td>
                            <td>Sr. UX Designer</td>
                            <td>12/02/23</td>
                            <td>
                                <div className="table-content">
                                    <MdAttachFile/>
                                    <p>3 files</p>
                                </div>
                         
                            </td>
                        </tr>
                        <tr onClick={togglemodal}>
                            <td>
                                <div className="table-content">
                                    <img src={image}></img>
                                    <p>Charlie Kristen</p>
                                </div>
                            </td>
                            <td>
                                <div className="table-content">
                                    <div className="star">
                                        <FaStar/>
                                    </div>
                                    <p>4.0</p>
                                </div>
                                
                            </td>
                            <td>Design Challenge</td>
                            <td>Sr. UX Designer</td>
                            <td>12/02/23</td>
                            <td>
                                <div className="table-content">
                                    <MdAttachFile/>
                                    <p>3 files</p>
                                </div>
                         
                            </td>
                        </tr>
                        <tr onClick={togglemodal}>
                            <td>
                                <div className="table-content">
                                    <img src={image}></img>
                                    <p>Charlie Kristen</p>
                                </div>
                            </td>
                            <td>
                                <div className="table-content">
                                    <div className="star">
                                        <FaStar/>
                                    </div>
                                    <p>4.0</p>
                                </div>
                                
                            </td>
                            <td>Design Challenge</td>
                            <td>Sr. UX Designer</td>
                            <td>12/02/23</td>
                            <td>
                                <div className="table-content">
                                    <MdAttachFile/>
                                    <p>3 files</p>
                                </div>
                         
                            </td>
                        </tr>
                        <tr onClick={togglemodal}>
                            <td>
                                <div className="table-content">
                                    <img src={image}></img>
                                    <p>Charlie Kristen</p>
                                </div>
                            </td>
                            <td>
                                <div className="table-content">
                                    <div className="star">
                                        <FaStar/>
                                    </div>
                                    <p>4.0</p>
                                </div>
                                
                            </td>
                            <td>Design Challenge</td>
                            <td>Sr. UX Designer</td>
                            <td>12/02/23</td>
                            <td>
                                <div className="table-content">
                                    <MdAttachFile/>
                                    <p>3 files</p>
                                </div>
                         
                            </td>
                        </tr>
                        <tr onClick={togglemodal}>
                            <td>
                                <div className="table-content">
                                    <img src={image}></img>
                                    <p>Charlie Kristen</p>
                                </div>
                            </td>
                            <td>
                                <div className="table-content">
                                    <div className="star">
                                        <FaStar/>
                                    </div>
                                    <p>4.0</p>
                                </div>
                                
                            </td>
                            <td>Design Challenge</td>
                            <td>Sr. UX Designer</td>
                            <td>12/02/23</td>
                            <td>
                                <div className="table-content">
                                    <MdAttachFile/>
                                    <p>3 files</p>
                                </div>
                         
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default CandidateTable;