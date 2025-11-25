import "../styles/match-formatting.css";
import { teams } from "../data/teams.js";
import "../styles/results.css"
import "../styles/global.css"

export default function MatchResult({match}) {
    function getTeam(id) {
        return teams.find(t => t.name === id);
    }

    const homeGoalScorers = match.home_team.players.filter(p => p.statistics.goals)
    const awayGoalScorers = match.away_team.players.filter(p => p.statistics.goals)
    const homeOwnGoal = match.away_team.players.filter(p => p.statistics.own_goal)
    const awayOwnGoal = match.home_team.players.filter(p => p.statistics.own_goal)

    const home = getTeam(match.home_team.team_name);
    const away = getTeam(match.away_team.team_name);

    const goals = match.statistics?.item?.find((stat) => stat.group_name === "Gols");
    const homeGoals = goals?.home ?? "";
    const awayGoals = goals?.away ?? "";
    const matchWinner = match.statistics?.item?.find((stat) => stat.statistic_type).statistic_type

    return (
        <>
            <div id="result-container">
                <header>
                    <div className="matchday-info">
                        <div className="info-data">
                            <img src="./images/style/matchday.png" alt="" />
                            <span>{match.day}</span>
                            <span>{match.date}</span>
                        </div>
                        <div className="info-data">
                            <img src="./images/style/date.png" alt="" />
                            {match.time}
                        </div>
                        <div className="info-data">
                            <img src="./images/style/location.png" alt="" />
                            <span>{match.stadium}</span>
                            <span>{`(${match.stadium_loc})`}</span>
                        </div>
                    </div>
                </header>

                <section id="score-container">
                    <div className="team-results">
                        <span>{home.team_code}</span>
                        <img src={`./images/club_badges/${home.badge}`} alt={`${home.team_code} badge`} />
                    </div>
                    <div className={`result-scoreboard ${matchWinner}`}>

                        <span>{homeGoals}</span>
                        -
                        <span>{awayGoals}</span>

                    </div>
                    <div className="team-results">
                        <img src={`./images/club_badges/${away.badge}`} alt={`${away.team_code} badge`} />
                        <span>{away.team_code}</span>
                    </div>
                </section>

                <section className="container-result-goals">
                    <div>
                        {homeGoalScorers.map(player => (
                            <div className="result-events home">
                                <div style={{gap: '5px', display: 'flex'}}>
                                    {player.player.name.trim().split(" ").length > 1 ? (
                                        <>
                                            {player.player.name.trim().split(" ")[0]}
                                            <strong>{player.player.name.trim().split(" ").slice(1).join(" ")}</strong>
                                        </>
                                    ) : (
                                        <strong>{player.player.name}</strong>
                                    )}
                                </div>
                                <div className="goals-events">
                                    {[...Array(player.statistics.goals)].map((_, index) => (
                                        <img src="./images/player_events/goal.png" alt="ball" key={index} />
                                    ))}
                                </div>
                            </div>
                        ))}
                        {homeOwnGoal.map(player => (
                            <div className="result-events home">
                                <div style={{gap: '5px', display: 'flex'}}>
                                    {player.player.name.trim().split(" ").length > 1 ? (
                                        <>
                                            {player.player.name.trim().split(" ")[0]}
                                            <strong>{player.player.name.trim().split(" ").slice(1).join(" ")}</strong>
                                        </>
                                    ) : (
                                        <strong>{player.player.name}</strong>
                                    )}
                                </div>
                                <div className="goals-events">
                                    {[...Array(player.statistics.goals)].map((_, index) => (
                                        <img src="./images/player_events/own_goal.png" alt="ball" key={index} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        {awayGoalScorers.map(player => (
                            <div className="result-events away">
                                <div className="goals-events">
                                    {[...Array(player.statistics.goals)].map((_, index) => (
                                        <img src="./images/player_events/goal.png" alt="ball" key={index} />
                                    ))}
                                </div>
                                <div style={{gap: '5px', display: 'flex'}}>
                                    {player.player.name.trim().split(" ").length > 1 ? (
                                        <>
                                            {player.player.name.trim().split(" ")[0]}
                                            <strong>{player.player.name.trim().split(" ").slice(1).join(" ")}</strong>
                                        </>
                                    ) : (
                                        <strong>{player.player.name}</strong>
                                    )}
                                </div>
                            </div>
                        ))}
                        {awayOwnGoal.map(player => (
                            <div className="result-events away">
                                <div className="goals-events">
                                    {[...Array(player.statistics.goals)].map((_, index) => (
                                        <img src="./images/player_events/own_goal.png" alt="ball" key={index} />
                                    ))}
                                </div>
                                <div style={{gap: '5px', display: 'flex'}}>
                                    {player.player.name.trim().split(" ").length > 1 ? (
                                        <>
                                            {player.player.name.trim().split(" ")[0]}
                                            <strong>{player.player.name.trim().split(" ").slice(1).join(" ")}</strong>
                                        </>
                                    ) : (
                                        <strong>{player.player.name}</strong>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}