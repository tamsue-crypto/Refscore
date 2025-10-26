import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AuthModal from "../components/AuthModal";
import '../styles/global.css'
import '../styles/article-page.css'
import TodayMatchesList from "../components/TodayMatchesList";
import MatchFormation from "../components/MatchFormation";
import { useParams } from "react-router-dom";
import { matches } from "../data/matches";

export default function MatchPage() {
    const { id } = useParams();

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

    return(
        <>
            <NavBar onLoginClick={openLogin}/>
            <MatchFormation matchId={id} />

            {openedModal && (
                <AuthModal
                    screen={screen}
                    closeModal={closeModal}
                    changeToLogin={changeToLogin}
                    changeToLogup={changeToLogup}
                />
            )}


            <Footer/>
        </>
    );
};