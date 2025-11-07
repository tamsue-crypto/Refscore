import '../styles/global.css'
import '../styles/ref-analysis.css'
import { journalists } from '../data/journalists';
import { analysis } from '../data/match-analysis';
import { Link } from 'react-router-dom';

export default function RefereeAnalysis({match}){

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

    const analysisToDisplay = analysis.filter(a => a.matchId === match._id).flatMap(a => a.analysis)

    console.log(analysisToDisplay)

    return(
        <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '0 auto', justifyContent: 'center'}}>
            {analysisToDisplay.length > 0 ? <>
                {analysisToDisplay.map((item, index) => {
                    const journalist = getJournalist(item.journalistId)

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
                Nada
            </>}
        </div>
    )   
}