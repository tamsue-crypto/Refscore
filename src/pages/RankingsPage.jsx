import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";
import "../styles/global.css"
import "../styles/match-formatting.css"
import { referees } from "../data/referees";
import "../styles/refs-page.css"

export default function RankingsPage() {
    const [openedModal, setOpenedModal] = useState(false);

    const openLogin = () => {
        setOpenedModal(true);
    };

    const closeModal = () => {
        setOpenedModal(false);
    };

    const filteredReferees = referees.map(ref => {
        const stats2025 = ref.stats?.find(s => s.season === "2025/26");

        if (!stats2025) return null;

        let totalAmarelos = 0;
        let totalVermelhos = 0;
        let totalPenaltis = 0;
        let totalMatches = 0;
        let somaNotas = 0;
        let qtdNotas = 0;

        stats2025.competitions.forEach(comp => {
            totalAmarelos += comp.yellow_card || 0;
            totalVermelhos += (comp.red_card || 0) + (comp.second_yellow_card || 0);
            totalPenaltis += comp.penalty || 0;
            totalMatches += comp.matches || 0;
            somaNotas += comp.average_score || 0;
            qtdNotas++;
        });

        const mediaGeralNotas = qtdNotas > 0 ? (somaNotas / qtdNotas).toFixed(2) : 0;
        const mediaGeralAmarelos = totalAmarelos > 0 ? (totalAmarelos / totalMatches).toFixed(1) : 0;
        const mediaGeralVermelhos = totalVermelhos > 0 ? (totalVermelhos / totalMatches).toFixed(1) : 0;
        const mediaGeralPenaltis = totalPenaltis > 0 ? (totalPenaltis / totalMatches).toFixed(1) : 0;

        return {
            name: ref.name,
            photo: ref.photo,
            nationality: ref.nationality,
            amarelos: totalAmarelos,
            avgAmarelo: mediaGeralAmarelos,
            vermelhos: totalVermelhos,
            avgVermelho: mediaGeralVermelhos,
            penaltis: totalPenaltis,
            avgPenalti: mediaGeralPenaltis,
            matches: totalMatches,
            mediaNotas: mediaGeralNotas,
            firstName: ref.first_name,
            secondName: ref.second_name
        };
    }).filter(Boolean);

    const rankMediaNotas = [...filteredReferees]
        .sort((a, b) => b.mediaNotas - a.mediaNotas)
        .slice(0, 10);

    const rankAmarelos = [...filteredReferees]
        .sort((a, b) => b.amarelos - a.amarelos)
        .slice(0, 10);

    const rankMediaAmarelos = [...filteredReferees]
        .sort((a, b) => b.avgAmarelo - a.avgAmarelo)
        .slice(0, 10);

    const rankVermelhos = [...filteredReferees]
        .sort((a, b) => b.vermelhos - a.vermelhos)
        .slice(0, 10);
    
    const rankMediaVermelhos = [...filteredReferees]
        .sort((a, b) => b.avgVermelho - a.avgVermelho)
        .slice(0, 10);
    
    const rankPenaltis = [...filteredReferees]
        .sort((a, b) => b.penaltis - a.penaltis)
        .slice(0, 10);

    const rankMediaPenaltis = [...filteredReferees]
        .sort((a, b) => b.avgPenalti - a.avgPenalti)
        .slice(0, 10);
    
    const rankPartidas = [...filteredReferees]
        .sort((a, b) => b.matches - a.matches)
        .slice(0, 10);

    console.log(rankMediaNotas)

    return (
        <>
            <NavBar onLoginClick={openLogin}/>

            {openedModal && (<AuthModal closeModal={closeModal}/>)}

            <div style={{display: "flex", gap: "20px", flexWrap: "wrap", margin: "20px auto", width: "100%", justifyContent: "center"}}>
                <div className="stats-conteiner">
                    <h2 style={{ textAlign: "center", marginBottom: "12px" }}>Árbitros com as melhores notas</h2>
                    {rankMediaNotas.map((ref, index) => (
                        index === 0 ? <>
                            <div key={ref._id} className="highest-stat">
                                <Link to={`/referee/${ref.name}`}>
                                    <img src={process.env.PUBLIC_URL + `/${ref.photo}`} alt="" className="ref-pic" />
                                </Link>
                                <div className="ref-info-container">
                                    <Link to={`/referee/${ref.name}`}>
                                        <h2>{ref.firstName}</h2>
                                        <h4>{ref.secondName}</h4>
                                    </Link>
                                    <span className="nationality-container">
                                        <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                        {ref.nationality}
                                    </span>
                                    <span className="stats-span">
                                        <span>Nota média: {ref.mediaNotas}</span>
                                    </span>
                                </div>
                            </div>
                        </> : <>
                            <div className="below-stats">
                                <span className="position">{index + 1}</span>
                                <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                <div className="below-infos">
                                    {ref.nationality === "Espanha" ? <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.firstName} {ref.secondName}</span></Link>
                                    </> : <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.name}</span></Link>
                                    </>}
                                    <span className="ref-nat-stats">Nota média: {ref.mediaNotas}</span>
                                </div>
                            </div>
                        </>
                    )
                    )}
                </div>

                <div className="stats-conteiner">
                    <h2 style={{ textAlign: "center", marginBottom: "12px" }}>Árbitros com mais Cartões Amarelos</h2>
                    {rankAmarelos.map((ref, index) => (
                        index === 0 ? <>
                            <div key={ref._id} className="highest-stat">
                                <Link to={`/referee/${ref.name}`}>
                                    <img src={process.env.PUBLIC_URL + `/${ref.photo}`} alt="" className="ref-pic" />
                                </Link>
                                <div className="ref-info-container">
                                    <Link to={`/referee/${ref.name}`}>
                                        <h2>{ref.firstName}</h2>
                                        <h4>{ref.secondName}</h4>
                                    </Link>
                                    <span className="nationality-container">
                                        <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                        {ref.nationality}
                                    </span>
                                    <span className="stats-span">
                                        <span>Total de amarelos: {ref.amarelos}</span>
                                    </span>
                                </div>
                            </div>
                        </> : <>
                            <div className="below-stats">
                                <span className="position">{index + 1}</span>
                                <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                <div className="below-infos">
                                    {ref.nationality === "Espanha" ? <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.firstName} {ref.secondName}</span></Link>
                                    </> : <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.name}</span></Link>
                                    </>}
                                    <span className="ref-nat-stats">Total de Amarelos: {ref.amarelos}</span>
                                </div>
                            </div>
                        </>
                    )
                    )}
                </div>

                <div className="stats-conteiner">
                    <h2 style={{ textAlign: "center", marginBottom: "12px" }}>Árbitros com maior média de Amarelos</h2>
                    {rankMediaAmarelos.map((ref, index) => (
                        index === 0 ? <>
                            <div key={ref._id} className="highest-stat">
                                <Link to={`/referee/${ref.name}`}>
                                    <img src={process.env.PUBLIC_URL + `/${ref.photo}`} alt="" className="ref-pic" />
                                </Link>
                                <div className="ref-info-container">
                                    <Link to={`/referee/${ref.name}`}>
                                        <h2>{ref.firstName}</h2>
                                        <h4>{ref.secondName}</h4>
                                    </Link>
                                    <span className="nationality-container">
                                        <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                        {ref.nationality}
                                    </span>
                                    <span className="stats-span">
                                        <span>Média de amarelos: {ref.avgAmarelo}</span>
                                    </span>
                                </div>
                            </div>
                        </> : <>
                            <div className="below-stats">
                                <span className="position">{index + 1}</span>
                                <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                <div className="below-infos">
                                    {ref.nationality === "Espanha" ? <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.firstName} {ref.secondName}</span></Link>
                                    </> : <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.name}</span></Link>
                                    </>}
                                    <span className="ref-nat-stats">Média de amarelos: {ref.avgAmarelo}</span>
                                </div>
                            </div>
                        </>
                    )
                    )}
                </div>

                <div className="stats-conteiner">
                    <h2 style={{ textAlign: "center", marginBottom: "12px" }}>Árbitros com mais partidas apitadas</h2>
                    {rankPartidas.map((ref, index) => (
                        index === 0 ? <>
                            <div key={ref._id} className="highest-stat">
                                <Link to={`/referee/${ref.name}`}>
                                    <img src={process.env.PUBLIC_URL + `/${ref.photo}`} alt="" className="ref-pic" />
                                </Link>
                                <div className="ref-info-container">
                                    <Link to={`/referee/${ref.name}`}>
                                        <h2>{ref.firstName}</h2>
                                        <h4>{ref.secondName}</h4>
                                    </Link>
                                    <span className="nationality-container">
                                        <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                        {ref.nationality}
                                    </span>
                                    <span className="stats-span">
                                        <span>Total de Jogos: {ref.matches}</span>
                                    </span>
                                </div>
                            </div>
                        </> : <>
                            <div className="below-stats">
                                <span className="position">{index + 1}</span>
                                <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                <div className="below-infos">
                                    {ref.nationality === "Espanha" ? <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.firstName} {ref.secondName}</span></Link>
                                    </> : <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.name}</span></Link>
                                    </>}
                                    <span className="ref-nat-stats">Total de Jogos: {ref.matches}</span>
                                </div>
                            </div>
                        </>
                    )
                    )}
                </div>

                <div className="stats-conteiner">
                    <h2 style={{ textAlign: "center", marginBottom: "12px" }}>Árbitros com mais penaltis marcados</h2>
                    {rankPenaltis.map((ref, index) => (
                        index === 0 ? <>
                            <div key={ref._id} className="highest-stat">
                                <Link to={`/referee/${ref.name}`}>
                                    <img src={process.env.PUBLIC_URL + `/${ref.photo}`} alt="" className="ref-pic" />
                                </Link>
                                <div className="ref-info-container">
                                    <Link to={`/referee/${ref.name}`}>
                                        <h2>{ref.firstName}</h2>
                                        <h4>{ref.secondName}</h4>
                                    </Link>
                                    <span className="nationality-container">
                                        <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                        {ref.nationality}
                                    </span>
                                    <span className="stats-span">
                                        <span>Penais marcados: {ref.penaltis}</span>
                                    </span>
                                </div>
                            </div>
                        </> : <>
                            <div className="below-stats">
                                <span className="position">{index + 1}</span>
                                <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                <div className="below-infos">
                                    {ref.nationality === "Espanha" ? <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.firstName} {ref.secondName}</span></Link>
                                    </> : <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.name}</span></Link>
                                    </>}
                                    <span className="ref-nat-stats">Penais marcados: {ref.penaltis}</span>
                                </div>
                            </div>
                        </>
                    )
                    )}
                </div>

                <div className="stats-conteiner">
                    <h2 style={{ textAlign: "center", marginBottom: "12px" }}>Árbitros com maior média de penaltis</h2>
                    {rankMediaPenaltis.map((ref, index) => (
                        index === 0 ? <>
                            <div key={ref._id} className="highest-stat">
                                <Link to={`/referee/${ref.name}`}>
                                    <img src={process.env.PUBLIC_URL + `/${ref.photo}`} alt="" className="ref-pic" />
                                </Link>
                                <div className="ref-info-container">
                                    <Link to={`/referee/${ref.name}`}>
                                        <h2>{ref.firstName}</h2>
                                        <h4>{ref.secondName}</h4>
                                    </Link>
                                    <span className="nationality-container">
                                        <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                        {ref.nationality}
                                    </span>
                                    <span className="stats-span">
                                        <span>Média de penais: {ref.avgPenalti}</span>
                                    </span>
                                </div>
                            </div>
                        </> : <>
                            <div className="below-stats">
                                <span className="position">{index + 1}</span>
                                <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                <div className="below-infos">
                                    {ref.nationality === "Espanha" ? <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.firstName} {ref.secondName}</span></Link>
                                    </> : <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.name}</span></Link>
                                    </>}
                                    <span className="ref-nat-stats">Média de penais: {ref.avgPenalti}</span>
                                </div>
                            </div>
                        </>
                    )
                    )}
                </div>

                <div className="stats-conteiner">
                    <h2 style={{ textAlign: "center", marginBottom: "12px" }}>Árbitros com mais cartões vermelhos</h2>
                    {rankVermelhos.map((ref, index) => (
                        index === 0 ? <>
                            <div key={ref._id} className="highest-stat">
                                <Link to={`/referee/${ref.name}`}>
                                    <img src={process.env.PUBLIC_URL + `/${ref.photo}`} alt="" className="ref-pic" />
                                </Link>
                                <div className="ref-info-container">
                                    <Link to={`/referee/${ref.name}`}>
                                        <h2>{ref.firstName}</h2>
                                        <h4>{ref.secondName}</h4>
                                    </Link>
                                    <span className="nationality-container">
                                        <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                        {ref.nationality}
                                    </span>
                                    <span className="stats-span">
                                        <span>Total de Vermelhos: {ref.vermelhos}</span>
                                    </span>
                                </div>
                            </div>
                        </> : <>
                            <div className="below-stats">
                                <span className="position">{index + 1}</span>
                                <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                <div className="below-infos">
                                    {ref.nationality === "Espanha" ? <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.firstName} {ref.secondName}</span></Link>
                                    </> : <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.name}</span></Link>
                                    </>}
                                    <span className="ref-nat-stats">Total de Vermelhos: {ref.vermelhos}</span>
                                </div>
                            </div>
                        </>
                    )
                    )}
                </div>

                <div className="stats-conteiner">
                    <h2 style={{ textAlign: "center", marginBottom: "12px" }}>Árbitros com maior média de vermelhos</h2>
                    {rankMediaVermelhos.map((ref, index) => (
                        index === 0 ? <>
                            <div key={ref._id} className="highest-stat">
                                <Link to={`/referee/${ref.name}`}>
                                    <img src={process.env.PUBLIC_URL + `/${ref.photo}`} alt="" className="ref-pic" />
                                </Link>
                                <div className="ref-info-container">
                                    <Link to={`/referee/${ref.name}`}>
                                        <h2>{ref.firstName}</h2>
                                        <h4>{ref.secondName}</h4>
                                    </Link>
                                    <span className="nationality-container">
                                        <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                        {ref.nationality}
                                    </span>
                                    <span className="stats-span">
                                        <span>Vermelhos p/ jogo: {ref.avgVermelho}</span>
                                    </span>
                                </div>
                            </div>
                        </> : <>
                            <div className="below-stats">
                                <span className="position">{index + 1}</span>
                                <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                <div className="below-infos">
                                    {ref.nationality === "Espanha" ? <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.firstName} {ref.secondName}</span></Link>
                                    </> : <>
                                        <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.name}</span></Link>
                                    </>}
                                    <span className="ref-nat-stats">Vermelhos p/ jogo: {ref.avgVermelho}</span>
                                </div>
                            </div>
                        </>
                    )
                    )}
                </div>
            </div>

            <Footer />
        </>
    )
 }