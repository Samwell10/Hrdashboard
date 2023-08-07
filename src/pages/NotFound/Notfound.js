import LottieAnimation from "../../Lotties";
import notfound from '../../Assets/4044.json'
import './Notfound.css'
const Notfound = () => {
    return ( 
        <div className="notfound">
            <div className="anim">
            <LottieAnimation data={notfound} />
            </div>
            
            <p>Page Not Found</p>
        </div>
    );
}
 
export default Notfound;