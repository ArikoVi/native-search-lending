import './App.css';
import Header from "./components/Header";
import './css/container.scss'
import Browser from "./components/browser";
import {Player} from "@lottiefiles/react-lottie-player";
import Technologies from "./components/Tehnologies";
import Us from "./components/Us";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container">
            <nav></nav>
            <Header/>
            <Browser/>
            <Technologies/>
            <Us/>
            {/*<Player
                src="https://assets7.lottiefiles.com/packages/lf20_wbhsa1lf.json"
                className="dogs"
                loop
                autoplay
            />*/}
            <Footer/>
        </div>
    );
}

export default App;
