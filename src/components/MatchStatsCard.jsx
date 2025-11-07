import "../styles/match-stats-card.css";
import "../styles/global.css";
import { teams } from "../data/teams";

export default function MatchStatsCard({match}) {
    const homeTeam = teams.find(t => t.name === match.home_team.team_name)
    const awayTeam = teams.find(t => t.name === match.away_team.team_name)
    const stats = match.statistics.item

    return (
        <>
            <div id="match-stats-container">
                <header>
                    <div className="team-container">
                        <span>{homeTeam.short_name}</span>
                        <img src={`/images/club_badges/${homeTeam.badge}`} alt="" />
                    </div>
                    <div className="team-container">
                        <img src={`/images/club_badges/${awayTeam.badge}`} alt="" />
                        <span>{awayTeam.short_name}</span>
                    </div>
                </header>

                <ul>
                    {stats.map(statName => (
                        <>
                            <li className={`${statName.statistic_type}`}>
                                <div className="stat-container">{statName.home}</div>
                                <div className="stat-container">{statName.group_name}</div>
                                <div className="stat-container">{statName.away}</div>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </>
    );
}