import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AuthModal from "../components/AuthModal";
import { articles } from "../data/articles";
import { useParams } from "react-router-dom";
import { journalists } from "../data/journalists";
import { users } from "../data/users";
import { teams } from "../data/teams";
import '../styles/global.css'
import '../styles/article-page.css'
import TodayMatchesList from "../components/TodayMatchesList";
import { Link } from "react-router-dom";

export default function ArticlePage() {
    const [openedModal, setOpenedModal] = useState(false);
    const [screen, setScreen] = useState("login");

    const openLogin = () => {
        setOpenedModal(true);
        setScreen("login");
    };

    const closeModal = () => {
        setOpenedModal(false);
    };

    const changeToLogup = () => {
        setScreen("register");
    };

    const changeToLogin = () => {
        setScreen("login");
    };

    const { id } = useParams();
    let article = articles.filter(a => a._id === id)

    function getJournalist(id) {
        return journalists.find(j => j._id === id);
    }

    function getUser(id) {
        return users.find(u => u._id === id);
    }

    function getUserTeam(name){
        return teams.find(t => t.name === name)
    }

    return(
        <>
            <NavBar onLoginClick={openLogin}/>

            {openedModal && (
                <AuthModal
                    screen={screen}
                    closeModal={closeModal}
                    changeToLogin={changeToLogin}
                    changeToLogup={changeToLogup}
                />
            )}

            <div>
                {article.map((article) => {
                    const journalist = getJournalist(article.journalistId);

                    return(
                        <div key={article._id} id="page-container">
                            <div className="article">
                                <div className="a-general-infos">
                                    <div className="support">
                                        <span>{article.tag}</span>
                                        <span>{article.supportLine}</span>
                                    </div>
                                    
                                    <div className="article-infos">
                                        <h1>{article.title}</h1>
                                        <div className="article-date">
                                            <p>{`Publicado em: ${article.date.split(' ').pop()}`} </p>
                                        </div>
                                    </div>

                                    <div className="a-author">
                                        <Link to={`/journalist-page/${journalist._id}`}><img src={`/images/journalists/${journalist.journalistImg}`} alt="pfp" /></Link>
                                        <div className="a-author-bio">
                                            <span>Publicado por: <Link to={`/journalist-page/${journalist._id}`}><strong>{journalist.name}</strong></Link></span>
                                            <span>{`Agenciado do ${journalist.broadcasterName}`}</span>
                                        </div>
                                    </div>
                                </div>

                                <img src={`/images/news/${article.image}`} alt="thumb" className="article-thumb"/>
                            
                                <div className="a-content">
                                    {Object.values(article.paragraphs).map((p, index) => 
                                        <p key={index}>{p}</p>
                                    )}
                                </div>

                                       
                                <div id="comment-section">
                                    <div style={{ borderBottom: '2px solid var(--color-accent)' }}>
                                        <h3>COMENTÁRIOS</h3>
                                    </div>

                                    {article.comments?.length > 0 ? (
                                        article.comments.map((comment) => {
                                            const user = getUser(comment.authorId)
                                            const userTeam = getUserTeam(user.favTeam)

                                            return(
                                                <div className="comment-container" key={comment._id}>
                                                    <div className="comment-user-info">
                                                        <div className="user-pfp">
                                                            <img src={`/images/users_pfp/${user.profilePicture}`} alt="pfp" />
                                                        </div>
                                                        <div className="user-data">
                                                            <div className="user-name">
                                                                <h3>{user.name}</h3>
                                                                <img src={`/images/club_badges/${userTeam.badge}`} alt="fav-team" title={userTeam.name} />
                                                            </div>
                                                            <span>{`Data de postagem: ${comment.date}`}</span>
                                                        </div>
                                                    </div>
                                                    <div className="comment">
                                                        <p>{comment.message}</p>
                                                    </div>
                                                    <div className="interactions">
                                                        <div className="vote">
                                                            <span>{comment.upvotes}</span>
                                                            <svg width="15" height="15" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M190 318.3L315.5 35.8C320.239 25.1434 327.966 16.0897 337.745 9.73557C347.525 3.38147 358.937 -0.000288656 370.6 9.70963e-06C387.512 -0.00655802 404.259 3.31881 419.886 9.78617C435.512 16.2535 449.711 25.7361 461.672 37.6923C473.633 49.6485 483.121 63.844 489.595 79.468C496.068 95.0919 499.4 111.838 499.4 128.75V247.55H675.25C691.451 247.553 707.459 251.056 722.181 257.817C736.903 264.579 749.991 274.44 760.55 286.727C771.109 299.014 778.889 313.437 783.359 329.008C787.829 344.58 788.884 360.933 786.45 376.95L736.75 704.4C732.708 730.999 719.268 755.269 698.867 772.808C678.466 790.347 652.454 799.994 625.55 800H112.5C82.6631 800 54.0483 788.147 32.9505 767.049C11.8526 745.952 0 717.337 0 687.5L0 430.8C0 400.963 11.8526 372.348 32.9505 351.25C54.0483 330.153 82.6631 318.3 112.5 318.3H190Z"/>
                                                            </svg>
                                                        </div>
                                                        <div className="vote">
                                                            <span>{comment.downvotes}</span>
                                                            <svg width="15" height="15" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clipPath="url(#clip0_304_8)">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M610 481.7L484.45 764.2C479.715 774.849 471.996 783.897 462.226 790.251C452.456 796.604 441.054 799.991 429.4 800C412.488 800.007 395.741 796.681 380.114 790.214C364.488 783.746 350.289 774.264 338.328 762.308C326.367 750.351 316.879 736.156 310.405 720.532C303.932 704.908 300.6 688.162 300.6 671.25V552.45H124.75C108.54 552.455 92.5212 548.957 77.7891 542.195C63.057 535.434 49.96 525.569 39.3949 513.275C28.8298 500.982 21.0461 486.55 16.5767 470.969C12.1073 455.388 11.0578 439.025 13.5001 423L63.2501 95.55C67.3025 68.9602 80.7474 44.7022 101.148 27.1731C121.548 9.64392 147.553 0.00377038 174.45 0L687.5 0C717.337 0 745.952 11.8526 767.05 32.9505C788.147 54.0483 800 82.6631 800 112.5V369.2C800 383.974 797.09 398.603 791.437 412.252C785.783 425.901 777.496 438.303 767.05 448.749C756.603 459.196 744.201 467.483 730.552 473.136C716.903 478.79 702.274 481.7 687.5 481.7H610Z"/>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div className="hollow-container">
                                            Ainda não há comentários
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <TodayMatchesList day={'06.10.2025'}/>
                                
                                {article.sideImages ? <>
                                    <div className="photos" style={{scale: '0.9'}}>
                                        {Object.values(article.sideImages).map((p, index) =>
                                            <div className="side-photos" key={index}>
                                                <img src={p} alt="imagem lateral" key={index} />
                                            </div>
                                        )}
                                    </div>
                                </> : <>
                                    <div>

                                    </div>
                                </>}
                            </div>
                        </div>
                    )
                })}
            </div>

            <Footer/>
        </>
    );
};