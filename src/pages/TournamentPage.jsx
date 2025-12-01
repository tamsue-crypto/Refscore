import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AuthModal from "../components/AuthModal";
import '../styles/global.css'
import '../styles/article-page.css'
import '../styles/tournament-page.css'
import TodayMatchesList from "../components/TodayMatchesList";
import { Link, useParams } from "react-router-dom";
import { referees } from "../data/referees";
import { championships } from "../data/championships";
import Jumbotron from "../components/Jumbotron";

export default function TournamentPage() {
    const[openedModal, setOpenedModal] = useState(false);

    const openLogin = () => {
        setOpenedModal(true);
    };

    const closeModal = () => {
        setOpenedModal(false);
    };

    function getRatingClass(rating) {
        if (rating <= 5.0) return 'taxes';
        if (rating <= 6.4) return 'bad';
        if (rating <= 6.9) return 'average';
        if (rating <= 7.9) return 'good';
        if (rating <= 8.9) return 'awesome';
        return 'perfect';
    }

    //pegar o nome da competição em questão
    const { championshipId } = useParams()
    const championship = championships.find(n => n.id === championshipId)
    
    //função para padronizar textos
    function normalize(str) {
        return str.toLowerCase().trim().replace(/\s+/g, " ");
    }

    //pegar temp mais recente
    function getLatestSeason(ref) {
        return [...ref.stats].sort((a, b) => {
            const yearA = parseInt(a.season.split("/")[0]);
            const yearB = parseInt(b.season.split("/")[0]);
            return yearB - yearA; // mais novo primeiro
        })[0];
    }


    const refereesInChampionship = referees
        .map(ref => {
            // temporada mais nova
            const latestSeason = getLatestSeason(ref);

            if (!latestSeason) return null;

            // pegar apenas competições dessa temporada
            const comps = latestSeason.competitions;

            const comp = comps.find(c =>
                normalize(c.competition_name) === normalize(championship.name)
            );

            if (!comp) return null;

            return {
                ...ref,
                compStats: comp,
                season: latestSeason.season
            };
        }).filter(Boolean);

    //criar o top3 da estatistica
    function getTop3(refs, statKey, highestWins = true) {
        return [...refs]
            .sort((a, b) =>
                highestWins
                    ? b.compStats[statKey] - a.compStats[statKey] // maior é melhor
                    : a.compStats[statKey] - b.compStats[statKey] // menor é melhor
            ).slice(0, 3);
    }

    const topPenalties = getTop3(refereesInChampionship, "penalty");
    const topAvgScore = getTop3(refereesInChampionship, "average_score");
    const topRedCards = getTop3(refereesInChampionship, "red_card");
    const topYellowCards = getTop3(refereesInChampionship, "yellow_card");

    return(
        <>
            <NavBar onLoginClick={openLogin}/>

            {openedModal && (<AuthModal closeModal={closeModal}/>)}

            <section className="page-wrapper flex">
                <Jumbotron/>
                
                <div className="content-wrapper">
                    <div>
                        <h2 style={{textAlign: "center", marginBottom: "12px"}}>Melhores Árbitros da Competição</h2>
                        <div className="highest-scores-container">
                            {topAvgScore.map((ref) => (
                                <div key={ref._id} className="comp-ref-card scores">
                                    <Link to={`/referee/${ref.name}`}>
                                        <img src={process.env.PUBLIC_URL + `/${ref.photo}`} alt="" className="ref-pic" />
                                    </Link>
                                    <div className="comp-ref-card-info scores">
                                        <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                        <Link to={`/referee/${ref.name}`}><h4>{ref.name}</h4></Link>
                                        <div className={`avg-rating ${getRatingClass(ref.compStats.average_score)}`} style={{transform: 'scale(0.6)', padding: '5px'}}>
                                            {ref.compStats.average_score}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
};