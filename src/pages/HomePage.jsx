import { useState } from "react";
import ExpertArticles from "../components/ExpertArticles";
import FeaturedNews from "../components/FeaturedNews";
import FeaturedReferee from "../components/FeaturedReferee";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import TodayMatchesList from "../components/TodayMatchesList";
import AuthModal from "../components/AuthModal";

export default function HomePage() {
    const today = new Date();

    // getting day, month and year
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    // formatting to the 2 digits system
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');

    // getting everything togheter to the xx.xx.xxxx system
    const todayDate = `${formattedDay}.${formattedMonth}.${year}`;

    const[openedModal, setOpenedModal] = useState(false);

    const openLogin = () => {
        setOpenedModal(true);
    };

    const closeModal = () => {
        setOpenedModal(false);
    };

    return(
        <>
            <NavBar onLoginClick={openLogin}/>

            {openedModal && (<AuthModal closeModal={closeModal}/>)}

            <div className="page-wrapper flex">
                <Jumbotron/>

                <div className="content-wrapper">
                    <div className="main-content"> {/* arbitro destaque + noticias*/}
                        <FeaturedReferee/>
                        <FeaturedNews/>
                        <div className="news-area">
                            <h1 className='navigate-text'>
                                Notícias Recentes
                            </h1>
                            <LatestNews/>
                        </div>
                        <ExpertArticles/>
                    </div>

                    <div> {/*jogos do dia*/}
                        <TodayMatchesList day={todayDate} style={{marginTop: '40px'}}/>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
    );
};