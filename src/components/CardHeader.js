import profilePicture from "../images/profile-picture.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const CardHeader = () => {
    return (
        <div className="card-header flex flex-col gap-2 text-center">
            <img src={profilePicture} alt="profile" className="w-full h-64 rounded-t-md md:rounded-tr-none" />
            <div className="flex flex-col px-6 xl:px-0">
                <h1 className="text-2xl font-semibold">Glenda Negron</h1>
                <h2 className="text-sm text-rose-400">Frontend Developer</h2>
            </div>
            
            <button className="btn mt-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:naglenda31@gmail.com">Email</a>
            </button>
        </div>
    )
}


export default CardHeader;