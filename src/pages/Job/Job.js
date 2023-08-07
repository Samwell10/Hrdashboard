import './Job.css'
import { IoMdArrowDropdown } from 'react-icons/io';
import figma from '../../Assets/figma.png'
import rocket from '../../Assets/rocket.png'
import coin from '../../Assets/coin.png'
import shield from '../../Assets/shield.png'
import Opening from '../../components/Opening/Opening';
const Job = () => {
    return ( 
        <div className="job">
            <div className="candidate-top">
                <p className="opening-text">Current Jobs</p>
                <div className="candidate-sort">
                    <p>Sort by: latest</p>
                    <IoMdArrowDropdown/>
                </div>
            </div>
            <div className="job-body">
                <div className="job-body-inner">
                    <Opening
                        image={figma}
                        title='Sr. UX Designer'
                        time="2"
                        location='Bengaluru'
                        application='45'
                        number='25'
                        experience='3'
                        border="#29C5EE"
                        background="rgba(41, 197, 238, 0.15)"
                    />
                    <Opening
                        image={rocket}
                        title='Growth Manager'
                        time="5"
                        location='Remote'
                        application='38'
                        number='10'
                        experience='2+'
                        border="#CF1A2C"
                        background="rgba(207, 26, 44, 0.15)"
                    />
                    <Opening
                        image={coin}
                        title='Financial Analyst'
                        time="10"
                        location='Mumbai'
                        application='25'
                        number='25'
                        experience='5+'
                        border="#EAB04D"
                        background="rgba(234, 176, 77, 0.20)"
                    />
                    <Opening
                        image={shield}
                        title='Security Analyst'
                        time="10"
                        location='New Delhi'
                        application='105'
                        number='45'
                        experience='3+'
                        border="#19C8A7"
                        background="rgba(25, 200, 167, 0.15)"
                    />
                      <Opening
                        image={figma}
                        title='Sr. UX Designer'
                        time="2"
                        location='Bengaluru'
                        application='45'
                        number='25'
                        experience='3'
                        border="#29C5EE"
                        background="rgba(41, 197, 238, 0.15)"
                    />
                    <Opening
                        image={rocket}
                        title='Growth Manager'
                        time="5"
                        location='Remote'
                        application='38'
                        number='10'
                        experience='2+'
                        border="#CF1A2C"
                        background="rgba(207, 26, 44, 0.15)"
                    />
                    <Opening
                        image={coin}
                        title='Financial Analyst'
                        time="10"
                        location='Mumbai'
                        application='25'
                        number='25'
                        experience='5+'
                        border="#EAB04D"
                        background="rgba(234, 176, 77, 0.20)"
                    />
                    <Opening
                        image={shield}
                        title='Security Analyst'
                        time="10"
                        location='New Delhi'
                        application='105'
                        number='45'
                        experience='3+'
                        border="#19C8A7"
                        background="rgba(25, 200, 167, 0.15)"
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Job;
