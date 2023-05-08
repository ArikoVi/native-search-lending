import '../css/browser.scss'
import Popup from '../img/popup.png'
import Pop from '../img/pop.png'
import EyeW from "../img/eye-w.png";
import Page from "../img/page.jpg";
import Panel from "../img/panel.jpg";
import Input from "../img/input.jpg";

export default function Browser() {
    return (
        <div className="browser">
            <div className="browser_window ">
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
                        <img src={Popup} alt="popup"/>
                    </div>
                </div>

            </div>
        </div>
    );
}
