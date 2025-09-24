import { useState } from 'react';
import "../styles/modal.css"; // ou o css onde está seu .info-container etc.

const teams = [
  { id: '1', name: 'FC Barcelona', img: 'images/club_badges/la-liga/barcelona.png'},
  { id: '2', name: 'Real Betis', img: 'images/club_badges/la-liga/real-betis.png'},
  { id: '3', name: 'Real Madrid', img: 'images/club_badges/la-liga/real-madrid.png'},
  { id: '4', name: 'Liverpool FC', img: 'images/club_badges/premier-league/liverpool.png'},
  { id: '5', name: 'Manchester United', img: 'images/club_badges/premier-league/man-united.png'},
  { id: '6', name: 'Paris Saint-Germain', img: 'images/club_badges/ligue-1/psg.png'},
  { id: '7', name: 'Lille', img: 'images/club_badges/ligue-1/lille.png'},
  { id: '8', name: 'SL Benfica', img: 'images/club_badges/alternatives/sl-benfica.png'},
  { id: '9', name: 'FC Bayern de Munique', img: 'images/club_badges/bundesliga/bayern-munchen.svg'},
  { id: '10', name: 'Vfb Stuttgart', img: 'images/club_badges/bundesliga/stuttgart.png'},
  { id: '11', name: 'Corinthians', img: 'images/club_badges/alternatives/corinthians.png'},
  { id: '12', name: 'Cruzeiro', img: 'images/club_badges/alternatives/cruzeiro.png'}
];

export default function TeamSelector({ selectedTeam, setSelectedTeam }) {
    const [opened, setOpened] = useState(false);

    return (
        <div className="info-container flex flex-column time-selector-wrapper">
            <div className="custom-select-display flex-center" onClick={() => setOpened((prev) => !prev)}>
                {selectedTeam ? (
                    <div className="option-content">
                        <img src={selectedTeam.img} alt="" />
                        <span>{selectedTeam.name}</span>
                    </div>
                ) : (
                    <span className="placeholder">
                        Selecione seu time
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M6.5 8.5L12.5 15.5L18.5 8.5H6.5Z" fill="#CCCCCC" fill-opacity="1"/>
                            </g>
                        </svg>
                    </span>
                )}
            </div>

            {opened && (
                <div className="custom-options scroll-container">
                    {teams.map((team) => (
                        <div key={team.id} className="option" onClick={() => { setSelectedTeam(team); setOpened(false);}}>
                            <div className="option-content">
                                <img src={team.img} alt={team.name} />
                                <span>{team.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
