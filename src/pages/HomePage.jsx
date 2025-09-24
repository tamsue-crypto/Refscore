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
    const[screen, setScreen] = useState("login");

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

            <div className="page-wrapper flex">
                <Jumbotron/>

                <div className="content-wrapper">
                    <div className="main-content"> {/* arbitro destaque + noticias*/}
                        <FeaturedReferee/>
                        <FeaturedNews/>
                        <LatestNews/>
                        <ExpertArticles/>
                    </div>

                    <div> {/*jogos do dia*/}
                        <TodayMatchesList day={todayDate}/>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
    );
};