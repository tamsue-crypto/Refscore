import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AuthModal from "../components/AuthModal";
import MatchesList from "../components/MatchesList";
import { useParams } from "react-router-dom";
import LatestNews from "../components/LatestNews";
import '../styles/global.css';
import '../styles/journalist-page.css';
import { referees } from "../data/referees";
import InfoCards from "../components/InfoCards";
import Jumbotron from "../components/Jumbotron";
import RefereeStatsTable from "../components/RefereeStats";

export default function RefereePage() {
    const { refName } = useParams();
    const referee = referees.find(j => j.name === refName)

    const[openedModal, setOpenedModal] = useState(false);
    const[screen, setScreen] = useState("login");

    const openLogin = () => {
        setOpenedModal(true);
        setScreen("login");
    };

    const closeModal = () => {
        setOpenedModal(false);
    };

    const changeToLogup = () => {
        setScreen("register");
    };

    const changeToLogin = () => {
        setScreen("login");
    };

    return(
        <>
            <NavBar onLoginClick={openLogin}/>

            {openedModal && (<AuthModal screen={screen} closeModal={closeModal} changeToLogin={changeToLogin} changeToLogup={changeToLogup}/>)}

            <div className="page-wrapper flex">
                <Jumbotron/>
                <div className="content-wrapper">
                    <div className="main-content">
                        <InfoCards ref={refName} context={"ref"}/>
                        <MatchesList context={'referee'} referee={refName}/>
                    </div>

                    <div> 
                        <RefereeStatsTable ref={refName}/>
                        <div>
                            <div>
                                <h2 style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>Notícias Recentes</h2>
                                <div className="jour-articles-container">
                                    <LatestNews context={'ref'} referee={refName} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
    );
};