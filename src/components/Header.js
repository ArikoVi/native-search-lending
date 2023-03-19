import '../css/header.scss'
import WatchingYou from 'react-watching-you';
import Shiba from '../img/shiba.png'
import Eye from '../img/eye-s.png'
import EyeW from '../img/eye-w.png'
import PawU from '../img/paw-u.png'
import PawD from '../img/paw-d.png'
import ReactPlayer from "react-player";

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
                <div className="dog_eye dog_eye-s">
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
                {/*<video controls width="100%">
                    <source src="../img/video.webm" type="video/webm"/>
                    Sorry, your browser doesn't support embedded videos.
                </video>*/}
                <video src="video.mp4" width="100%" muted height="100%" autoPlay={true} loop/>
                {/*<ReactPlayer*/}
                {/*    url="../img/video.webm"*/}
                {/*/>*/}
            </div>
            {/*<img src={Eye} alt="eye"/>*/}`
        </div>
    );
}