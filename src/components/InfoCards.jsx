import { referees } from "../data/referees"
import { matches } from "../data/matches"
import "../styles/info-cards.css";
import "../styles/global.css";
import { Link } from "react-router-dom";

export default function InfoCards({matchId, context, ref}){
    let match = matches.find(m => m._id === matchId)
    let referee = referees.find(r => r.name === ref)

    const allPlayers = [...match.away_team.players, ...match.home_team.players]

    function getRatingClass(rating) {
        if (rating <= 5.0) return 'taxes';
        if (rating <= 6.4) return 'bad';
        if (rating <= 6.9) return 'average';
        if (rating <= 7.9) return 'good';
        if (rating <= 8.9) return 'awesome';
        return 'perfect';
    }

    if(context === "ref" && matchId){
        var title = "Dados Pessoais"
        var header = "general"
        const referee = referees.find(r => r.name === match.referee.referee_name)
        var photo = referee.photo
        var cardName = referee.name
        var nationality = referee.nationality
        var birthday = referee.birthday
        var fifa_debut = referee.fifa_debut
    } else if(context === "brmotm"){
        var title = "Brasil no Jogo"
        var header = "brmotm"
        const brMotm = allPlayers.find(p => p.br_motm)
        var photo = brMotm.photo
        var cardName = brMotm.player.name
        var nationality = brMotm.player.nationality
        var stats = brMotm.statistics.br_motm_stat
    } else if (context === "ref" && ref) {
        var title = "Dados Pessoais"
        var header = "general"
        var photo = referee.photo
        var cardName = referee.name
        var nationality = referee.nationality
        var birthday = referee.birthday
        var fifa_debut = referee.fifa_debut
    }else {
        var title = "Destaque da Partida"
        var header = "general"
        const motm = allPlayers.find(p => p.motm)
        var photo = motm.photo
        var cardName = motm.player.name
        var nationality = motm.player.nationality
        var stats = motm.statistics.motm_stat
    }
    return(
        <>
            <div className="info-card">
                <section className={`championship-header ${header}-header`}>
                    <span>{title}</span>
                    {context === "ref" && matchId &&
                        <div className={`avg-rating ${getRatingClass(match.referee.final_score)}`} style={{transform: 'scale(0.6)', padding: '5px'}}>
                            {match.referee.final_score}
                            <div className="rating-tooltip">
                                <span>{`Critério e Consistência: ${match.referee.scores.criteria_consistency}`}</span>
                                <span>{`Controle e Disciplina: ${match.referee.scores.control_discipline}`}</span>
                                <span>{`Decisões Técnicas: ${match.referee.scores.technical_decisions}`}</span>
                                <span>{`Uso do Var: ${match.referee.scores.var_use}`}</span>
                                <span>{`Postura e Comunicação: ${match.referee.scores.posture_communication}`}</span>
                            </div>
                        </div>
                    }
                </section>

                <section className="infos-container">
                    {context === "ref" ? <>
                        <Link to={`/referee/${cardName}`}><img src={process.env.PUBLIC_URL + `/${photo}`} alt="" className="card-photo clickable"/></Link>
                    </> : <>
                        <img src={process.env.PUBLIC_URL + `/${photo}`} alt="" className="card-photo"/>
                    </>}
                    <ul className="infos">
                        <li>
                            <div className="sla">
                                <span className="info-title">Nome</span>
                                {context === "ref" ? <>
                                    {nationality === "Espanha" ? <>
                                        <Link to={`/referee/${cardName}`}><span className="infoself">{referee.second_name}</span></Link>
                                    </> : <>
                                        <Link to={`/referee/${cardName}`}><span className="infoself">{cardName}</span></Link>
                                    </>}
                                </>: <>
                                    {nationality === "Espanha" ? <>
                                        <span className="infoself">{referee.second_name}</span>
                                    </> : <>
                                        <span className="infoself">{cardName}</span>
                                    </>}
                                </>}
                            </div>
                        </li>
                        <li>
                            <div className="sla">
                                <span className="info-title">Nacionalidade</span>
                                <span className="infoself">
                                    <img src={process.env.PUBLIC_URL + `/images/flag/${nationality}.png`} alt="" />
                                    {nationality}
                                </span>
                            </div>
                        </li>
                        {context === "ref" && 
                            <>
                                <li>
                                    <div className="sla">
                                        <span className="info-title">Data de Nascimento</span>
                                        <span className="infoself">{birthday}</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sla">
                                        <span className="info-title">Árbitro Fifa Desde</span>
                                        <span className="infoself">{fifa_debut}</span>
                                    </div>
                                </li>
                            </>
                        }
                        {(context === "brmotm" || context === "motm") && stats && (
                            <>
                                {Object.entries(stats).map(([statName, value]) => (
                                    <li key={statName}>
                                        <div className="sla">
                                            <span className="info-title">{statName}</span>
                                            <span className="infoself">{value}</span>
                                        </div>
                                    </li>
                                ))}
                            </>
                        )}
                    </ul>
                </section>
            </div>
        </>
    )
}