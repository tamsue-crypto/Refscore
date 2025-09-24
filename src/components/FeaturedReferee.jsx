import "../styles/featured-referee.css";
import "../styles/match-formatting.css";

export default function FeaturedReferee(){
    return(
        <>
            <section id="notable-ref-container">
                <h4 style={{fontSize: "24px"}}>Árbitros destaque de Março</h4>

                <div id="ref-container" className="flex" style={{ border: "1px solid #fff" }}> {/*data container*/}
                    <div id="feature-ref">
                        <img src="/images/news/featured-ref-march.png" className="bg-img" />

                        <div className="ref-name flex-center">
                            <div className="name">#1 - François Letexier</div>
                            <div className="avg-rating good">7.8</div>
                        </div>
                    </div>

                    <div className="matches">
                        <ul className="list">
                            <li>
                                <div className="match flex-center">
                                    <div className="home-team">
                                        <span>PSG</span>
                                        <img src="/images/club_badges/ligue-1/psg.png"/>
                                    </div>
                                    <span className="scoreboard">4 - 1</span>
                                    <div className="away-team">
                                        <img src="/images/club_badges/ligue-1/lille.png"/>
                                        <span>LIL</span>
                                    </div>

                                    <div className="avg-rating awesome">8.2</div>
                                </div>
                            </li>

                            <li>
                                <div className="match flex-center">
                                    <div className="home-team">
                                        <span>SCB</span>
                                        <img src="/images/club_badges/alternatives/bastia.png"/>
                                    </div>
                                    <span className="scoreboard">1 - 0</span>
                                    <div className="away-team">
                                        <img src="/images/club_badges/alternatives/martigues.png"/>
                                        <span>FCM</span>
                                    </div>

                                    <div className="avg-rating good">7.6</div>
                                </div>
                            </li>

                            <li>
                                <div className="match flex-center">
                                    <div className="home-team">
                                        <span>FCB</span>
                                        <img src="/images/club_badges/la-liga/barcelona.png"/>
                                    </div>
                                    <span className="scoreboard">3 - 1</span>
                                    <div className="away-team">
                                        <img src="/images/club_badges/alternatives/sl-benfica.png"/>
                                        <span>SLB</span>
                                    </div>

                                    <div className="avg-rating good">7.8</div>
                                </div>
                            </li>

                            <li>
                                <div className="match flex-center">
                                    <div className="home-team">
                                        <span>MSC</span>
                                        <img src="/images/club_badges/ligue-1/montpellier.png"/>
                                    </div>
                                    <span className="scoreboard">0 - 2</span>
                                    <div className="away-team">
                                        <img src="/images/club_badges/ligue-1/saint-etiene.png"/>
                                        <span>ASE</span>
                                    </div>

                                    <div className="avg-rating awesome">8.0</div>
                                </div>
                            </li>

                            <li>
                                <div className="match flex-center">
                                    <div className="home-team">
                                        <span>ITA</span>
                                        <img src="/images/flag/italy.png" className="national-team"/>
                                    </div>
                                    <span className="scoreboard">1 - 2</span>
                                    <div className="away-team">
                                        <img src="/images/flag/germany.png" className="national-team"/>
                                        <span>ALE</span>
                                    </div>

                                    <div className="avg-rating good">7.4</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <h5 className="flex">
                    Ver ranking completo
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_321_103)">
                            <path d="M6.75 13.5L12 9L6.75 4.5V13.5Z" fill="white" />
                        </g>
                    </svg>
                </h5>
            </section>
        </>
    );
};