import Arina from "../img/naughty.png";
import Stepa from "../img/grinning.png";
import '../css/us.scss'
import React from "../img/react-framework-logo.jpg";
import {Player} from "@lottiefiles/react-lottie-player";

export default function Us() {
    return (
        <div className="us">
            <div className="title">Our Git</div>
            <div className="us_list">
                <a className="circle" href='https://github.com/slxnxl' target="_blank" rel="noreferrer">
                    <Player
                        src="https://assets1.lottiefiles.com/packages/lf20_imw8dd3h.json"
                        className="sakura"
                        loop
                        autoplay
                    />
                    <img src={Stepa} alt=""/>
                </a>
                <a className="circle" href='https://github.com/ArikoVi' target="_blank" rel="noreferrer">
                    <Player
                        src="https://assets1.lottiefiles.com/packages/lf20_imw8dd3h.json"
                        className="sakura"
                        loop
                        autoplay
                    />
                    <img src={Arina} alt=""/>

                </a>
            </div>
        </div>
    );
}