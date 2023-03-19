import React from "../img/react-framework-logo.jpg";
import Deepl from "../img/DeepL-icon.jpg";
import Plasmo from "../img/plasmo.png";
import '../css/technologies.scss'
import {Player} from "@lottiefiles/react-lottie-player";

export default function Technologies() {
    return (
        <div className="technologies">
            <div className="title">The technologies <br/>we used</div>
            <div className="technologies_list">
                <a className="circle" href='https://reactjs.org/' target="_blank" rel="noreferrer">
                    <img src={React} alt=""/>
                    <Player
                    src="https://assets9.lottiefiles.com/packages/lf20_vXUtMkIcnZ.json"
                    className="sakura"
                    loop
                    autoplay
                    speed='2'
                />
                </a>
                <a className="circle" href='https://www.deepl.com/translator' target="_blank" rel="noreferrer">
                    <img src={Deepl} alt=""/>
                    <Player
                        src="https://assets9.lottiefiles.com/packages/lf20_vXUtMkIcnZ.json"
                        className="sakura"
                        loop
                        autoplay
                        speed='2'
                    />
                </a>
                <a className="circle" href='https://www.plasmo.com/' target="_blank" rel="noreferrer">
                    <img src={Plasmo} alt=""/>
                    <Player
                        src="https://assets9.lottiefiles.com/packages/lf20_vXUtMkIcnZ.json"
                        className="sakura"
                        loop
                        autoplay
                        speed='2'
                    />
                </a>
            </div>
        </div>
    );
}