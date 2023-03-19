import '../css/browser.scss'
import { Player } from "@lottiefiles/react-lottie-player";
import Popup from '../img/popup.png'
import Pop from '../img/pop.png'
import Page from "../img/page.jpg";
import Panel from "../img/panel.jpg";
import Input from "../img/input.jpg";

export default function Browser() {
    return (
        <div className="browser">
            <div className="browser_title title">Easy search in any language for your browser</div>
            <div className="browser_window ">
                <div className="browser_input-desc">Enter a value <br/>in the field</div>
                <Player
                    src="https://assets7.lottiefiles.com/packages/lf20_ctyyicne.json"
                    loop
                    autoplay
                    className="browser_arrow"
                    speed='0.3'
                />
                <div className="browser_pop-desc">Click the button and <br/>the translation will be <br/>matched in the field</div>
                <Player
                    src="https://assets7.lottiefiles.com/packages/lf20_2z4qmxlj.json"
                    loop
                    autoplay
                    className="browser_arrow-pig"
                    speed='0.3'
                />
                <div className="browser_popup-desc">You can see <br/>the language <br/>of the page and <br/>browser language</div>
                <Player
                    src="https://assets5.lottiefiles.com/packages/lf20_edprXU.json"
                    loop
                    autoplay
                    className="browser_arrow-snake"
                    speed='0.3'
                />
                <div className="browser_header">
                    <img src={Page} alt="page"/>
                    <div className="browser_url">native.search</div>
                    <img src={Panel} alt="panel"/>
                </div>
                <div className="browser_page">
                    <div className="browser_input">
                        <img src={Input} alt="input"/>
                        <img src={Pop} alt="pop"/>
                    </div>
                    <div>
                        <img className="browser_popup" src={Popup} alt="popup"/>
                    </div>
                </div>

            </div>
        </div>
    );
}
