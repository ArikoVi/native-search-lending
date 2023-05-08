import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import './css/container.scss'
import Browser from "./components/browser";

function App() {
    return (
        <div className="container">
            <nav></nav>
            <Header/>
            <Browser/>
        </div>
    );
}

export default App;
