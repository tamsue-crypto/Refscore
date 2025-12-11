import '../styles/global.css';
import '../styles/news.css';
import { articles } from '../data/articles';
import { Link } from 'react-router-dom';

export default function LatestNews({context, homeTeam, awayTeam, match, referee, jourId}) {
    let filteredArticles = [];

    if (context === "match") {
        filteredArticles = articles.filter(article => article.teamId?.includes(homeTeam) || article.teamId?.includes(awayTeam) || article.referee === referee || article.matchId === match._id).reverse().slice(0, 4);
    } else if(context === 'jour'){
        filteredArticles = articles.filter(article => article.journalistId === jourId).reverse().slice(0, 4);
    } else if(context === 'ref') {
        filteredArticles = articles.filter(article => article.referee === referee).reverse().slice(0, 4);
    }else {
        filteredArticles = articles.filter(article => article.tag !== "Opinião" && article.tag !== "Análise").sort((a, b) => b._id - a._id).slice(0, 2);
    }

    return(
        <>
            <div className=''>
                {filteredArticles.length === 0 ? <>
                    {context === 'match' ? <>
                        <div className='no-news-container'>
                            <img src={process.env.PUBLIC_URL + "/images/no-news.png"} alt="" />
                            <h1>Infelizmente não há notícias registradas</h1>
                        </div>
                    </> : <>
                        <div className='horizontal-no-news'>
                            <img src={process.env.PUBLIC_URL + "/images/no-news.png"} alt="" />
                            <h1>Infelizmente não há notícias registrada</h1>
                        </div>
                    </>}
                </> : <>
                    <div className={`news-container flex ${context}`}>
                        {filteredArticles.map((article) =>
                            <div className='news' key={article._id}>
                                <Link to={`/news/${article._id}`}>
                                    <div className='general-news-img'>
                                        <img src={process.env.PUBLIC_URL + `/images/news/${article.image}`} alt="" className='bg-img' />

                                        <div className={`content ${article.layout}`}>
                                            <img src={process.env.PUBLIC_URL + `/images/championships_logos/${article.championshipLogo}`} alt="" />

                                            <div>
                                                <div className='tag'>{article.tag}</div>
                                                <div className='title-news'>{article.title}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

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
                        )}
                    </div>
                </>}
            </div>
        </>
    );
};