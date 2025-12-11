import "../styles/featured-referee.css";
import "../styles/match-formatting.css";
import { Link } from "react-router-dom";

function getRatingClass(rating) {
    if (rating <= 5.0) return 'taxes';
    if (rating <= 6.4) return 'bad';
    if (rating <= 6.9) return 'average';
    if (rating <= 7.9) return 'good';
    if (rating <= 8.9) return 'awesome';
    return 'perfect';
}

export default function FeaturedReferee(){
    return(
        <>
            <section id="notable-ref-container" style={{marginBottom: "100px"}}>
                <h4 style={{fontSize: "24px"}}>Árbitro destaque de Novembro</h4>

                <div id="ref-container" className="flex" style={{ border: "1px solid #fff", alignItems: "center", backgroundColor: "white"}}> {/*data container*/}
                    <Link to={`/referee/Bastian%20Dankert`}>
                        <div id="feature-ref">
                            <img src="./images/style/november-ref.jpg" className="bg-img" />

                            <div className="ref-name flex-center">
                                <div className="name">Bastian Dankert</div>
                                <div className={`avg-rating ${getRatingClass(7.9)}`}>7.9</div>
                            </div>
                        </div>
                    </Link>

                    <div className="matches">
                        <ul className="list">
                            <li>
                                <Link to={`/match/34`}>
                                    <div className="match-container">
                                        <div className="match flex-center">
                                            <div className="home-team">
                                                <span>SVW</span>
                                                <img src="./images/club_badges/bundesliga/werder-bremen.png" />
                                            </div>
                                            <span className="scoreboard">1 - 1</span>
                                            <div className="away-team">
                                                <img src="./images/club_badges/bundesliga/fc-koln.png" />
                                                <span>FCC</span>
                                            </div>

                                            <div className={`avg-rating ${getRatingClass(7.9)}`}>7.9</div>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link to={`match/31`}>
                                    <div className="match-container">
                                        <div className="match flex-center">
                                            <div className="home-team">
                                                <span>B04</span>
                                                <img src="./images/club_badges/bundesliga/bayer-leverkusen.png" />
                                            </div>
                                            <span className="scoreboard positive">
                                                <span>6</span>
                                                -
                                                <span>0</span>
                                            </span>
                                            <div className="away-team">
                                                <img src="./images/club_badges/bundesliga/heidenheim.png" />
                                                <span>FCH</span>
                                            </div>

                                            <div className={`avg-rating ${getRatingClass(7.9)}`}>7.9</div>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link to={`match/30`}>
                                    <div className="match-container">
                                        <div className="match flex-center">
                                            <div className="home-team">
                                                <span>FCB</span>
                                                <img src="./images/club_badges/bundesliga/bayern-munchen.png" />
                                            </div>
                                            <span className="scoreboard positive">
                                                <span>2</span>
                                                -
                                                <span>1</span>
                                            </span>
                                            <div className="away-team">
                                                <img src="./images/club_badges/bundesliga/borussia-dortmund.png" />
                                                <span>BVB</span>
                                            </div>

                                            <div className={`avg-rating ${getRatingClass(7.9)}`}>7.9</div>
                                        </div>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link to={`match/29`}>
                                    <div className="match-container">
                                        <div className="match flex-center">
                                            <div className="home-team">
                                                <span>SCF</span>
                                                <img src="./images/club_badges/bundesliga/sc-freiburg.png" />
                                            </div>
                                            <span className="scoreboard null">
                                                <span>1</span>
                                                -
                                                <span>1</span>
                                            </span>
                                            <div className="away-team">
                                                <img src="./images/club_badges/bundesliga/hoffenheim.png" />
                                                <span>tsg</span>
                                            </div>

                                            <div className={`avg-rating ${getRatingClass(7.9)}`}>7.9</div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};