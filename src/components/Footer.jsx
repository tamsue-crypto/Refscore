import "../styles/global.css";
import "../styles/footer.css";

export default function Footer(){
    return(
        <>
            <footer className="flex-center">
                <div className="logo-area">
                    <img src={process.env.PUBLIC_URL + "/images/refscore-icon.png"}/>
                    <span>Refscore</span>
                </div>

                <ul className="flex flex-column">
                    <li>Sobre o projeto</li>
                    <li>Desenvolvido por Mateus Barros - ADS 2025</li>
                    <li>Refscore - Sistema de Avaliacao de Arbitragem</li>
                    <li>Instituto Federal de Santa Catarina - Tubarão</li>
                    <li>Projeto desenvolvido em 2025 </li>
                </ul>
            </footer>
        </>
    );
};