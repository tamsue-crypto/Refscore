import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AuthModal from "../components/AuthModal";
import '../styles/global.css'
import '../styles/article-page.css'
import MatchFormation from "../components/MatchFormation";
import { useParams } from "react-router-dom";
import InfoCards from "../components/InfoCards";
import Jumbotron from "../components/Jumbotron";
import MatchesList from "../components/MatchesList";
import { matches } from "../data/matches";
import MatchResult from "../components/MatchResult";
import MatchStatsCard from "../components/MatchStatsCard";
import LatestNews from "../components/LatestNews";
import RefereeAnalysis from "../components/RefereeAnalysis";

export default function MatchPage() {
    const { id } = useParams();
    const match = matches.find(m => m._id === id)

    const allPlayers = [
        ...match.home_team.players,
        ...match.away_team.players
    ];

    const [openedModal, setOpenedModal] = useState(false);
    const [screen, setScreen] = useState("login");

    const homeTeam = match.home_team.team_name;
    const awayTeam = match.away_team.team_name;
    const matchRef = match.referee.referee_name;


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
                        <InfoCards matchId={id} context={"ref"}/>
                        <MatchesList context={'match'} team={homeTeam} referee={matchRef}/>
                        <MatchesList context={'match'} team={awayTeam} referee={matchRef}/>
                    </div>

                    <div>
                        <div className="wrapper-side-info">
                            <MatchResult match={match}/>
                            <div className="result-card-container">
                                <h1>Estatísticas da Partida</h1>
                                <MatchStatsCard match={match}/>
                            </div>
                            <div className="news-infos-container">
                                <div style={{margin: '0px 0px 0px 58px'}}>
                                    <LatestNews context={'match'} awayTeam={awayTeam} homeTeam={homeTeam} match={match} referee={matchRef}/>
                                </div>
                                <div className="side">
                                    <InfoCards matchId={id} context={"motm"}/>
                                    <MatchFormation matchId={id} />
                                    {allPlayers.some(p => p.br_motm) && <InfoCards matchId={id} context={"brmotm"}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="result-card-container" style={{ marginTop: '40px' }}>
                <h1>Análises</h1>
                <RefereeAnalysis match={match} matchRef={matchRef}/>
            </div>

            <Footer/>
        </>
    );
};