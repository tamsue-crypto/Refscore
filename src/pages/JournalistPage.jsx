import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AuthModal from "../components/AuthModal";
import Jumbotron from "../components/Jumbotron";
import TodayMatchesList from "../components/TodayMatchesList";
import { useParams } from "react-router-dom";
import { journalists } from "../data/journalists";
import LatestNews from "../components/LatestNews";
import '../styles/global.css';
import '../styles/journalist-page.css';
import { teams } from "../data/teams";
import RefereeAnalysis from "../components/RefereeAnalysis";

export default function JournalistPage() {
    const { id } = useParams();

    const journalist = journalists.find(j => j._id === id)

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

    const today = new Date();

    // getting day, month and year
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    // formatting to the 2 digits system
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');

    // getting everything togheter to the xx.xx.xxxx system
    const todayDate = `${formattedDay}.${formattedMonth}.${year}`;

    const favTeam = teams.find(t => t.name === journalist.favTeam)

    return(
        <>
            <NavBar onLoginClick={openLogin}/>

            {openedModal && (
                <AuthModal
                    screen={screen}
                    closeModal={closeModal}
                    changeToLogin={changeToLogin}
                    changeToLogup={changeToLogup}
                />
            )}

            <div className="page-wrapper flex">
                <Jumbotron />

                <div className="content-wrapper">
                    <div className="main-content">
                        <div className="journalist-infos-container">
                            <img src={`/images/journalists/${journalist.journalistImg}`} alt="" />
                            <div className="journalist-infos">
                                <h3>
                                    {journalist.name}
                                    {journalist.favTeam && (
                                        <img src={`/images/club_badges/${favTeam.badge}`} alt="" />
                                    )}
                                </h3>
                                <h5>
                                    {`Agenciado por ${journalist.broadcasterName}`}
                                    <img src={`/images/broadcasters/${journalist.broadcaster}`} alt="" />
                                </h5>
                            </div>
                        </div>
                        <div className="jour-articles-container">
                            <LatestNews context={'jour'} jourId={id}/>
                        </div>
                        <div style={{width: '800px'}}>
                            <h2 style={{color: 'black', textAlign: 'center', marginBottom: '15px'}}>Análises Recentes</h2>
                            <RefereeAnalysis jourId={id}/>
                        </div>
                    </div>
                    <div>
                        <TodayMatchesList day={todayDate} style={{ marginTop: '40px' }} />
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
    );
};