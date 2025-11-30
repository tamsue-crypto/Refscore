import "../styles/global.css";
import "../styles/modal.css";

export default function AuthModal({closeModal}){
    return(
        <>
            <div id="modal-overlay" className="overlay" onClick={closeModal}></div>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-form">
                        <h2>Sejá Bem Vindo!</h2>
                        <span>As melhores análises sobre arbitragem, rápido para você.</span>

                        <div className="form">
                            <h1 className="form-title">Desculpe, ainda estamos trabalhando nessa funcionalidade</h1>
                        </div>
                    </div>

                    <div className="modal-image">
                        <img src={process.env.PUBLIC_URL + "/images/style/mbappe-celebrate.jpg"} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};