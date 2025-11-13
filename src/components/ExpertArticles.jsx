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

    function getJournalist(id) {
        return journalists.find(j => j._id === id);
    }

    return(
        <>
            <div className='news-area'>
                <h1 className='navigate-text'>
                    Opiniões &amp; Análises 
                </h1>
                
                <div className='news-container flex'>
                    {filteredArticles.map((article) => {
                    const journalist = getJournalist(article.journalistId);

                    return (
                        
                        <div className='news' key={article._id}>
                            <div className='author'>
                                <Link to={`/journalist-page/${journalist._id}`}>
                                    <div className='journalist'>
                                        <img src={`/images/journalists/${journalist.journalistImg}`} alt="" />
                                        <span>{journalist.name}</span>
                                    </div>
                                </Link>

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
                                        <span>{Array.isArray(article.comments) ? article.comments.length : 0}</span>
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