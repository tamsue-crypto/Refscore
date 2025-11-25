import "../styles/global.css";
import "../styles/formation.css"
import { matches } from "../data/matches";
import { teams } from "../data/teams";
import { useState } from "react";

export default function MatchFormation({matchId}){
    const [selectedTeam, setSelectedTeam] = useState('home');

    const match = matches.find(m => m._id === matchId);

    function getTeamInfo(name) {
        return teams.find(t => t.name === name);
    }
    
    const homeTeam = getTeamInfo(match.home_team.team_name);
    const awayTeam = getTeamInfo(match.away_team.team_name);

    const home_starters = match.home_team.players.filter(p => !p.substitute);
    const away_starters = match.away_team.players.filter(p => !p.substitute);

    const playersToRender = selectedTeam === 'home' ? home_starters : away_starters;

    const handleTeamSelect = (teamKey) => {
        setSelectedTeam(teamKey);
    };

    function getSubstitutePlayer(player) {
        const teamPlayers = selectedTeam === "home" ? match.home_team.players : match.away_team.players;

        const minute = player.statistics.hooked;

        if (!minute) return null;
        const hookedPlayers = teamPlayers.filter((p) => p.statistics.hooked === minute).sort((a, b) => a.player.jersey_number - b.player.jersey_number);
        const enteredPlayers = teamPlayers.filter((p) => p.statistics.entered === minute).sort((a, b) => a.player.jersey_number - b.player.jersey_number);

        //pega o índice do jogador dentro da lista dos que saíram
        const index = hookedPlayers.findIndex((p) => p.player.name === player.player.name);
        //pareia com o substituto no mesmo índice
        const substitute = enteredPlayers[index] || null;

        return substitute;
    }

    return(
        <>
            <div id="formation-container">
                <section className="championship-header general-header">
                    <span className="">Escalação</span>
                </section>
                <ul>
                    <div className="selector">
                        <span className={selectedTeam === 'home' ? 'selected' : ''} onClick={() => handleTeamSelect('home')}>
                            {homeTeam.team_code}
                        </span>
                        <span className={selectedTeam === 'away' ? 'selected' : ''} onClick={() => handleTeamSelect('away')}>
                            {awayTeam.team_code}
                        </span>
                    </div>

                    {playersToRender.map((player) => {
                        const hasEvents = (
                            player.statistics.goals || 
                            player.statistics.yellow_card || 
                            player.statistics.goal_assist || 
                            player.statistics.red_card ||
                            player.statistics.hooked ||
                            player.captain ||
                            player.statistics.own_goal
                        );

                        return(
                            <li key={player.player.name} className="player-item" alt={`${player.player.name}`}>
                                <div className="player-info">
                                    <div className="player-info-prefix">
                                        <span>{player.player.jersey_number}</span>
                                        <img src={process.env.PUBLIC_URL + `/images/flag/${player.player.nationality}.png`} alt="" />
                                    </div>
                                    <span>{player.player.name} {player.captain ? <img src={process.env.PUBLIC_URL + "/images/player_events/captain.png"} alt="captain" /> : ''}</span>
                                </div>
                
                                    {hasEvents && (
                                        <div className="player-events">
                                            {player.statistics.goals > 0 && (
                                                <div className="player-event">
                                                    {[...Array(player.statistics.goals)].map((_, index) => (
                                                        <img src={process.env.PUBLIC_URL + "/images/player_events/goal.png"} alt="ball" key={index}/>
                                                    ))}
                                                </div>
                                            )}

                                            {player.statistics.own_goal > 0 && (
                                                <div className="player-event">
                                                    {[...Array(player.statistics.goals)].map((_, index) => (
                                                        <img src={process.env.PUBLIC_URL + "/images/player_events/own_goal.png"} alt="ball" key={index}/>
                                                    ))}
                                                </div>
                                            )}

                                            {player.statistics.goal_assist > 0 && (
                                                <div className="player-event">
                                                    {[...Array(player.statistics.goal_assist)].map((_, index) => (
                                                        <img src={process.env.PUBLIC_URL + "/images/player_events/assist.png"} alt="assist" key={index}/>
                                                    ))}
                                                </div>
                                            )}

                                            {player.statistics.yellow_card > 0 && (
                                                <div className="player-event">
                                                    <img src={process.env.PUBLIC_URL + "/images/player_events/yellow_card.png"} alt="yellow" />
                                                </div>
                                            )}

                                            {player.statistics.red_card > 0 && (
                                                <div className="player-event">
                                                    <img src={process.env.PUBLIC_URL + "/images/player_events/red_card.png"} alt="yellow" />
                                                </div>
                                            )}

                                            {player.statistics.hooked > 0 && (() => {
                                                const sub = getSubstitutePlayer(player);
                                                
                                                return (
                                                    <div className="player-event hooked-event">
                                                    <div className="hooked-icon">
                                                        <img src={process.env.PUBLIC_URL + "/images/player_events/hooked.png"} alt="hooked" />
                                                        <span>{`${player.statistics.hooked}'`}</span>
                                                    </div>

                                                    {sub && (
                                                        <div className="tooltip">
                                                            <div className="tooltip-player">
                                                                <div className="tooltip-player-info">
                                                                    <span className="tooltip-number">{sub.player.jersey_number}</span>
                                                                    <img src={process.env.PUBLIC_URL + `/images/flag/${sub.player.nationality}.png`} alt={sub.player.nationality}/>
                                                                    <span className="tooltip-name">{sub.player.name}</span>
                                                                </div>

                                                                {hasEvents && (
                                                                    <div className="player-events">
                                                                        {sub.statistics.goals > 0 && (
                                                                            <div className="player-event">
                                                                                {[...Array(sub.statistics.goals)].map((_, index) => (
                                                                                    <img src={process.env.PUBLIC_URL + "/images/player_events/goal.png"} alt="ball" key={index}/>
                                                                                ))}
                                                                            </div>
                                                                        )}

                                                                        {sub.statistics.own_goal > 0 && (
                                                                            <div className="player-event">
                                                                                {[...Array(sub.statistics.goals)].map((_, index) => (
                                                                                    <img src={process.env.PUBLIC_URL + "/images/player_events/own_goal.png"} alt="ball" key={index}/>
                                                                                ))}
                                                                            </div>
                                                                        )}

                                                                        {sub.statistics.goal_assist > 0 && (
                                                                            <div className="player-event">
                                                                                {[...Array(sub.statistics.goal_assist)].map((_, index) => (
                                                                                    <img src={process.env.PUBLIC_URL + "/images/player_events/assist.png"} alt="assist" key={index}/>
                                                                                ))}
                                                                            </div>
                                                                        )}

                                                                        {sub.statistics.yellow_card > 0 && (
                                                                            <div className="player-event">
                                                                                <img src={process.env.PUBLIC_URL + "/images/player_events/yellow_card.png"} alt="yellow" />
                                                                            </div>
                                                                        )}

                                                                        {sub.statistics.red_card > 0 && (
                                                                            <div className="player-event">
                                                                                <img src={process.env.PUBLIC_URL + "/images/player_events/red_card.png"} alt="red" />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                    </div>
                                                );
                                            })()}
                                        </div>
                                    )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
};