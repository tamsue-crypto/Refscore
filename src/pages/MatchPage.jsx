import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AuthModal from "../components/AuthModal";
import '../styles/global.css'
import '../styles/article-page.css'
import MatchFormation from "../components/MatchFormation";
import { useParams } from "react-router-dom";
import InfoCards from "../components/InfoCards";

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
            <InfoCards matchId={id} context={"ref"}/>
            <InfoCards matchId={id} context={"motm"}/>
            <InfoCards matchId={id} context={"brmotm"}/>

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