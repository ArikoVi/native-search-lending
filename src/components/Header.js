import '../css/header.scss'
import WatchingYou, {useWatchingYou} from 'react-watching-you';
import Shiba from '../img/shiba.png'
import Eye from '../img/eye-s.png'
import EyeW from '../img/eye-w.png'
import PawU from '../img/paw-u.png'
import PawD from '../img/paw-d.png'

export default function Header() {
    const watchingYouOptions = {power: 10, movable: true, rotatable: true, active: true};

    return (
        <div className="header">
            <div className="header_title">
                Native
                search
            </div>
            <div className="header_description">
                Awesome description about our wonderful extension
            </div>
            <div className="dog">
                <img className="dog_shiba" src={Shiba} alt="shiba"/>
                <div className="dog_eye">
                    <img src={EyeW} alt="eye-w"/>
                    <img src={EyeW} alt="eye-w"/>
                </div>
                <div className="dog_eye">
                    <WatchingYou {...watchingYouOptions}>
                        <img src={Eye} alt="eye"/>
                    </WatchingYou>
                    <WatchingYou {...watchingYouOptions}>
                        <img src={Eye} alt="eye"/>
                    </WatchingYou>
                </div>
                <div className="dog_paws">
                    <img src={PawU} alt="paw"/>
                    <img src={PawD} alt="paw"/>
                </div>
            </div>
            <div className="presentation">

            </div>
        </div>
    );
}