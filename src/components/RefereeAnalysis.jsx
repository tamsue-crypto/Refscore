import '../styles/global.css'
import '../styles/ref-analysis.css'
import { journalists } from '../data/journalists';
import { analysis } from '../data/match-analysis';
import { Link } from 'react-router-dom';
import { matches } from '../data/matches';
import { teams } from '../data/teams';

export default function RefereeAnalysis({match, jourId}){

    function getRatingClass(rating) {
        if (rating <= 5.9) return 'taxes';
        if (rating <= 6.5) return 'bad';
        if (rating <= 6.9) return 'average';
        if (rating <= 7.9) return 'good';
        if (rating <= 8.9) return 'awesome';
        return 'perfect';
    }

    function getJournalist(id){
        return journalists.find(j => j._id === id)
    }

    function getMatch(id){
        return matches.find(m => m._id === id)
    }

    function getTeam(id) {
        return teams.find(t => t.name === id);
    }

    let analysisToDisplay = [];

    if (jourId){
        analysisToDisplay = analysis.flatMap(match => match.analysis.filter(a => a.journalistId === jourId).map(a => ({matchId: match.matchId, ...a}))).slice(0, 4);
        var style = '700px'
    } else {
        analysisToDisplay = analysis.filter(a => a.matchId === match._id).flatMap(a => a.analysis)
    }

    return(
        <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '0 auto', justifyContent: 'center', style}}>
            {analysisToDisplay.length > 0 ? <>
                {analysisToDisplay.map((item, index) => {
                    const journalist = getJournalist(item.journalistId)
                    const match = getMatch(item.matchId)
                    const home = getTeam(match.home_team.team_name);
                    const away = getTeam(match.away_team.team_name);

                    const goals = match.statistics?.item?.find((stat) => stat.group_name === "Gols");
                    const homeGoals = goals?.home ?? "";
                    const awayGoals = goals?.away ?? "";
                    const matchWinner = match.statistics?.item?.find((stat) => stat.statistic_type).statistic_type

                    return (
                        <div className='analysis-container' key={index}>
                            <header>
                                <Link to={`/journalist-page/${journalist._id}`}><img src={`/images/journalists/${journalist.journalistImg}`} alt="journalistIMG"/></Link>
                                <div className='journalist-info-header'>
                                    <span className='name-analysis-info'><Link to={`/journalist-page/${journalist._id}`}>{journalist.name}</Link></span>
                                    <small>{`Agenciado ${journalist.broadcasterName}`}</small>
                                </div>
                            </header>
                            <div className='rating-breakdown'>
                                {jourId && (
                                    <section id='rating-breakdown-teams'>
                                        <div className="rating-breakdown-team-results">
                                            <span>{home.team_code}</span>
                                            <img src={`/images/club_badges/${home.badge}`} alt={`${home.team_code} badge`} />
                                        </div>
                                        <Link to={`/match/${match._id}`}>
                                            <div className={`rating-breakdown-result-scoreboard ${matchWinner}`}>
                                                <span>{homeGoals}</span>
                                                <span>-</span>
                                                <span>{awayGoals}</span>
                                            </div>
                                        </Link>
                                        <div className="rating-breakdown-team-results">
                                            <img src={`/images/club_badges/${away.badge}`} alt={`${away.team_code} badge`} />
                                            <span>{away.team_code}</span>
                                        </div>
                                    </section>
                                )}
                                <div className='breakdown-header'>
                                    <div className={`avg-rating ${getRatingClass(item['final-score'].toFixed(1))}`} style={{ scale: '0.7' }}>{item['final-score']}</div>
                                    <span>Detalhamento da Classificação</span>
                                </div>
                                <div className='breakdown-grades'>
                                    {Object.entries(item.scores).map(([scoreName, value]) =>
                                        <div className='rating-container' key={scoreName}>
                                            <span>{scoreName}</span>
                                            <div className="rating-bar">
                                                <span>{value.toFixed(1)}</span>
                                                <div className={`rating-fill ${getRatingClass(value)}`} style={{ '--score': value }}></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </> : <>
                    <div className="hollow-container">
                        Sem análises disponíveis
                    </div>
            </>}
        </div>
    )   
}