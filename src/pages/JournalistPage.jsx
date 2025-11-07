import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AuthModal from "../components/AuthModal";

export default function JournalistPage() {
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

            dapsáds
            
            <Footer/>
        </>
    );
};