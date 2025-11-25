import "../styles/match-formatting.css";
import { matches } from "../data/matches.js";
import { teams } from "../data/teams.js";
import { Link } from "react-router-dom";

export default function MatchesList({context, team, referee}) {
    let matchesToDisplay = [];
    let ThisTeam;

    function getTeam(id) {
        return teams.find(t => t.name === id);
    }

    if(context === 'match' && team){
        matchesToDisplay = matches.filter((m) => m.home_team.team_name === team || m.away_team.team_name === team).filter(r => r.referee.referee_name === referee).slice(0, 10);
        ThisTeam = getTeam(team);
    } else if (context === 'referee'){
        matchesToDisplay = matches.filter((r) => r.referee.referee_name === referee).filter((s) => s.stage === "final").slice(0, 10);
        
    }

    console.log(matchesToDisplay)

    return (
        <>
            <div id="matches-container">
                <div className="matches-championship-container">
                        {context === "referee" ? <>
                            <section className={`championship-header general-header`}>
                                <span>Finais Apitadas</span>
                            </section>
                        </> : <>
                            <section className={`championship-header general-header`}>
                                <img src={process.env.PUBLIC_URL + `/images/club_badges/${ThisTeam.badge}`} className="team-badge" alt={`${ThisTeam.short_name} Badge`}/>
                                <span className="team-name">
                                    Histórico Com
                                    <span>{ThisTeam.short_name.toUpperCase()}</span>
                                </span>
                            </section>
                        </>}

                    <section className="matches">
                        <ul className="list">
                            {matchesToDisplay.length > 0 ? <>
                                {matchesToDisplay.map((match) => {
                                    const home = getTeam(match.home_team.team_name);
                                    const away = getTeam(match.away_team.team_name);

                                    const goals = match.statistics?.item?.find((stat) => stat.group_name === "Gols");
                                    const homeGoals = goals?.home ?? "";
                                    const awayGoals = goals?.away ?? "";
                                    const matchWinner = match.statistics?.item?.find((stat) => stat.statistic_type).statistic_type

                                    return (
                                        <li key={match._id || Math.random()}>
                                            {match._id ? (
                                                <Link to={`/match/${match._id}`}>
                                                    <div className="match-container">
                                                        <div className="match">
                                                            <div className="home-team">
                                                                <span>{home.team_code}</span>
                                                                <img src={process.env.PUBLIC_URL + `/images/club_badges/${home.badge}`} alt={`${home.team_code} badge`} />
                                                            </div>
                                                            <span className={`scoreboard ${matchWinner}`}>
                                                                <span>{homeGoals}</span>
                                                                <span className="divisoria">-</span>
                                                                <span>{awayGoals}</span>
                                                            </span>
                                                            <div className="away-team">
                                                                <img src={process.env.PUBLIC_URL + `/images/club_badges/${away.badge}`} alt={`${away.team_code} badge`} />
                                                                <span>{away.team_code}</span>
                                                            </div>
                                                        </div>

                                                        <small>
                                                            {`${match.competition_name} ${match.year}`}
                                                        </small>
                                                    </div>
                                                </Link>
                                            ) : (
                                                <div className="match-container match-context">
                                                    <div className="match">
                                                        <div className="home-team">
                                                            <span>{home.team_code}</span>
                                                            <img src={process.env.PUBLIC_URL + `/images/club_badges/${home.badge}`} alt={`${home.team_code} badge`} />
                                                        </div>
                                                        <span className={`scoreboard ${matchWinner}`}>
                                                            <span>{homeGoals}</span>
                                                            -
                                                            <span>{awayGoals}</span>
                                                        </span>
                                                        <div className="away-team">
                                                            <img src={process.env.PUBLIC_URL + `/images/club_badges/${away.badge}`} alt={`${away.team_code} badge`} />
                                                            <span>{away.team_code}</span>
                                                        </div>
                                                    </div>

                                                    <small>
                                                        {`${match.competition_name} ${match.year}`}
                                                    </small>
                                                </div>
                                            )}
                                        </li>
                                    );
                                })}
                            </> : <>
                                <div className="match-container match-context">
                                    <h5>Sem jogos registrados</h5>
                                </div>
                            </>}
                        </ul>
                    </section>
                </div>
            </div>
        </>
    );
}