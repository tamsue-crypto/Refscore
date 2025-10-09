import { useState } from 'react';
import "../styles/modal.css"; // ou o css onde está seu .info-container etc.
import { teams } from '../data/teams';

export default function TeamSelector({ selectedTeam, setSelectedTeam }) {
    const [opened, setOpened] = useState(false);

    return (
        <div className="info-container flex flex-column time-selector-wrapper">
            <div className="custom-select-display flex-center" onClick={() => setOpened((prev) => !prev)}>
                {selectedTeam ? (
                    <div className="option-content">
                        <img src={`/images/club_badges/${selectedTeam.badge}`} alt="" />
                        <span>{selectedTeam.short_name}</span>
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
                                <img src={`/images/club_badges/${team.badge}`} alt={team.name} />
                                <span>{team.short_name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
