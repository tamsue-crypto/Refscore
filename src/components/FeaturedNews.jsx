import '../styles/global.css';
import '../styles/news.css';
import { articles } from '../data/articles';

export default function FeaturedNews() {
    const getArticlesByUpvote = [...articles].sort((a, b) => {
        if(b.upvotes === a.upvotes) {
            return b._id - a._id;
        }
        return b.upvotes - a.upvotes;
    });

    const mainArticle = getArticlesByUpvote[0];
    const sideArticles = getArticlesByUpvote.slice(1, 3);

    return(
        <>
            <div className='news-area'>
                <h1>Notícias em Destaque</h1>
                <div className='news-container flex'>
                    {mainArticle && (
                        <div className='news'>
                            <div className='featured-img'>
                                <img src={`/images/news/${mainArticle.image}`} className='bg-img' alt=''/>

                                <div className={`content ${mainArticle.layout}`}>
                                    <img src={`images/championships_logos/${mainArticle.championshipLogo}`} alt=""/>

                                    <div>
                                        <div className='tag'>{mainArticle.tag}</div>
                                        <div className='title-news'>{mainArticle.title}</div>
                                    </div>
                                </div>
                            </div>

                            <div className='bottom-lead featured'>
                                <p>{mainArticle.lead}</p>
                            </div>

                            <div className='important-features'>
                                <span className="date">
                                    {mainArticle.date}
                                    <div className="comments">
                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_351_833)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.30401 0.516602V7.68173H5.88624L2.93501 10.633V7.68173H0.546631V0.516602H9.30401ZM5.32418 4.49731H2.935V5.11653H5.32418L5.32418 4.49731ZM6.91564 2.90426H2.935V3.52347H6.91563V2.90426H6.91564Z" fill="black" />
                                            </g>
                                        </svg>
                                        <span>{mainArticle.comments}</span>
                                    </div>
                                </span>

                                <span className="see-more">
                                    Ver Mais
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_72_467)">
                                            <path d="M5.25 10.5L9.33333 7L5.25 3.5V10.5Z" fill="black" />
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    )}

                    <div id='side-featured' className='flex flex-column'>
                        {sideArticles.map((sideArticle) =>
                            <div className='news' key={sideArticle._id}>
                                <div className='side-featured-img'>
                                    <img src={`/images/news/${sideArticle.image}`} alt="" className='bg-img' />

                                    <div className={`content ${sideArticle.layout}`}>
                                        <img src={`/images/championships_logos/${sideArticle.championshipLogo}`} alt="" />

                                        <div>
                                            <div className='tag'>{sideArticle.tag}</div>
                                            <div className='title-news'>{sideArticle.title}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='important-features'>
                                    <span className="date">
                                        {sideArticle.date}
                                        <div className="comments">
                                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_351_833)">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.30401 0.516602V7.68173H5.88624L2.93501 10.633V7.68173H0.546631V0.516602H9.30401ZM5.32418 4.49731H2.935V5.11653H5.32418L5.32418 4.49731ZM6.91564 2.90426H2.935V3.52347H6.91563V2.90426H6.91564Z" fill="black" />
                                                </g>
                                            </svg>
                                            <span>{sideArticle.comments}</span>
                                        </div>
                                    </span>

                                    <span className="see-more">
                                        Ver Mais
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_72_467)">
                                                <path d="M5.25 10.5L9.33333 7L5.25 3.5V10.5Z" fill="black" />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};