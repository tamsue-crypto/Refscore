import React, { useState } from "react";
import { referees } from "../data/referees";
import "../styles/ref-stats-table.css";

export default function RefereeStatsTable({ ref }) {
    const referee = referees.find(r => r.name === ref);

    const [selectedSeason, setSelectedSeason] = useState(
        referee?.stats?.[0]?.season || ""
    );

    if (!referee) return <p>Árbitro não encontrado.</p>;
    if (!referee.stats || referee.stats.length === 0)
        return <p>Sem estatísticas disponíveis.</p>;

    const seasons = referee.stats.map(s => s.season);
    const currentSeason = referee.stats.find(s => s.season === selectedSeason);

    function getRatingClass(rating) {
        if (rating <= 5.0) return 'taxes';
        if (rating <= 6.4) return 'bad';
        if (rating <= 6.9) return 'average';
        if (rating <= 7.9) return 'good';
        if (rating <= 8.9) return 'awesome';
        return 'perfect';
    }

    return (
        <div className="referee-stats">
            <div className="season-selector">
                <label htmlFor="seasonSelect">Selecionar Temporada:</label>
                <select id="seasonSelect" value={selectedSeason} onChange={(e) => setSelectedSeason(e.target.value)}>
                    {seasons.map((season, index) => (
                        <option key={index} value={season} className="option-season">
                            {season}
                        </option>
                    ))}
                </select>
            </div>

            <table className="stats-table">
                <thead>
                    <tr>
                        <th style={{textAlign: 'start'}}>Competição</th>
                        <th>Partidas</th>
                        <th><img src={process.env.PUBLIC_URL + "/images/player_events/yellow_card.png"} alt="yellow" title="Cartão Amarelo"/></th>
                        <th><img src={process.env.PUBLIC_URL + "/images/player_events/second_yellow.png"} alt="second_yellow" title="Segundo Cartão Amarelo"/></th>
                        <th><img src={process.env.PUBLIC_URL + "/images/player_events/red_card.png"} alt="yellow" title="Cartão Vermelho"/></th>
                        <th><img src={process.env.PUBLIC_URL + "/images/player_events/penalti.png"} alt="penalti" title="Penalti"/></th>
                        <th>Nota</th>
                    </tr>
                </thead>
                <tbody>
                    {currentSeason.competitions.map((comp, i) => (
                        <tr key={i}>
                            <td className="competition-name">{comp.competition_name}</td>
                            <td className="stats">{comp.matches}</td>
                            <td className="stats">{comp.yellow_card}</td>
                            <td className="stats">{comp.second_yellow_card}</td>
                            <td className="stats">{comp.red_card}</td>
                            <td className="stats">{comp.penalty}</td>
                            <td className="stats avg-rating-cell">
                                <div className={`avg-rating ${getRatingClass(comp.average_score.toFixed(1))}`}
                                    style={{transform: 'scale(0.6)' }}>
                                    {comp.average_score.toFixed(1)}
                                </div>
                            </td>
                        </tr>
                    ))}

                    {/* Totais da temporada */}
                    <tr className="totals">
                        <td className="competition-name"><strong>Total</strong></td>
                        <td className="stats">{currentSeason.competitions.reduce((s, c) => s + c.matches, 0)}</td>
                        <td className="stats">{currentSeason.competitions.reduce((s, c) => s + c.yellow_card, 0)}</td>
                        <td className="stats">{currentSeason.competitions.reduce((s, c) => s + c.second_yellow_card, 0)}</td>
                        <td className="stats">{currentSeason.competitions.reduce((s, c) => s + c.red_card, 0)}</td>
                        <td className="stats">{currentSeason.competitions.reduce((s, c) => s + c.penalty, 0)}</td>
                        <td className="stats avg-rating-cell">
                            <div className={`avg-rating ${getRatingClass((currentSeason.competitions.reduce((s, c) => s + c.average_score, 0) / currentSeason.competitions.length).toFixed(1) )}`} style={{ transform: 'scale(0.6)', transformOrigin: 'center' }}>
                                {( currentSeason.competitions.reduce((s, c) => s + c.average_score, 0) / currentSeason.competitions.length ).toFixed(1)}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
