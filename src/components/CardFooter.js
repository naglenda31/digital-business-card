import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CardFooter = () => {
    return (
        <div className="card-footer bg-rose-300 py-3 flex gap-2 justify-center items-center rounded-b-md">
            <a href="https://github.com/naglenda31/" className="footer-icon">
                <FontAwesomeIcon icon={faGithubSquare} className="footer-icon"/>    
            </a>
            <a href="https://www.linkedin.com/in/naglenda31" className="footer-icon">
                <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
            </a>
        </div>
    )
}


export default CardFooter;