import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";
import "../styles/global.css"
import "../styles/match-formatting.css"
import { referees } from "../data/referees";
import "../styles/refs-page.css"
import InfoCards from "../components/InfoCards";

export default function AllRefsPage() {
    const [openedModal, setOpenedModal] = useState(false);

    const openLogin = () => {
        setOpenedModal(true);
    };

    const closeModal = () => {
        setOpenedModal(false);
    };

    const llRefs = referees.filter(r => r.nationality === "Espanha")
    const plRefs = referees.filter(r => r.nationality === "Inglaterra")
    const blRefs = referees.filter(r => r.nationality === "Alemanha")

    return (
        <>
            <NavBar onLoginClick={openLogin}/>

            {openedModal && (<AuthModal closeModal={closeModal}/>)}

            <div className="competition-container">
                <section className={`championship-header pl`}>
                    <img src={process.env.PUBLIC_URL + `/images/championships_logos/pl-logo.png`} className="championship-logo" alt={` logo`} />
                    <span className={`championship-name pl`}>Premier League</span>
                </section>
                <section className="ref-page-refs-container">
                    {plRefs.map((ref =>
                        <>
                            <div className="ref-page-refs-card">
                                <Link to={`/referee/${ref.name}`}><img src={process.env.PUBLIC_URL + `/${ref.photo}`} alt="" className="ref-pic" /></Link>
                                <div className="ref-page-infos">
                                    <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.name}</span></Link>
                                    <span className="ref-page-infos-nat">
                                        <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                        <span>{ref.nationality}</span>
                                    </span>
                                </div>
                            </div>
                        </>
                    ))}
                </section>
            </div>

            <div className="competition-container">
                <section className={`championship-header ll`}>
                    <img src={process.env.PUBLIC_URL + `/images/championships_logos/ll-logo.png`} className="championship-logo" alt={` logo`} />
                    <span className={`championship-name ll`}>LaLiga</span>
                </section>
                <section className="ref-page-refs-container">
                    {llRefs.map((ref =>
                        <>
                            <div className="ref-page-refs-card">
                                <Link to={`/referee/${ref.name}`}><img src={process.env.PUBLIC_URL + `/${ref.photo}`} alt="" className="ref-pic" /></Link>
                                <div className="ref-page-infos">
                                    <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.second_name}</span></Link>
                                    <span className="ref-page-infos-nat">
                                        <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                        <span>{ref.nationality}</span>
                                    </span>
                                </div>
                            </div>
                        </>
                    ))}
                </section>
            </div>

            <div className="competition-container">
                <section className={`championship-header bl`}>
                    <img src={process.env.PUBLIC_URL + `/images/championships_logos/bl-logo.png`} className="championship-logo" alt={` logo`} />
                    <span className={`championship-name bl`}>Bundesliga</span>
                </section>
                <section className="ref-page-refs-container">
                    {blRefs.map((ref =>
                        <>
                            <div className="ref-page-refs-card">
                                <Link to={`/referee/${ref.name}`}><img src={process.env.PUBLIC_URL + `/${ref.photo}`} alt="" className="ref-pic" /></Link>
                                <div className="ref-page-infos">
                                    <Link to={`/referee/${ref.name}`}><span className="ref-name-stats">{ref.name}</span></Link>
                                    <span className="ref-page-infos-nat">
                                        <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt="" />
                                        <span>{ref.nationality}</span>
                                    </span>
                                </div>
                            </div>
                        </>
                    ))}
                </section>
            </div>

            <Footer/>
        </>
    )
 }