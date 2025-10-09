import '../styles/global.css';
import '../styles/news.css';
import { articles } from '../data/articles';
import { journalists } from '../data/journalists';
import { Link } from "react-router-dom";

export default function ExpertArticles({context, id}) {
    let filteredArticles;

    if (!context) {
        // HomePage: show first 4
        filteredArticles = articles.filter(article => article.tag === 'Opinião' || article.tag === 'Análise').sort((a, b) => b._id - a._id).slice(0, 4);
    } else {
        // MatchPage or RefereePage: apply filter
        filteredArticles = articles.filter((article) => {
        if (context === 'match') return article.matchId === id;
        if (context === 'referee') return article.refereeId === id;
        return false;
        }).sort((a, b) => b._id - a._id);
    }

    function getRatingClass(rating) {
        if (rating <= 5.0) return 'taxes';
        if (rating <= 6.4) return 'bad';
        if (rating <= 6.9) return 'average';
        if (rating <= 7.9) return 'good';
        if (rating <= 8.9) return 'awesome';
        return 'perfect';
    }

    function getJournalist(id) {
        return journalists.find(j => j._id === id);
    }

    return(
        <>
            <div className='news-area'>
                <h1 className='navigate-text'>
                    Opiniões &amp; Análises
                    <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.0707 19.0002L13.4104 10.3399L15.0898 8.66042L25.4294 19.0002L15.0898 29.3398L13.4104 27.6605L22.0707 19.0002Z" />
                    </svg>    
                </h1>
                
                <div className='news-container flex'>
                    {filteredArticles.map((article) => {
                    const journalist = getJournalist(article.journalistId);

                    return (
                        
                        <div className='news' key={article._id}>
                            <div className='author'>
                                <div className='journalist'>
                                    <img src={`/images/journalists/${journalist.journalistImg}`} alt="" />
                                    <span>{journalist.name}</span>
                                </div>

                                <div className='journalist broadcaster'>
                                    <img src={`/images/broadcasters/${journalist.broadcaster}`} alt="" />
                                </div>
                            </div>

                            <Link to={`/news/${article._id}`}>
                                <div className='general-news-img'>
                                    <img src={`/images/news/${article.image}`} alt="" className='bg-img' />

                                    <div className={`content ${article.layout}`}>
                                        <div className='header-ref-anl flex'>
                                            <img src={`images/championships_logos/${article.championshipLogo}`} alt="" />
                                            {article.tag === 'Análise' && (
                                                <div className={`avg-rating ${getRatingClass(article.rating)}`}>{article.rating.toFixed(1)}</div>
                                            )}
                                        </div>

                                        <div>
                                            <div className='tag'>{article.tag}</div>
                                            <div className='title-news'>{article.title}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <div className='bottom-lead general'>
                                <p>{article.lead}</p>
                            </div>

                            <div className="important-features">
                                <span className="date">
                                    {article.date}
                                    <div className="comments">
                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_351_833)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.30401 0.516602V7.68173H5.88624L2.93501 10.633V7.68173H0.546631V0.516602H9.30401ZM5.32418 4.49731H2.935V5.11653H5.32418L5.32418 4.49731ZM6.91564 2.90426H2.935V3.52347H6.91563V2.90426H6.91564Z" fill="black" />
                                            </g>
                                        </svg>
                                        <span>{article.commentsCount}</span>
                                    </div>
                                </span>

                                <Link to={`/news/${article._id}`}>
                                    <span className="see-more">
                                        Ver Mais
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_72_467)">
                                                <path d="M5.25 10.5L9.33333 7L5.25 3.5V10.5Z" fill="black" />
                                            </g>
                                        </svg>
                                    </span>
                                </Link>            
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </>
    );
};