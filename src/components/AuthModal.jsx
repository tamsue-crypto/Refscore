import { useState } from "react";
import "../styles/global.css";
import "../styles/modal.css";
import TeamSelector from "./TeamSelector";

export default function AuthModal({screen, closeModal, changeToLogin, changeToLogup}){
    const [selectedTeam, setSelectedTeam] = useState(null);

    return(
        <>
            <div id="modal-overlay" className="overlay" onClick={closeModal}></div>

            {screen === "login" && (
                <>
                    <div className="modal">
                        <div className="modal-content">
                            <div className="modal-form">
                                <h2>Bem vindo de volta!</h2>
                                <span>As melhores análises sobre arbitragem, rápido para você.</span>

                                <form action="" className="auth-form">
                                    <div className="info-container flex flex-column">
                                        <label className="form-title">Email ou Nome de Usuário</label>
                                        <input type="text" placeholder="Insira seu E-mail ou Nome de Usuário" />
                                    </div>

                                    <div className="info-container flex flex-column">
                                        <label className="form-title">Senha</label>
                                        <input type="password" placeholder="Insira sua senha" />
                                    </div>

                                    <button className="general-btn">
                                        Entrar
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6666 6.99998H2.33329M11.6666 6.99998L9.33329 9.33331M11.6666 6.99998L9.33329 4.66665" stroke="white" stroke-width="1.83444" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                    <p className="pass-recovery">Esqueceu a senha?</p>
                                </form>

                                <p className="auth-nav">Ainda não tem conta? <span onClick={changeToLogup}>Inscreva-se no Refscore</span></p>
                            </div>

                            <div className="modal-image">
                                <img src="./images/style/mbappe-celebrate.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {screen === "register" && (
                <>
                    <div className="modal">
                        <div className="modal-content">
                            <div className="modal-form">
                                <h2>Seja bem vindo!</h2>
                                <span>Registre-se e tenha acesso as melhores análises de arbitragem no mundo do futebol.</span>

                                <form action="" className="auth-form">
                                    <div className="info-container flex flex-column">
                                        <label className="form-title">Email</label>
                                        <input type="text" placeholder="Insira seu E-mail" />
                                    </div>

                                    <div className="info-container flex flex-column">
                                        <label className="form-title">Nome de Usuário</label>
                                        <input type="text" placeholder="Insira seu Nome de Usuário" />
                                    </div>

                                    <div className="info-container flex flex-column">
                                        <label className="form-title">Que time você torce?</label>
                                        <TeamSelector selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam}/>
                                    </div>

                                    <div className="info-container flex flex-column">
                                        <label className="form-title">Senha</label>
                                        <input type="password" placeholder="Insira sua senha" />
                                    </div>

                                    <div className="info-container flex flex-column">
                                        <label className="form-title">Confirmar Senha</label>
                                        <input type="password" placeholder="Confirme sua senha" />
                                    </div>

                                    <button className="general-btn">
                                        Registrar
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6666 6.99998H2.33329M11.6666 6.99998L9.33329 9.33331M11.6666 6.99998L9.33329 4.66665" stroke="white" stroke-width="1.83444" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </form>

                                <p className="auth-nav">Já tem conta? <span onClick={changeToLogin}>Entre no Refscore</span></p>
                            </div>

                            <div className="modal-image">
                                <img src="./images/style/raphinha.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};