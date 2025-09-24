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
                        <TodayMatchesList/>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
    );
};